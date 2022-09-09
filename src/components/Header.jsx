import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//svg 이미지
import headerLogo from '../assets/images/headerLogo.svg'


const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <img src = {headerLogo} onClick={() => navigate("/")}/>
    </StHeader>
    
  );
}


export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: flex-start;
  `
 