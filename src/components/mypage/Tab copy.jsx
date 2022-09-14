import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
//컴퍼넌트
import MyPageCalendar from "./MyPageCalendar";
import MyVideo from "../video/MyVideo";

function Tab() {
  const [Tb, setTb] = useState(true);
  const [activeIndex, setActiveIndex]=useState(0);
  //  const [tabActive, setTabActive] = useState('');
  
  const test1 = () => {
    setActiveIndex(0)
    setTb(true);
  };

  const test2 = () => {
    setActiveIndex(1)
    setTb(false);
  };

  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="link0"
        style={{ display: "flex", flexDirection: "row", gap: "20px" }}
      >
        <Nav.Item>
          <StTex onClick={test1} className={activeIndex===0 ? "is-active" : ""} >
          <Nav.Link
           eventKey="link0"
           >
            <StTap>
            my calendar
            </StTap>
          </Nav.Link>
             </StTex>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={test2}
          >
              <StTap>
            my video
              </StTap>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {Tb ? <MyPageCalendar /> : <MyVideo />}
    </>
  );
}

export default Tab;

const StTap = styled.div`
  font-size: 18px;
  color: #000;
  display:inline-block; 
  padding:20px 0px 5px 0px;


  &:hover{
  color : #70CCA6;
  border-bottom: solid 2px #70CCA6;  
}
`;
const StTex = styled.div`
  .is-active {
    color : #70CCA6;
  }
`
