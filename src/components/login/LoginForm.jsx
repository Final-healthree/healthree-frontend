import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  return (
    <div>
      <StLoginArea>
        <a href="http://43.200.253.0/api/users/auth/kakao">
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
