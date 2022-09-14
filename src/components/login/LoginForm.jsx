import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  return (
    <div>
      <StLoginArea>
        <img src={kakaoLogin} onClick={() => {}} />
      </StLoginArea>
    </div>
  );
};

export default LoginForm;

const StLoginArea = styled.div`
  display: flex;
`;
