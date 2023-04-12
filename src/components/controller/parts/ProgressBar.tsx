const ProgressBar = () => {
  //  habit 다 받아와서 활용
  //
  //  달성률 체크 할 수 없어서 0%겠지만 일단 계산해서 넣어주자.
  //  주간 달성 횟수 표시 = (이번 주 체크한 개수 / 이번 주 체크해야 할 개수)
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "1vw",
          top: "1vh",
          width: "50vw",
          border: "solid 2px grey",
        }}
      >
        background length
      </div>
      <div
        style={{
          position: "absolute",
          left: "1vw",
          top: "1vh",
          width: "15vw",
          backgroundColor: "blue",
        }}
      >
        progress length
      </div>
    </div>
  );
};

export default ProgressBar;
