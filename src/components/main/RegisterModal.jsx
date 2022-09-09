import { React, useState } from "react";
import styled from "styled-components";

const RegisterModal = () => {
  const [state, setState] = useState();

  return (
    <StRegisterModalContainer>
      <StTitleContainer>
        <span>팔굽혀펴기 10번</span>
        <span>2022.08.xx</span>
      </StTitleContainer>
      <StVideoRegisterContainer>
        <p>영상 자리</p>
        <img src="https://www.figma.com/file/I9DmxmZM5auR7hcStYCnEs/220827_2%EC%A1%B0_%EC%9E%91%EC%8B%AC%EC%82%BC%EC%9D%BC?node-id=35%3A305" alt= "" />
        <button>파일 업로드</button>
      </StVideoRegisterContainer>
      <StButtonContainer>
        <button>확인</button>
      </StButtonContainer>
    </StRegisterModalContainer>
  )
}

const StRegisterModalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StRegisterModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 350px;
  height: 400px;
  background-color: red;
  margin-top: 80px;
`;

const StTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

const StVideoRegisterContainer = styled.div`
  & > button {
    width: 72px;
    height: 32px;
  }
`;

const StButtonContainer = styled.div`
`;

export default RegisterModal;