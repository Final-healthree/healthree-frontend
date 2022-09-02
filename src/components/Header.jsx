import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//임시 아이콘
import { HiChevronLeft } from "react-icons/hi";


const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <Back>
      <HiChevronLeft/>
      </Back>
      <Logo/>
    </StHeader>
  );
}


export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  `
 
  const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(https://i.pinimg.com/564x/1b/ff/88/1bff88afa70639dedcdd72c2d73ddc84.jpg);
  background-position: center;
  background-size: 175px;

  `

  const Back = styled.div`
 display: flex;
 justify-content: flex-start;
  
  `