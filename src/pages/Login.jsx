import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <>
    <StLoginForm>
      <Logo>
      <img src="https://i.pinimg.com/originals/1b/ff/88/1bff88afa70639dedcdd72c2d73ddc84.jpg" />
      </Logo>
      <LoginForm/>
    </StLoginForm>
    </>
  )
}

export default Login;

const StLoginForm = styled.div` 
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;

`
const Logo = styled.div`
img{
width: 300px;
height:300px;
}
`