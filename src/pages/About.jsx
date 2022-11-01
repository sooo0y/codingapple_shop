import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet>
        <div>멤버임</div>
      </Outlet>
    </div>
  );
};

export default About;
