import { React, useState } from "react";
import styled from "styled-components";

const RegisterModal = () => {
  const [state, setState] = useState();

  return (
    <StRegisterModalContainer>
      <StTitleContainer>
        <span>팔굽혀펴기 10번</span>
        <p>2022.08.xx</p>
      </StTitleContainer>
      <StVideoRegisterContainer>
        <p>영상 자리</p>
        <button>파일 업로드</button>
      </StVideoRegisterContainer>
      <StButtonContainer>
        <button>확인</button>
      </StButtonContainer>
    </StRegisterModalContainer>
  )
}

const StRegisterModalContainer = styled.div`
  position: absolute;
  top: 0;
`;

const StTitleContainer = styled.div`
`;

const StVideoRegisterContainer = styled.div`
`;

const StButtonContainer = styled.div`
`;

export default RegisterModal;