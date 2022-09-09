import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  min-width: 360px;
  max-width: 375px;
  height: 100vh;
  max-height: calc(100vh - 54px - 70px);
  
  overflow-y: scroll;  //스크롤 달아줌, 부모크기 고정      +)hidden
  
  margin: 0 auto;
  background-color: #99c9f2;
  position: relative;
`;

export default Layout;
