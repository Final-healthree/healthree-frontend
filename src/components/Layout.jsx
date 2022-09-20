import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  
  min-width: 360px;
  max-width: 375px;
  padding-top: 70px;
  height: caret-color(100vh - 70px);
  max-height: calc(100vh - 90px - 70px);
  left: 30%;

  overflow-y: scroll; //스크롤 달아줌, 부모크기 고정      +)hidden 짤림
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    display: none;

    border-radius: 200px;
    background: #dad4d4e0;
    height: 20%;
  }
  
  background-color: #fff;
  position: fixed;
`;

export default Layout;
