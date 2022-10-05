import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/headerFooter/headerLogo.svg";
import Logo from "../../assets/headerFooter/logo.png"

const Header = () => {
  const navigate = useNavigate();
  //로그인 페이지 헤더 숨기기
  if (window.location.pathname === "/") return null;

  const token = localStorage.getItem("Token");
  if (token === null) return null;
  
  return (
    <StHeader>
      {/* <Img onClick ={()=> navigate("/main")} src={headerLogo} alt="" style = {style} /> */}
      <Img onClick ={()=> navigate("/main")} src={Logo} alt="" />
    </StHeader>
  )
};
export default Header;

// const StHeader = styled.div`
//   display: flex;
//   position: sticky;
//   width: 100%;
//   height: 60px;
//   top: 0;
//   left: 0;
//   border-bottom: 1px solid gray;
//   flex-direction: row;
//   padding: 3px 0;
//   background-color: #fff;
// `;

const StHeader = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  /* height: 60px; */
  flex: 0 0 60px;
  top: 0;
  left: 0;
  border-bottom: 1px solid gray;
  flex-direction: row;
  padding: 3px;
  padding-left: 25px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 16px;
  width: 71px;
  cursor: pointer;
`;
