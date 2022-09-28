import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//svg 이미지
import headerLogo from "../assets/headerFooter/headerLogo.svg";
// import back from "../assets/images/back.svg";

const Header = () => {
  const navigate = useNavigate();

  //로그인 페이지 헤더 숨기기
  if (window.location.pathname === "/") return null;

  return (
    <StHeader>
      <Img src={headerLogo} alt="" />
    </StHeader>
  );
};
export default Header;
const StHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: 1px solid gray;
`;

const Img = styled.img`
  width: 370;
  height: 60px;
`;
