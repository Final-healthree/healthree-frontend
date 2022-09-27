import { React, useState, useEffect } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import { __loadMainGoal } from "../../redux/modules/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import stamp from "../../assets/main/stamp.png";
import MainModal from "./MainModal";
import FailModal from "./FailModal";

const MainGoalFirst = (props) => {
  const [modalopen, setModalOpen] = useState(false);
  const [failmodalClose, setFailModalClose] = useState(true);
  const dispatch = useDispatch();
  const getMainGoal = useSelector((state) => state.goal.list.result);
  const date = getMainGoal?.day1.date.slice(0, 10);
  const today = new Date();
  const selectedDay = new Date(date);

  const videoUploadCheck = useSelector((state) => state.goal.list.result?.day1);
  // const videoUploadCheck1 = useSelector((state) => state);

  // console.log(videoUploadCheck)
  // console.log(videoUploadCheck1)

  useEffect(() => {
    dispatch(__loadMainGoal());
  }, []);

  return (
    <StMainLayout>
      <StGuideTextContainer>
        <h1>1/3</h1>
        {/* <span>오늘 목표 인증을 아직 안하셨군요!</span><br />
        <span>목표를 인증하고,</span><br />
        <span>작심 1일을 시작하세요!</span> */}
        {videoUploadCheck?.uploaded === false ? (
          <>
            <span>오늘 목표 인증을 아직 안하셨군요!</span>
            <br />
            <span>목표를 인증하고,</span>
            <br />
            <span>작심 1일을 시작하세요!</span>
          </>
        ) : (
          <>
            <span>오늘 목표를 완성하셨네요!</span>
            <br />
            <span>훌륭해요!</span>
          </>
        )}
      </StGuideTextContainer>
      {/* <FailModal number={1} date={getMainGoal?.day1.date.slice(0,10)} setModal={setFailModalClose}/>  */}


      <FailModal number={1} date={getMainGoal?.day1.date.slice(0,10)} setModal={setFailModalClose}/> 
      {videoUploadCheck?.uploaded === false ?
      today.getTime() - selectedDay.getTime() > 0 ?
        ""
       : 
       failmodalClose === true ? 
        <FailModal number={1} date={getMainGoal?.day1.date.slice(0,10)} setModal={setFailModalClose}/> 
        : null
      :
       <MainModal number={1} date={getMainGoal?.day1.date.slice(0,10)}/>
      }

      <StMainGoalTextContainer>
        {videoUploadCheck?.uploaded === false ? (
          <h1 className="isGoal">작심 1일</h1>
        ) : (
          <>
            <h1 className="successGoal">작심 1일</h1>
            <img src={stamp} alt="" />
          </>
        )}
        <StTitleContainer>
          <p>{getMainGoal?.goal}</p>
          <p className="date">{getMainGoal?.day1.date.slice(0, 10)}</p>
        </StTitleContainer>
      </StMainGoalTextContainer>
      <StButtonContainer>
        {videoUploadCheck?.uploaded === false ? (
          <button
            onClick={() => {
              setModalOpen(!modalopen);
            }}
          >
            동영상 등록하기
          </button>
        ) : (
          ""
        }
        { modalopen === true ? <RegisterModal number={1} modal={setModalOpen} /> : null }
      </StButtonContainer>
    </StMainLayout>
  );
};

const StMainLayout = styled.div``;

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
  position: relative;

  .isGoal {
    font-size: 70px;
    margin-bottom: 10px;
  }

  .successGoal {
    font-size: 70px;
    margin-bottom: 10px;
    color: #a0a0a0;
  }

  & > img {
    position: absolute;
  }
`;

const StTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  width: 220px;

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
    background: #70cca6;
    cursor: pointer;
    border: none;
    border-radius: 2px;
  }
`;
export default MainGoalFirst;
