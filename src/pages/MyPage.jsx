import React from "react";
import styled from "styled-components";
import Tab from "../components/mypage/Tab";

const Mypage = () => {
  return (
    <StMainContainer>
      <Tab />
    </StMainContainer>
  );
};

export default Mypage;

const StMainContainer = styled.div`
  width: 100%;
  height: 500px;
`;
