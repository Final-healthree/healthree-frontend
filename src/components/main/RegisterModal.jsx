import { React, useState, useRef } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/main/Thumnail.png"
import upload from "../../assets/main/upload.png"
import { useDispatch } from "react-redux";
import { __addCertification } from "../../redux/modules/certificationSlice";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [attachment, setAttachment] = useState("");
  const fileInput = useRef(null);


  const selectVideo = (e) => {
    const reader = new FileReader();
    const theFile = fileInput.current.files[0];
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
      const {
        currentTarget: { result },
      } = finishiedEvent;
      setAttachment(result);
      console.log(theFile)
    };
  }

  const addVideo = () => {
    const formData = new FormData();
    formData.append("video", fileInput.current.files[0]);
    dispatch(__addCertification(formData));
    navigate("/", {replace: true});
  }

  return (
    <StRegisterModalContainer>
      <StTitleContainer>
        <span>팔굽혀펴기 10번</span>
        <span>2022.08.xx</span>
      </StTitleContainer>
      <StVideoRegisterContainer>
        <input
          id="file-input"
          type="file"
          // accept="img/*"
          name="video"
          ref={fileInput}
          onChange={selectVideo}
          style={{ display: "none" }}
        />
        <div className="imgDiv">
          <img src={attachment ? attachment : Thumnail} alt=""/>
        </div>

        <button>
          <label htmlFor="file-input">
            <img className="uploadImg" src={upload} alt="" />
            &nbsp;업로드
          </label>
        </button>
      </StVideoRegisterContainer>
      <StButtonContainer>
        <button onClick={addVideo}>확인</button>
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
  height: 430px;
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

  .imgDiv {
    width: 234px;
    height: 234px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: white; */

    img {
    width: 234px;
    height: 234px;
    object-fit: fill;
  }
  }



  button {
    width: 72px;
    height: 32px;
    align-self: flex-end;
    position: relative;
    right: 12px;
    margin-top: 5px;
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
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