import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  return (
    <div>
      <StLoginArea>
        <img src={kakaoLogin}></img>
        <a href="http://wetube-phenomenonlee.shop/api/users/auth/kakao">
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
