import React from "react";
import styled from "styled-components";

// import phone from "../assets/layout/phone.png"

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  min-width: 360px;
  max-width: 375px;
  height: 100vh;
  max-height: calc(100vh - 90px - 70px);
  overflow-y: scroll; //스크롤 달아줌, 부모크기 고정      +)hidden 짤림
  margin: 0 auto;
  /* background-color: #fff; */
  position: relative;

  ::-webkit-scrollbar {
  display: none; /* Chrome , Safari , Opera */
  background-image: 0% 0% / 100% 100% no-repeat;
  }
`;

export default Layout;
