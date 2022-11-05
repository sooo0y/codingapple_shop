import React, { useState } from "react";
import Data from "../Data";
import axios from "axios";

const Main = () => {
  const [shoes, setShoes] = useState(Data);

  return (
    <div className="container">
      <div className="row">
        {shoes.map((shoes) => {
          return (
            <div className="col-md-4" key={shoes.id}>
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
        <button
          onClick={() => {
            axios
              .get("https://codigapple1.github.io/shop/data3.json")
              .then((data) => {
                let copy = [...shoes, ...data.data];
                setShoes(copy);
              })
              .catch(() => {
                console.log("실패");
              });

            // // 여러개의 요청을 동시에 하는 방법 + 2개 다 성공했을 때 진행해주세요.
            // Promise.all([axios.get("/url1"), axios.get("/url2")]).then(
            //   () => {}
            // );

            // // 라이브러리 없이 JS의 fetch로도 요청은 가능하지만, JSON을 array/object로 변환해주는 과정이 필요해서 번거로움
            // fetch("https://codigapple1.github.io/shop/data3.json")
            //   .then((결과) => 결과.json())
            //   .then((data) => {});
          }}
        >
          버튼
        </button>
      </div>
    </div>
  );
};

export default Main;
