import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  min-width: 370px;
  height: 100vh;

  margin: 0 auto;

  position: relative;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 5px #9c939376;
  border-radius: 2px;
`;

export default Layout;
