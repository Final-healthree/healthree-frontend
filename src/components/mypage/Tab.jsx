import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
//컴퍼넌트
import MyPageCalendar from "./MyPageCalendar";
import MyVideo from "../video/MyVideo";

function Tab() {
  const [show, setShow] = useState(false);
  const [Tb, setTb] = useState(true);

  const test = () => {
    setTb(true);
  };

  const test2 = () => {
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
          <Nav.Link
            eventKey="link0"
            onClick={test}
          >
            <StTap>
            my calendar
            </StTap>
          </Nav.Link>
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

