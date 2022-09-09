import { React, useState } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import Modal from "./Modal";

const MainGoalFirst = (props) => {
  const [modalopen, setModalOpen] = useState(false);

  return (
    <StMainLayout>
      <StGuideTextContainer>
        <span>오늘 운동을 아직 안했네여 인증해주세요</span>
      </StGuideTextContainer>
      <StMainGoalTextContainer>
        <span>작심 1일</span>
      </StMainGoalTextContainer>
      <StTitleContainer>
        <p>팔굽혀펴기 10번</p>
        <p>2022.08.xx</p>
      </StTitleContainer>
      <StButtonContainer>
        <button onClick={() => {
          setModalOpen(!modalopen);
        }}>동영상 등록하기</button>
        { modalopen === true ? <RegisterModal /> : null }
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
  text-align: center;
`;

const StMainGoalTextContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StTitleContainer  = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const StButtonContainer = styled.div`

button {
  width: 100%;
  height: 40px;
  background-color: blue;
  color: white;
  cursor: pointer;
}
`;
export default MainGoalFirst;