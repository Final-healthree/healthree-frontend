import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//svg 이미지
import headerLogo from "../assets/headerFooter/headerLogo.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <img src={headerLogo} onClick={() => navigate("/")} />
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
