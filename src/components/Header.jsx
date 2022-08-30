import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeaderLayout>
      <Logo/>
    </StHeaderLayout>
  )
}

const StHeaderLayout = styled.div`
`;


export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 70px;
  line-height: 70px;

  padding: 6px 1em 0;
  box-sizing: border-box;
  
  padding: 6px 1em 0;
  box-sizing: border-box;

  display: flex;
  position: relative;
  align-items: center;
  `
 
  const Logo = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(https://i.pinimg.com/564x/1b/ff/88/1bff88afa70639dedcdd72c2d73ddc84.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `