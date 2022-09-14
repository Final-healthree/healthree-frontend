import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//svg 이미지
import headerLogo from "../assets/images/headerLogo.svg";
import back from "../assets/images/back.svg";


const Header = () => {
  const navigate = useNavigate();

  if (window.location.pathname === '/login') return null;
  return (
    <StHeader>
      <img src={back} onclick={() => navigate(-1)} style = {{width:'30px'}}/>
      <img src={headerLogo} />
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  min-width: 360px;
  max-width: 375px;
  height: 70px;
  display: flex;
  position: sticky;
  top: 0;
  /* justify-content: flex-start; */
  left: 50%;
  transform: translateX(-50%);
`;
