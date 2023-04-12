const NavBtn = () => {
  //  결국 현재 어떤 주를 보고있는지가 상태값으로 존재해야한다.
  //  달성률 바도 이용하고, 이후 개발할 habit 리스트 컴포넌트도 이용 할 정보니까 컨텍스트 정보로 포함시키자.
  //
  //  setPeriod(오늘이 포함된 한 주)
  //  버튼에서 setPeriod
  return (
    <div>
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
};

export default NavBtn;
