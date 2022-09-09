import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

import mainLogo from '../assets/kakaoLogin/mainLogo.svg'
import LoginForm from "../components/login/LoginForm";
import teamName from "../assets/kakaoLogin/teamName.svg";

const Login = () => {
  return (
    <>
      <StLoginForm>

        <StLogo>
          <img src={mainLogo} />
        </StLogo>
        
        <LoginForm />

        <StTeamName>
          <img src={teamName} />
        </StTeamName>

      </StLoginForm>
    </>
  )
}

export default Login;

const StLoginForm = styled.div` 
display: flex;
flex-flow: column;     //다단
justify-content: center;
align-items: center;
gap: 220px;

`
const StLogo = styled.div`
  margin-top: 10px;
`
const Logo = styled.div`
img{
width: 300px;
height:300px;
}
`
const StTeamName = styled.div`
  margin-bottom: 200px ;
`
