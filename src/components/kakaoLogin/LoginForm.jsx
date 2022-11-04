import kakaoLogin from "../../assets/login/kakaoLogin.svg"
import styled from "styled-components";

const LoginForm = () => {

  return (
    <div>
      <StLoginArea>
      <a href="https://wetube-phenomenonlee.shop/api/auth/kakao">
          <img src={kakaoLogin} />
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
