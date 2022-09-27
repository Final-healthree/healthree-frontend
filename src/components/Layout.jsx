import React from "react";
import styled from "styled-components";

// import phone from "../assets/layout/phone.png"

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  min-width: 360px;
  max-width: 375px;
  height: 700vh;
  max-height: calc(100vh - 200px);
  margin: 0 auto;
  /* background-color: #fff; */
  position: relative;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
  display: none; 
};

background-image: 0% 0% / 100% 100% no-repeat;

`;

export default Layout;
