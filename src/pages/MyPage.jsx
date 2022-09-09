import React from "react";
import MyVideo from "../components/video/MyVideo";
import styled from "styled-components";

const Mypage = () => {
  return (
    <StMainContainer>
      Mypage
      <MyVideo />
    </StMainContainer>
  );
};

export default Mypage;

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
`;
