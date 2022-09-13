import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
//svg 이미지
import tapMycalendarA from "../../assets/myCalendar/tabMycalendarA.svg";
import tapMycalendarB from "../../assets/myCalendar/tabMycalendarB.svg";
import tapMyVideoA from "../../assets/myCalendar/tabMyVideoA.svg";
import tapMyVideoB from "../../assets/myCalendar/tabMyVideoB.svg";
//컴퍼넌트
import MyPageCalendar from "./MyPageCalendar";
import MyVideo from "../video/MyVideo";

function Tab() {
  const [isListHoverMC, setIsListHoverMC] = useState(false);
  const [isListHoverMV, setIsListHoverMV] = useState(false);
  const [show, setShow] = useState(false);

  const [Tb, setTb] = useState(false);

  const test = () => {
    setTb(true);
    setIsListHoverMC(!isListHoverMC);
  };

  const test2 = () => {
    setTb(false);
    setShow(false);
  };

  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="link0"
        style={{ display: "flex", flexDirection: "row", gap: "20px" }}
      >
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={test}
            onMouseOver={() => setIsListHoverMC(false)}
            onMouseOut={() => setIsListHoverMC(true)}
          >
            <img src={isListHoverMC ? tapMycalendarA : tapMycalendarB} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={test2}
            onMouseOver={() => setIsListHoverMV(false)}
            onMouseOut={() => setIsListHoverMV(true)}
          >
            <img src={isListHoverMV ? tapMyVideoA : tapMyVideoB} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {Tb ? <MyPageCalendar /> : <MyVideo />}
    </>
  );
}

export default Tab;
