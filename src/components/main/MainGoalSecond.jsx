import { React, useState, useEffect } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import Modal from "./Modal";
import { __loadMainGoal } from "../../redux/modules/goalSlice";
import { useDispatch, useSelector } from "react-redux";

const MainGoalSecond = (props) => {
  const [modalopen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [goalnumber, setGoalNumber] = useState(); 
  const getMainGoal = useSelector((state) => state.goal.list.result)


  // console.log(getMainGoal)
  
  // useEffect(() => {
  //   setGoalNumber(props.number);
  // }, []);
  
  // console.log(goalnumber)

  useEffect(() => {
    dispatch(__loadMainGoal());
  }, [])

  return (
    <StMainLayout>
      <StGuideTextContainer>
        <h1>2/3</h1>
        <span>오늘 목표 인증을 아직 안하셨군요!</span><br />
        <span>목표를 인증하고,</span><br />
        <span>작심 2일을 시작하세요!</span>
      </StGuideTextContainer>
      <StMainGoalTextContainer>
        <h1>작심 2일</h1>
      <StTitleContainer>
        <p>{getMainGoal?.goal}</p>
        <p className="date">{getMainGoal?.day2.slice(0,10)}</p>
      </StTitleContainer>
      </StMainGoalTextContainer>
      <StButtonContainer>
        <button onClick={() => {
          setModalOpen(!modalopen);
        }}>동영상 등록하기</button>
        { modalopen === true ? <RegisterModal number={2} /> : null }
        {/* <button onClick={() => {
          {RegisterModal && (
            <Modal closeModal={() => setModalOpen(!modalopen)}>
              <RegisterModal />
            </Modal>
          )}
        }}>동영상 등록하기</button>
        { modalopen === true ? <RegisterModal /> : null } */}
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
  
  h1 {
    font-size: 70px;
    margin-bottom: 10px;
  }
`;

const StTitleContainer  = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  width: 200px;

  p {
    font-weight: 600;
  }

  .date {
    font-weight: 300;
  }

`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 95%;
    height: 52px;
    background: #70CCA6;  
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 2px;
  }
`;
export default MainGoalSecond;