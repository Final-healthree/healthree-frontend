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
    <div>

      <StHeader>
        {/* <img src={back} onClick={() => navigate('/')} style = {{width:'30px'}} /> */}
        <img src={headerLogo} />
      </StHeader>
    </div>
  );
};

export default Header;

const StHeader = styled.div`
  box-sizing: border-box;
  min-width: 360px;
  max-width: 375px;
  /* padding: 0px 0px; */
  height: 70px; 
  display:flex;
  position: fixed;
  border-bottom:3px;
  
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  cursor: pointer;
  `;
const StLine = styled.hr`
  
`