import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/headerFooter/headerLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  //로그인 페이지 헤더 숨기기
  if (window.location.pathname === "/") return null;

  const token = localStorage.getItem("Token");
  if (token === null) return null;
  
  const style = {cursor : "pointer"};

  return (
    <StHeader>
      <Img onClick ={()=> navigate("/main")} src={headerLogo} alt="" style = {style} />
    </StHeader>
  )
};
export default Header;
const StHeader = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  border-bottom: 1px solid gray;
  flex-direction: row;
  padding: 3px 0;
  background-color: #fff;
`;

const Img = styled.img`
  border-radius: 30px;
`;
