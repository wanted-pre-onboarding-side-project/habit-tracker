// TODO : 다음에 진행
const HabitList = () => {
  return (
    <section className="habit-list">
      <div className="habit-list-header grid-weekly">
        <p>해빗 이름</p>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
        <p>일</p>
      </div>
      <div className="habits">
        <div className="habit-item grid-weekly">
          <p>sdfsdf나의 습관sdfsdfsdfsdsd111fsdfsdffsdfs1</p>
          <div>
            <input type="checkbox" name="day" value="월" />
          </div>
          <div>
            <input type="checkbox" name="day" value="화" />
          </div>
          <div>
            <input type="checkbox" name="day" value="수" />
          </div>
          <div>
            <input type="checkbox" name="day" value="목" />
          </div>
          <div>
            <input type="checkbox" name="day" value="금" />
          </div>
          <div>
            <input type="checkbox" name="day" value="토" />
          </div>
          <div>
            <input type="checkbox" name="day" value="일" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitList;
