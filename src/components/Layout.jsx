import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  min-width: 360px;
  max-width: 375px;
  /* height: 100vh; */
  /* height: calc(100vh - 70px - 70px); */
  margin: 0 auto;
  background-color: #99c9f2;
`;

export default Layout;
