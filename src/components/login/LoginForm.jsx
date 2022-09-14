import styled from "styled-components";
import kakaoLogin from "../../assets/kakaoLogin/kakaoLogin.svg";

const LoginForm = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7Jyg7JiBIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9ielNMRDgvYnRySTJjd3lZYmcvMDJvTkNvWVVlZXF4czdReVp3a2E2MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYzMDc4NjM5LCJleHAiOjE2NjMxNjUwMzl9.oMSRn7e4VEuUr8wLZH3VHgoDDFNi0_awEjH6cvZoMDY";
  const tokenTest = () => {
    localStorage.setItem("accessToken", token);
  };

  return (
    <div>
      <StLoginArea>
        <img
          src={kakaoLogin}
          onClick={() => {
            tokenTest();
            console.log("hi");
          }}
        />
      </StLoginArea>
    </div>
  );
};

export default LoginForm;

const StLoginArea = styled.div`
  display: flex;
`;
