import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/main/Thumnail.png";
import upload from "../../assets/main/upload.png";
import { useDispatch, useSelector } from "react-redux";
import { __addCertification } from "../../redux/modules/certificationSlice";
import { useNavigate } from "react-router-dom";
import { RdxVideo, Overlay, Controls } from 'react-html5-video-editor';
import VideoPlayer from "./VideoPlayer";
// import "node_modules/video-react/dist/video-react.css";

const RegisterModal = (props) => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [attachment, setAttachment] = useState("");
  const fileInput = useRef(null);
  const [goalnumber, setGoalNumber] = useState(); 
  const getMainGoal = useSelector((state) => state.goal.list.result);
  const FirstDay = useSelector((state) => state.goal.list.result.day1);
  const SecondDay = useSelector((state) => state.goal.list.result.day2);
  const ThirdDay = useSelector((state) => state.goal.list.result.day3);
  
  const option =  {
    autoPlay: false,
    loop: false,
    controls: true,
    volume:	1.0,
    preload: "auto",
    cropEnabled: true,
  }
  const VideoEditor = (props) => {
    return (
      <RdxVideo {...option} autoPlay loop muted poster="../../assets/main/ThumnailReady.png">
        <Overlay />
        <Controls />
        <source src="../../assets/main/1sevideo.mp4" type="video/mp4" />
      </RdxVideo>
      // document.getElementById('root')
    )
  }



  useEffect(() => {
    setGoalNumber(props.number);
  }, []);
  
  console.log(goalnumber)


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
    dispatch(__addCertification({
      formData,
      goalnumber
    }));
    // navigate("/", {replace: true});
    navigate("/");
  }

  const getDay = (e) => {
      if (e === 1){
        return FirstDay.slice(0,10);
      }
      else if (e === 2){
        return SecondDay.slice(0,10);
      } 
      else if (e === 3) {
        return ThirdDay.slice(0,10);
      }
      
    
  }

  return (
    // <StRegisterModalLayout>
    <StRegisterModalContainer>
      <StTitleContainer>
        <span>{getMainGoal?.goal}</span>
        {/* <span>{goalnumber === 1 ? FirstDay : SecondDay}</span> */}
        <span>{getDay(goalnumber)}</span>
      </StTitleContainer>
      <StVideoRegisterContainer>
        <input
          id="file-input"
          type="file"
          accept="video/*"
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
      {/* <VideoEditor /> */}
      {/* <VideoPlayer/> */}
      <StButtonContainer>
        <button onClick={addVideo}>확인</button>
      </StButtonContainer>
    </StRegisterModalContainer>
    // </StRegisterModalLayout>
  )
}

const StRegisterModalLayout = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center; */
`;

const StRegisterModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 350px;
  height: 450px;
  background-color: red;
  margin-top: 90px;
  /* background-color: rgb(255, 255, 255); */
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
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
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RegisterModal;