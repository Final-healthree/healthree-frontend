import { React, useState, useEffect } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import { __loadMainGoal } from "../../redux/modules/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import stamp from "../../assets/main/stamp.png";
import MainModal from "./MainModal";
import FailModal from "./FailModal";

const MainGoalThird = (props) => {
  const [modalopen, setModalOpen] = useState(false);
  const [failmodalClose, setFailModalClose] = useState(true);
  const dispatch = useDispatch();
  const getMainGoal = useSelector((state) => state.goal.list.result);
  const date = (getMainGoal?.day1.date.slice(0,10))
  const today = new Date();
  const selectedDay = new Date(date);
 
  const videoUploadCheck = useSelector((state) => state.certification.list);

  console.log(videoUploadCheck)

  useEffect(() => {
    dispatch(__loadMainGoal());
  }, [])

  return (
    <StMainLayout>
      <StGuideTextContainer>
        <h1>3/3</h1>
        {videoUploadCheck?.success === undefined ?
        <>
        <span>오늘 목표 인증을 아직 안하셨군요!</span><br />
        <span>목표를 인증하고,</span><br />
        <span>작심 3일을 시작하세요!</span>
        </> 
        :
        <>
        <span>오늘 목표를 완성하셨네요!</span><br />
        <span>훌륭해요!</span>
        </>
        } 
      </StGuideTextContainer>
      {videoUploadCheck?.success === undefined ?
      today.getTime() - selectedDay.getTime() > 0 ?
        ""
       : 
       failmodalClose === true ? 
        <FailModal number={3} date={getMainGoal?.day3.date.slice(0,10)} setModal={setFailModalClose}/> 
        : null
      :
       <MainModal number={3} date={getMainGoal?.day3.date.slice(0,10)}/>
      }
      <StMainGoalTextContainer>
        {videoUploadCheck?.success === undefined ?
          <h1 className="isGoal">작심 3일</h1>
          :
          <>
          <h1 className="successGoal">작심 3일</h1>
          <img src= {stamp} alt=""/>
          </>
        }
      <StTitleContainer>
        <p>{getMainGoal?.goal}</p>
        <p className="date">{getMainGoal?.day3.slice(0,10)}</p>
      </StTitleContainer>
      </StMainGoalTextContainer>
      <StButtonContainer>
      {videoUploadCheck?.success === undefined ?
          <button onClick={() => {
            setModalOpen(!modalopen);
          }}>동영상 등록하기</button>
          :
          ""
        }
        { modalopen === true ? <RegisterModal number={3} modal={setModalOpen}/> : null }
      </StButtonContainer>
    </StMainLayout>
  )
}

const StMainLayout = styled.div`

`;

const StGuideTextContainer = styled.div`
  margin-top: 30px;
  text-align: left;
  padding-left: 20px;
`;

const StMainGoalTextContainer = styled.div`
  width: 300px;
  height: 350px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  
  .isGoal {
    font-size: 70px;
    margin-bottom: 10px;
  }

  .successGoal {
    font-size: 70px;
    margin-bottom: 10px;
    color: #A0A0A0;
  }

  & > img {
    position: absolute;
  }
`;

const StTitleContainer  = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  width: 200px;

  & > p {
    font-weight: 700;
    font-family: sans-serif;
  }

  & > .date {
    font-weight: 300;
    font-family: sans-serif;
  }

`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    width: 95%;
    height: 52px;
    background: #70CCA6;  
    cursor: pointer;
    border: none;
    border-radius: 2px;
  }
`;
export default MainGoalThird;