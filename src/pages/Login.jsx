import React from "react";
import styled from "styled-components";

import mainLogo from "../assets/kakaoLogin/mainLogo.svg";
import LoginForm from "../components/login/LoginForm";
import teamName from "../assets/kakaoLogin/teamName.svg";

const Login = () => {
  return (
    <>
      <StLoginForm>
        <StLogo>
          <img src={mainLogo} alt=""/>
        </StLogo>

        <LoginForm />

        <StTeamName>
          <img src={teamName} alt=""/>
        </StTeamName>
      </StLoginForm>
    </>
  );
};

export default Login;

const StLoginForm = styled.div`
  display: flex;
  flex-flow: column; //다단
  justify-content: center;
  align-items: center;
  gap: 140px;
  height: 100%;
`;
const StLogo = styled.div`
  margin-top: 100px;
`;
const StTeamName = styled.div``;
