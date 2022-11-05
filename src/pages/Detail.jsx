import React, { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Data from "../Data";
import { Nav } from "react-bootstrap";

const Detail = () => {
  let { id } = useParams();
  let 찾은상품 = Data.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [state, setState] = useState(false);
  let [tap, setTap] = useState(0);

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

  // useEffect 심화
  // // []는 useEffect의 실행 조건 ! => 조건 안의 변수가 변할 때 + 맨 처음 렌더링때만 코드가 진행
  // // 맨 처음 렌더링 때만 실행하고 싶으면 [] 처럼 배열을 비워놓기

  // useEffect(() => {}); // 재렌더링마다 코드 실행
  // useEffect(() => {}, []); // mount시 1회 코드 실행
  // useEffect(() => {}, [state]); // 최초 mount시, 그리고 state 변경 시 코드 실행
  // useEffect(() => {
  //   return () => {}; // unMount시 1회 코드 실행
  // }, []);

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
            width="50%"
            // public폴더에서 이미지 사용할 땐 그냥 /이미지경로 쓰면 됨
            // 서브경로에 프로젝트를 발행하면 오류가능성있음 권장 방식은 {process.env.PUBLIC_URL + '/img/bg.png'}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      {/* 탭 */}
      <Nav justify variant="tabs" defaultActiveKey="link0">
        <Nav.Item onClick={() => setTap(0)}>
          <Nav.Link eventKey="link0">버튼 0</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setTap(1)}>
          <Nav.Link eventKey="link1">버튼 1</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => setTap(2)}>
          <Nav.Link eventKey="link2">버튼 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Taps tap={tap} />
    </div>
  );
};

// component에서는 return이 꼭 필요하다!!
const Taps = ({ tap }) => {
  if (tap === 0) {
    return <div>내용0</div>;
  } else if (tap === 1) {
    return <div>내용1</div>;
  } else {
    return <div>내용2</div>;
  }

  // // 왼쪽에 있는 배열에서 오른쪽번째 추출
  // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]
};

export default Detail;
