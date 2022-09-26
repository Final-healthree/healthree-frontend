import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/main/Thumnail.png";
import upload from "../../assets/main/upload.png";
import { useDispatch, useSelector } from "react-redux";
import certificationSlice, { __addCertification, ModalDoor } from "../../redux/modules/certificationSlice";
import { useNavigate } from "react-router-dom";


export default function VideoInput(props) {
  const { width, height, number, modal } = props;

  const inputRef = useRef();
  const dispatch = useDispatch();
  const [source, setSource] = useState();
  const [state, setState] = useState();
  const navigate = useNavigate();


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
    setState(file);
  };

  const addVideo = () => {
    const formData = new FormData();
    formData?.append('video', state);
    console.log(state);
    dispatch(__addCertification({
      formData,
      number
    }));
    dispatch(ModalDoor(true));
    modal(false);
  }

  // useEffect(() => {
  //   navigate("/");
  // }, [])

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
          accept=".mov,.mp4"
          name="video"
          id="file-input"
          style={{ display: "none" }}
        />
        <div className="imgDiv">
          {source ? 
          "":
          <img src={Thumnail} alt=""/> }
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

        {/* {!source && 
        <Stbutton onClick={handleChoose}>
          <img className="uploadImg" src={upload} alt="" />
          &nbsp;업로드</Stbutton>} */}

        <Stbutton onClick={handleChoose}>
          <img className="uploadImg" src={upload} alt="" />
          &nbsp;업로드</Stbutton>
        {/* {source && (
          <video
            className="VideoInput_video"
            width="100%"
            height={height}
            controls
            src={source}
          />
        )} */}

        {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
      </StVideoRegisterContainer>
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
  cursor:pointer;
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
    width: 72px;
    height: 32px;
    align-self: flex-end;
    position: relative;
    right: 12px;
    margin-top: 5px;
    background: #70CCA6;
    border: none;
    border-radius: 2px;  
  }

  .uploadImg {
    transform: translate(-0px, -1px);
  }
  `;

const StButtonContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    width: 95%;
    height: 52px;
    background: #70CCA6;  
    cursor: pointer;
    border: none;
    border-radius: 2px;
  }

`;