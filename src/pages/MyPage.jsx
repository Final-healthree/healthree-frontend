import React from "react";
import styled from "styled-components";

import Tab from "../components/mypage/Tab";
import MyPageCalendar from "../components/mypage/MyPageCalendar";
// import MyVideo from "../components/video/MyVideo";

const Mypage = () => {
  return (
    <StMainContainer>
      <Tab />
      {/* <MyPageCalendar /> */}
      {/* <MyVideo /> */}
    </StMainContainer>
  );
};

export default Mypage;

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
`;
