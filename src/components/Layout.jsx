import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  min-width: 360px;

  max-width: 375px;
  height: 100vh;
  max-height: calc(100vh - 90px - 70px);

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


  margin: 0 auto;
  background-color: #fff;
  position: relative;
`;

export default Layout;
