import {
  Habit,
  HabitCheckUpdateContent,
  HabitCreateContent,
  HabitDetailUpdateContent,
  HabitManager,
  HabitsResponse,
  Period,
} from './HabitManager';

export class LocalStorageHabitManager implements HabitManager {
  private HABIT_TRACKER_LOCAL_STORAGE_KEY = 'habittrackerkey';

  async getHabits({ year, month }: Period): Promise<HabitsResponse> {
    // TODO : year, month별로 habits 가져오는 처리 필요
    return this.getHabitAndChecksFromLocalStorage();
  }

  async createHabit(content: HabitCreateContent) {
    const newHabit = this.makeNewHabit(content);

    const { habits: prevHabits, checks: prevChecks } =
      this.getHabitAndChecksFromLocalStorage();
    const habits = [...prevHabits, newHabit];
    const checks = { ...prevChecks, [newHabit.id]: [] };

    this.saveChangesToLocalStorage({ habits, checks });

    return newHabit;
  }

  async deleteHabit(id: Habit['id']): Promise<boolean> {
    const { habits: prevHabits, checks: prevChecks } =
      this.getHabitAndChecksFromLocalStorage();

    const habits = prevHabits.filter((habit) => habit.id !== id);

    const { [id]: _, ...restChecks } = prevChecks;
    const checks = restChecks;

    this.saveChangesToLocalStorage({ habits, checks });

    return true;
  }

  async updateHabitDetail({
    id,
    name,
    description,
    dates,
  }: HabitDetailUpdateContent): Promise<Habit> {
    const { habits: prevHabits, checks } =
      this.getHabitAndChecksFromLocalStorage();

    const targetHabit = prevHabits.find((habit) => habit.id === id);
    if (!targetHabit) throw new Error(`id : ${id} 인 해빗이 존재하지 않습니다`);

    const updatedHabit = {
      ...targetHabit,
      name,
      description: description || '',
      dates: dates || [],
    };

    const habits = prevHabits.map((habit) => {
      if (habit.id !== id) return habit;
      return updatedHabit;
    });

    this.saveChangesToLocalStorage({ habits, checks });

    return updatedHabit;
  }

  async updateHabitCheck({
    id,
    year,
    month,
    day,
    check,
  }: HabitCheckUpdateContent): Promise<boolean> {
    const { habits, checks } = this.getHabitAndChecksFromLocalStorage();
    const targetChecks = checks[id];
    if (!targetChecks)
      throw new Error(`id : ${id} 인 해빗이 존재하지 않습니다`);

    checks[id][day] = check;

    this.saveChangesToLocalStorage({ habits, checks });
    return true;
  }

  private getNextId(): number {
    const { habits } = this.getHabitAndChecksFromLocalStorage();
    const ids = habits.map((habit) => habit.id);
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

  private saveChangesToLocalStorage({ habits, checks }: HabitsResponse) {
    localStorage.setItem(
      this.HABIT_TRACKER_LOCAL_STORAGE_KEY,
      JSON.stringify({
        habits,
        checks,
      }),
    );
  }

  private getHabitAndChecksFromLocalStorage(): HabitsResponse {
    const localStorageData = localStorage.getItem(
      this.HABIT_TRACKER_LOCAL_STORAGE_KEY,
    );
    if (!localStorageData) {
      return { habits: [], checks: {} };
    }
    const { habits, checks } = JSON.parse(localStorageData) as HabitsResponse;
    return { habits, checks };
  }
}
