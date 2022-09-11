import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
//svg 이미지
import tapMycalendarA from '../../assets/myCalendar/tabMycalendarA.svg'
import tapMycalendarB from '../../assets/myCalendar/tabMycalendarB.svg'
import tapMyVideoA from '../../assets/myCalendar/tabMyVideoA.svg'
import tapMyVideoB from '../../assets/myCalendar/tabMyVideoB.svg'
//컴퍼넌트
import MyPageCalendar from "./MyPageCalendar";
import MyVideo from "../video/MyVideo"


function Tab() {
  const [isListHoverMC, setIsListHoverMC] = useState(false);
  const [isListHoverMV, setIsListHoverMV] = useState(false);

  const [Tb, setTb] = useState(0);
  console.log(isListHoverMC)

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0" style = {{display: "flex", flexDirection:"row", gap: "20px" }}>
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTb(0)}}  onMouseOver={() => setIsListHoverMC(true)}
            onMouseOut={() => setIsListHoverMC(false)}
            >
            <img src={isListHoverMC ? tapMycalendarB : tapMycalendarA} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTb(1)}} onMouseOver={() => setIsListHoverMV(true)}
            onMouseOut={() => setIsListHoverMV(false)}
            >
            <img src={isListHoverMV ? tapMyVideoB : tapMyVideoA} />
          </Nav.Link>
        </Nav.Item>

      </Nav>
      {
        Tb == 0 ? <MyPageCalendar/> : null
      }
        {
          Tb == 1 ? <MyVideo/> : null
        }
        </>
  );
};

export default Tab


