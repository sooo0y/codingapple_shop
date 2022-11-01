import React from "react";
import bg from "./bg.png";

const Main = () => {
  return (
    <>
      <div
        className="main_bg"
        style={{ backgroundImage: "url(" + bg + ")" }} // JS에서 문자 중간에 변수를 넣고 싶을 때 => 문자를 둘로 쪼갠 다음에 +로 연결하고 가운데에 변수
      />
    </>
  );
};

export default Main;
