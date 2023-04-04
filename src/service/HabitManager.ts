export class LocalHabitManager implements HabitManager {
  private habits: Habit[];
  private checks: { [k: Habit['id']]: HabitCheck[] };
  private HABIT_TRACKER_LOCAL_STORAGE_KEY = 'habittrackerkey';

  constructor() {
    const localStorageData = localStorage.getItem(
      this.HABIT_TRACKER_LOCAL_STORAGE_KEY,
    );
    if (!localStorageData) {
      this.habits = [];
      this.checks = {};
    } else {
      const { habits, checks } = JSON.parse(localStorageData) as HabitsResponse;
      this.habits = habits;
      this.checks = checks;
    }
  }

  async getHabits({ year, month }: Period): Promise<HabitsResponse> {
    return {
      habits: this.habits,
      checks: this.checks,
    };
  }

  async createHabit(content: HabitCreateContent) {
    const newHabit = this.makeNewHabit(content);
    this.habits = [...this.habits, newHabit];
    this.checks = { ...this.checks, [newHabit.id]: [] };

    this.saveChangesToLocalStorage();

    return newHabit;
  }

  async deleteHabit(id: Habit['id']): Promise<boolean> {
    this.habits = this.habits.filter((habit) => habit.id !== id);
    const { [id]: _, ...restChecks } = this.checks;
    this.checks = restChecks;

    this.saveChangesToLocalStorage();

    return true;
  }

  async updateHabitDetail({
    id,
    name,
    description,
    dates,
  }: HabitDetailUpdateContent): Promise<Habit> {
    const targetHabit = this.habits.find((habit) => habit.id === id);
    if (!targetHabit) throw new Error(`id : ${id} 인 해빗이 존재하지 않습니다`);

    const updatedHabit = {
      ...targetHabit,
      name,
      description: description || '',
      dates: dates || [],
    };

    this.habits = this.habits.map((habit) => {
      if (habit.id !== id) return habit;
      return updatedHabit;
    });

    this.saveChangesToLocalStorage();

    return updatedHabit;
  }

  async updateHabitCheck({
    id,
    year,
    month,
    day,
    check,
  }: HabitCheckUpdateContent): Promise<boolean> {
    const targetChecks = this.checks[id];
    if (!targetChecks)
      throw new Error(`id : ${id} 인 해빗이 존재하지 않습니다`);
    this.checks[id][day] = check;

    this.saveChangesToLocalStorage();
    return true;
  }

  private getNextId(): number {
    const ids = this.habits.map((habit) => habit.id);
    if (ids.length) return Math.max(...ids) + 1;
    return 1;
  }

  private makeNewHabit({
    name,
    description,
    dates,
  }: HabitCreateContent): Habit {
    const nextId = this.getNextId();
    return {
      id: nextId,
      name,
      description: description || '',
      dates: dates || [],
    };
  }

  private saveChangesToLocalStorage() {
    localStorage.setItem(
      this.HABIT_TRACKER_LOCAL_STORAGE_KEY,
      JSON.stringify({
        habits: this.habits,
        checks: this.checks,
      }),
    );
  }
}

export interface HabitManager {
  getHabits({ year, month }: Period): Promise<HabitsResponse>;
  createHabit(content: HabitCreateContent): Promise<Habit>;
  deleteHabit(id: Habit['id']): Promise<boolean>;
  updateHabitDetail(content: HabitDetailUpdateContent): Promise<Habit>;
  updateHabitCheck(content: HabitCheckUpdateContent): Promise<boolean>;
}

export interface Habit {
  id: number;
  name: string;
  description: string;
  dates: Day[];
}

export interface HabitsResponse {
  habits: Habit[];
  checks: { [k: Habit['id']]: HabitCheck[] };
}

export interface HabitCreateContent extends Period {
  name: Habit['name'];
  description?: Habit['description'];
  dates?: Habit['dates'];
}

export interface HabitDetailUpdateContent extends HabitCreateContent {
  id: Habit['id'];
}

export interface HabitCheckUpdateContent extends Period {
  id: Habit['id'];
  day: number;
  check: HabitCheck;
}

export type Period = {
  year: number;
  month: number;
};

type HabitCheck = undefined | 'done';

type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
