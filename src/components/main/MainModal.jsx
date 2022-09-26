import React, { useState } from "react";
import styled from "styled-components";
import Modal1 from "../../assets/main/modal/Modal1.svg";
import Modal2 from "../../assets/main/modal/Modal2.svg";
import Modal3 from "../../assets/main/modal/Modal3.svg";
import FailModal from "./FailModal"
import { useSelector } from "react-redux";


const MainModal = (props) => {
  const { number, date } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const ModalisCheck = useSelector((state) => state.certification)
  console.log(ModalisCheck)
  
  return (
    <div>
      {/* <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {" "}
        모달{" "}
      </button> */}
      {modalOpen ? <Modal page={number} setModal={setModalOpen} date={date} /> : null}
    </div>
  );
};


function Modal(props) {
  const {page, setModal, date } =props;
  const today = new Date();
  const selectedDay = new Date(date);


  return (
    <div>
      <StModal>
        <h3>축하합니다!</h3>
        <div>
          {page === 1 ? (
            <img src={Modal1} alt="" />
          ) : page === 2 ? (
            <img src={Modal2} alt="" />
          ) : (
            <img src={Modal3} alt="" />
          )}
        </div>
        <h5>작심 {page}일에 성공하셨습니다</h5>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          {" "}
          확인{" "}
        </button>
      </StModal>
      {/* {today.getTime() - selectedDay.getTime() > 0 ?
        ""
       : 
      <FailModal page={page} setModal={setModal}/>
       } */}
    </div>
  );
}

export default MainModal;

const StModal = styled.div`
  position: fixed;
  /* left: 0; */
  /* right: 0; */
  top: 0;
  bottom: 0;

  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  z-index: 100;
  margin: auto;
  margin-left: 19px;

  width: 311px;
  height: 299px;

  text-align: center;

  & > div {
    margin-left: 82px;
  }

  & > button {
    width: 155px;
    height: 32px;
    background: #70CCA6;
    border-radius: 2px;
    border: none;
  }
`;
