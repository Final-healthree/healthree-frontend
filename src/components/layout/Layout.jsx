import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;

  /* background-color: pink; */
`;

export default Layout;
