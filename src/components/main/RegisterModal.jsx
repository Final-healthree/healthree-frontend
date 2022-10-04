import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addCertification } from "../../redux/modules/certificationSlice";
import { useNavigate } from "react-router-dom";
import VideoInput from "./VideoInput";

const RegisterModal = (props) => {
  const { modal, setGoalmodal,setMessage } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [attachment, setAttachment] = useState(false);
  const [newvideo, setNewVideo] = useState("");
  const fileInput = useRef(null);
  const [goalnumber, setGoalNumber] = useState(props.number);
  const getMainGoal = useSelector((state) => state.goal.list.result);
  const FirstDay = useSelector((state) => state.goal.list.result.day1.date);
  const SecondDay = useSelector((state) => state.goal.list.result.day2.date);
  const ThirdDay = useSelector((state) => state.goal.list.result.day3.date);
  

  useEffect(() => {
    setGoalNumber(props.number);
  }, []);
  

  const selectVideo = (e) => {
    const reader = new FileReader();
    const theFile = fileInput.current.files[0];
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
      const {
        currentTarget: { result },
      } = finishiedEvent;
      setAttachment(result);
    };
  }


  const addVideo = () => {
    const formData = new FormData();
    formData.append("video", fileInput.current);
    dispatch(
      __addCertification({
        formData,
        goalnumber,
      })
    );
    navigate("/");
  };

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
          <span className="goalTitle">{getMainGoal?.goal}</span>
          <span className="goalDate">{getDay(goalnumber)}</span>
        </StTitleContainer>
        <VideoInput width={400} height={300} number={goalnumber} modal={modal} setGoalmodal={setGoalmodal} setMessage={setMessage}/>
        <StButtonContainer>
          {/* <button onClick={addVideo}>확인</button> */}
        </StButtonContainer>
      </StRegisterModalContainer>
    //</StRegisterModalLayout>
  )
}

const StRegisterModalLayout = styled.div`
  position: absolute;
  top: 0;
  width: 350px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StRegisterModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 350px;
  height: 500px;
  margin-top: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: 2px 4px 6px 2px rgba(34, 36, 38, 0.15); 
`;

const StModalCloseBtn = styled.button`
  
`;

const StTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .goalTitle {
    font-weight: 900;
    /* font-family: sans-serif; */
  }

  .goalDate {
    font-weight: 300;
    font-family: sans-serif;
  }

`;


const StButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RegisterModal;
