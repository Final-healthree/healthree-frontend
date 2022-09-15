import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";
import axios from "axios";

const LoginForm = () => {
  return (
    <div>
      <StLoginArea>
        <img src={kakaoLogin}></img>
        <a href="http://wetube-phenomenonlee.shop/api/users/auth/kakao">
          로그인
        </a>
      </StLoginArea>
    </div>
  );
};

export default LoginForm;

const StLoginArea = styled.div`
  display: flex;
  cursor: pointer;
`;
