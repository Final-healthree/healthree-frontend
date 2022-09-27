import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//svg 이미지
import headerLogo from "../assets/headerFooter/headerLogo.svg";
// import back from "../assets/images/back.svg";

const Header = () => {
  const navigate = useNavigate();
    //로그인 페이지 헤더 숨기기
    if (window.location.pathname === '/login') return null;

  return (
    <StHeader>
      {/* <img src={back} onclick={() => navigate('/login')} style = {{width:'30px'}}/> */}
      <img src={headerLogo} alt=""/>
    </StHeader>
  );  
};
export default Header;
const StHeader = styled.div`
  /* min-width: 360px;
  max-width: 375px; */
  width: 375px;
  height: 70px;
  display: flex;
  position: sticky;
  top: 0;
  left: 50%;
  /* justify-content: flex-start; */
  transform: translateX(-50%);
`;