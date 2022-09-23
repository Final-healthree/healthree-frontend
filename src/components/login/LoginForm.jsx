import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  return (
    <div>
      <StLoginArea>
        <a href={process.env.REACT_APP_REST_API_KEY + "api/auth/kakao"}>
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
