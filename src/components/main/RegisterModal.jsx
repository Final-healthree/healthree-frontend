import { React, useState } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/main/Thumnail.png"
import upload from "../../assets/main/upload.png"

const RegisterModal = () => {
  const [state, setState] = useState();

  return (
    <StRegisterModalContainer>
      <StTitleContainer>
        <span>팔굽혀펴기 10번</span>
        <span>2022.08.xx</span>
      </StTitleContainer>
      <StVideoRegisterContainer>
        <img src={Thumnail} alt="" />
        <button>
          <img className="uploadImg" src={upload} alt="" />
          &nbsp;업로드
        </button>
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
  border-radius: 2px;
`;

const StTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

`;

const StVideoRegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: max-content;
  margin: 0 auto;

  & > button {
    width: 72px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    position: relative;
    right: 12px;
  }
  .uploadImg {
    transform: translate(-1px, -1px);
  }
`;

const StButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RegisterModal;