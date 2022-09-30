import { React, useState, useEffect } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import { __loadMainGoal } from "../../redux/modules/certificationSlice";
import { useDispatch, useSelector } from "react-redux";
import stamp from "../../assets/main/stamp.png";
import MainModal from "./MainModal";
import FailModal from "./FailModal";

const MainGoalFirst = (props) => {
  const { number } = props;
  const [modalopen, setModalOpen] = useState(false);
  const [failmodalClose, setFailModalClose] = useState(true);
  const [goalmodalOpen, setGoalmodalOpen] = useState(false);
  const dispatch = useDispatch();
  const getMainGoal = useSelector((state) => state.certification.list.result);
  const status = useSelector((state) => state.certification.status);
  const date = getMainGoal?.day1.date.slice(0, 10);
  const today = new Date();
  const selectedDay = new Date((new Date(date).getTime() + (24-9) * 60 * 60 * 1000));
  const videoUploadCheck = useSelector((state) => state.certification.list.result?.day1);
  const a = useSelector((state) => state);


  console.log(a)
  
  useEffect(() => {
    dispatch(__loadMainGoal());
  }, []);

  return (
    <StMainLayout>
      <StGuideTextContainer>
        <h1>1/3</h1>
        {videoUploadCheck?.uploaded === false ? 
          <>
            <p>
              오늘 목표 인증을 아직 안하셨군요!<br />
              목표를 인증하고,<br />
              작심 1일을 시작하세요!
            </p>
          </>
         : 
          <>
            <p>
              오늘 목표를 완성하셨네요!<br />
              훌륭해요!<br />
              시작이 반 입니다.
            </p>
          </>
        }
      </StGuideTextContainer>
      {videoUploadCheck?.uploaded === false ? 
        today < selectedDay ?
          ""
        : 
        failmodalClose === true ? 
          <FailModal number={1} date={getMainGoal?.day1.date.slice(0,10)} setModal={setFailModalClose}/> 
          : null
        :
        goalmodalOpen === true ? <MainModal number={1} date={getMainGoal?.day1.date.slice(0,10)}/> : null
      }

      <StMainGoalTextContainer>
        {videoUploadCheck?.uploaded === false ? 
          <h1 className="isGoal">작심 1일</h1>
         : 
          <>
            <h1 className="successGoal">작심 1일</h1>
            <img src={stamp} alt="" />
          </>
        }
        <StTitleContainer>
          <p>{getMainGoal?.goal}</p>
          <p className="date">{getMainGoal?.day1.date.slice(0, 10)}</p>
        </StTitleContainer>
        <StStatus>{status}</StStatus>
      </StMainGoalTextContainer>
      <StButtonContainer>
        {videoUploadCheck?.uploaded === false ? 
          <button
            onClick={() => {
              setModalOpen(!modalopen);
            }}
          >
            동영상 등록하기
          </button>
         : 
          ""
        }
        { modalopen === true ? 
        <RegisterModal number={1} modal={setModalOpen} setGoalmodal={setGoalmodalOpen} /> : null }
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

  & > p {
    line-height: 1.5;
  }
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
    width: 370px;
  }
`;

const StStatus = styled.p`
  /* position: absolute;
  font-size: 30px;
  color: ; */
`;

const StTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  width: 240px;

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
