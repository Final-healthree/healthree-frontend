import { React, useState, useRef } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/main/Thumnail.png";
import upload from "../../assets/main/upload.png";
import { useDispatch, useSelector } from "react-redux";
import { __addCertification } from "../../redux/modules/certificationSlice";

export default function VideoInput(props) {
  const { width, height, number, modal, setGoalmodal, setMessage } = props;

  const inputRef = useRef();
  const dispatch = useDispatch();
  const [source, setSource] = useState();
  const [state, setState] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
    setState(file);
  };

  const addVideo = () => {
    const formData = new FormData();
    formData?.append("video", state);
    dispatch(
      __addCertification({
        formData,
        number,
      })
    )
    .then((res)=>{
      if (res.error.message === "Rejected"){
        setMessage(res.payload)
      }
      console.log(res.payload)
    })
    modal(false);
    setGoalmodal(true);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };


  return (
    <div className="VideoInput">
      <StVideoRegisterContainer>
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept="video/*"
          name="video"
          id="file-input"
          style={{ display: "none" }}
        />
        <div className="imgDiv">
          {source ? "" : <img src={Thumnail} alt="" />}
          {source && (
            <video
              className="VideoInput_video"
              width="100%"
              height={height}
              controls
              src={source}
            />
          )}
        </div>
        <Stbutton onClick={handleChoose}>
          <img className="uploadImg" src={upload} alt="" />
          &nbsp;업로드
        </Stbutton>
      </StVideoRegisterContainer>
      <StUploadGuide>
        <span>
          * 세로 영상만 지원합니다.
          <br />
          <br />
          (1초 ~ 3초 이하의 새로찍은 영상으로 올려주세요!)
        </span>
      </StUploadGuide>
      <StButtonContainer>
        <button onClick={addVideo}>확인</button>
      </StButtonContainer>
    </div>
  );
}

const Stbutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 500;
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

    video {
      width: 234px;
      height: 234px;
      object-fit: fill;
    }
    img {
      width: 234px;
      height: 234px;
      object-fit: fill;
    }
  }

  & > button {
    width: 75px;
    height: 32px;
    align-self: flex-end;
    position: relative;
    right: 12px;
    margin-top: 5px;
    background: #70cca6;
    border: none;
    border-radius: 2px;
    font-weight: 700;
  }

  .uploadImg {
    transform: translate(-0px, -1px);
  }
`;

const StUploadGuide = styled.div`
  text-align: center;
  margin-top: 30px;

  & > span {
    font-weight: 600;
    font-family: sans-serif;
    font-size: 15px;
  }
`;

const StButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    width: 95%;
    height: 52px;
    background: #70cca6;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
  }
`;
