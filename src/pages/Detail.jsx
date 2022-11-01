import React, { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Data from "../Data";

const Detail = () => {
  let { id } = useParams();
  let 찾은상품 = Data.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [state, setState] = useState(false);

  // 렌더링될 때, 업데이트될 때 실행 // Side Effect 코드들 보관함
  // 쓰는 이유? html 렌더링 후에 동작 - 어려운 연산이나, 서버에서 데이터 가져오는 작업, 타이머
  // 이름이 Effect인 이유 ? 함수의 핵심기능과 상관없는 부가기능
  useEffect(() => {
    // 렌더링 2초 후 div 숨기기
    let a = setTimeout(() => {
      setState(true);
    }, 2000);

    // useEffect 동작 전에 실행 (clean up function)
    return () => {
      // 기존 타이머 제거
      clearTimeout(a);
    };
  }, []);

  // []는 useEffect의 실행 조건 ! => 조건 안의 변수가 변할 때 + 맨 처음 렌더링때만 코드가 진행
  // 맨 처음 렌더링 때만 실행하고 싶으면 [] 처럼 배열을 비워놓기

  useEffect(() => {}); // 재렌더링마다 코드 실행
  useEffect(() => {}, []); // mount시 1회 코드 실행
  useEffect(() => {}, [state]); // 최초 mount시, 그리고 state 변경 시 코드 실행
  useEffect(() => {
    return () => {}; // unMount시 1회 코드 실행
  }, []);

  return (
    <div className="container">
      {state === false ? (
        <div className="alert alert-warning"> 2초이내 구매시 할인</div>
      ) : null}

      {count}
      <button onClick={() => setCount(count + 1)}>버튼</button>
      <div className="row">
        <div className="col-md-4">
          <img
            alt=""
            src="/bg.png"
            width="50%" // public폴더에서 이미지 사용할 땐 그냥 /이미지경로 쓰면 됨 // 서브경로에 프로젝트를 발행하면 오류가능성있음 권장 방식은 {process.env.PUBLIC_URL + '/img/bg.png'}
          />
          <h4>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
