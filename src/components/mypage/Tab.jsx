import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
//컴퍼넌트
import MyPageCalendar from "./MyPageCalendar";
import MyVideo from "../video/MyVideo";

function Tab() {
  const [Tb, setTb] = useState(true);
  const [show, setShow] = useState(true);

  const test = () => {
    setTb(true);
    setShow(true);
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
          <Nav.Link eventKey="link0" onClick={test}>
            {show ? (
              <StTap borderColor="#70cca6" color="#70cca6">
                my calendar
              </StTap>
            ) : (
              <StTap borderColor="white" color="black">
                my calendar
              </StTap>
            )}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={test2}>
            {show ? (
              <StTap borderColor="white" color="black">
                my video
              </StTap>
            ) : (
              <StTap borderColor="#70cca6" color="#70cca6">
                my video
              </StTap>
            )}
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
  color: ${(props) => props.color};
  display: inline-block;
  padding: 20px 0px 5px 0px;

  border-bottom: solid 2px ${(props) => props.borderColor};

  &:hover {
    color: #70cca6;
    border-bottom: solid 2px #70cca6;
  }
`;
