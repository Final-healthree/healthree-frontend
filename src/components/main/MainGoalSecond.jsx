import { React, useState, useEffect } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import { __loadMainGoal } from "../../redux/modules/certificationSlice";
import { useDispatch, useSelector } from "react-redux";
import stamp from "../../assets/main/stamp.png";
import MainModal from "./MainModal";
import FailModal from "./FailModal";

const MainGoalSecond = (props) => {
  const { number } = props;
  const [modalopen, setModalOpen] = useState(false);
  const [failmodalClose, setFailModalClose] = useState(true);
  const [goalmodalOpen, setGoalmodalOpen] = useState(false);
  const dispatch = useDispatch();
  const getMainGoal = useSelector((state) => state.certification.list.result);
  const date = getMainGoal?.day2.date.slice(0, 10);
  const today = new Date();
  const selectedDay = new Date((new Date(date).getTime() + (24-9) * 60 * 60 * 1000));
  const videoUploadCheck = useSelector((state) => state.certification.list.result?.day2);
  const videoUploadCheck2 = useSelector((state) => state.certification.list.result?.day1);
  const [message, setMessage] = useState(); 


  useEffect(() => {
    dispatch(__loadMainGoal());
  }, [])

  return (
    <StMainLayout>
      <StGuideTextContainer>
        {/* <h1>2/3</h1> */}
        {videoUploadCheck?.uploaded === false ?
          <>
            <p>
              오늘 목표 인증을 아직 안하셨군요!<br />
              목표를 인증하고,<br />
              작심 2일을 시작하세요!
            </p>
          </> 
        :
          <>
            <p>
              오늘 목표를 완성하셨네요!<br />
              아주 훌륭합니다!<br />
              고지가 코앞입니다.
            </p>
          </>
        } 
      </StGuideTextContainer>
      {videoUploadCheck2?.uploaded === true && videoUploadCheck?.uploaded === false ?
        today < selectedDay ?
          ""
      : 
        failmodalClose === true ? 
          <FailModal number={2} date={getMainGoal?.day2.date.slice(0,10)} setModal={setFailModalClose}/> 
        : null
      :
        ""
      }

      {videoUploadCheck?.uploaded === false ?
        ""
      :
        goalmodalOpen === true ? <MainModal number={2} date={getMainGoal?.day1.date.slice(0,10)}/> : null
      }

      <StMainGoalTextContainer>
        {videoUploadCheck?.uploaded === false ?
          <h1 className="isGoal">작심 2일</h1>
          :
          <>
            <h1 className="successGoal">작심 2일</h1>
            <img src= {stamp} alt=""/>
          </>
        }
        
        <StTitleContainer>
          <p>{getMainGoal?.goal}</p>
          <p className="date">{getMainGoal?.day2.date.slice(0,10)}</p>
        </StTitleContainer>
        {/* {videoUploadCheck?.uploaded === false ?
          <StStatus>{status}</StStatus>
          :
          <StStatus>{status}</StStatus>
        } */}
      <StStatus>{message}</StStatus>
      </StMainGoalTextContainer>
      <StButtonContainer>

      {/* 해당 날짜에만 버튼을 보여줘서 다른날 업로드를 막는다. */}  
      {/* {today.getDate() === selectedDay.getDate()-1 ?
        videoUploadCheck?.uploaded === false ? 
        <button
          onClick={() => {
            setModalOpen(!modalopen);
          }}
        >
          동영상 등록하기
        </button>
        : 
        ""
        :
        ""
      } */}

      {videoUploadCheck?.uploaded === false ? 
        today < selectedDay ?
          <button
            onClick={() => {
              setModalOpen(!modalopen);
            }}
          >
            동영상 등록하기
          </button>
        :
          ""
      : 
        ""
      }
        { modalopen === true ? 
        <RegisterModal number={2} modal={setModalOpen} setGoalmodal={setGoalmodalOpen} setMessage={setMessage}/> : null }
      </StButtonContainer>
    </StMainLayout>
  )
}

const StMainLayout = styled.div`
  position: relative;
`;

const StGuideTextContainer = styled.div`
  margin-top: 16px;
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

const StStatus = styled.p`
  /* position: absolute;
  font-size: 30px;
  color: ; */
`;

const StTitleContainer  = styled.div`
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
    background: #70CCA6;  
    cursor: pointer;
    border: none;
    border-radius: 2px;

    font-family: sans-serif;
    font-size: 15px;
    font-weight: 700;
  }
`;
export default MainGoalSecond;