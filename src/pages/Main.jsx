import React, { useState } from "react";
import Data from "../Data";

const Main = () => {
  const [shoes, setShoes] = useState(Data);

  return (
    <div className="container">
      <div className="row">
        {shoes.map((shoes) => {
          return (
            <div className="col-md-4">
              <img
                alt=""
                src="/bg.png"
                width="50%" // public폴더에서 이미지 사용할 땐 그냥 /이미지경로 쓰면 됨 // 서브경로에 프로젝트를 발행하면 오류가능성있음 권장 방식은 {process.env.PUBLIC_URL + '/img/bg.png'}
              />
              <h4>{shoes.title}</h4>
              <p>{shoes.content}</p>
              <p>{shoes.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;