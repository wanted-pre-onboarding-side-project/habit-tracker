const TempHabitCreateForm = () => {
  //  name, desc 모두 렌덤하게 생성 되도록 하자. 어차피 임시 컴포넌트니까.
  //  dispatch로 habit이 저장 되고 그것을 대쉬보드에서 보여주기만 하면 됨.
  return (
    <div style={{ border: "solid 2px grey", width: "20vw" }}>
      <h3>temp habit form</h3>
      <div>
        <input placeholder="habit name" />
        <textarea placeholder="habit desc" />
        <p>모든 요일 선택 되어 생성</p>
        <button>생성</button>
      </div>
    </div>
  );
};

export default TempHabitCreateForm;
