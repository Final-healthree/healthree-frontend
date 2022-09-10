import React from "react";
// import MyVideo from "../components/video/MyVideo";
import styled from "styled-components";
import MyPageCalendar from "../components/mypage/MyPageCalendar";

const Mypage = () => {
  return (
    <StMainContainer>
      <MyPageCalendar/>
      {/* <MyVideo /> */}
    </StMainContainer>
  );
};

export default Mypage;

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
`;
