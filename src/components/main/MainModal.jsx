import React, { useState } from "react";
import styled from "styled-components";
import Modal1 from "../../assets/main/modal/Modal1.svg";
import Modal2 from "../../assets/main/modal/Modal2.svg";
import Modal3 from "../../assets/main/modal/Modal3.svg";
import { useDispatch } from "react-redux";
import { existgoal } from "../../redux/modules/existgoalSlice";
import fill from "../../assets/main/modal/fill.png";

const MainModal = (props) => {
  const { number } = props;
  const [modalOpen, setModalOpen] = useState(true);

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
      {modalOpen ? <Modal page={number} setModal={setModalOpen} /> : null}
    </div>
  );
};

function Modal(props) {
  const { page, setModal } = props;
  const dispatch = useDispatch();

  const ReturnCalendar = () => {
    dispatch(
      existgoal({
        exist: false,
      })
    );
  };

  return (
    <div>
      <StModal>
        <StModalContainer>
          <StModalTitleLayout>
            <h3>축하합니다!</h3>
          </StModalTitleLayout>
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
          {page === 3 ? (
            <StBtnLayout>
              <button
                className="retry"
                onClick={() => {
                  setModal(false);
                  ReturnCalendar();
                }}
              >
                <img src={fill} alt="" />
                &nbsp;새로운 도전하기
              </button>
            </StBtnLayout>
          ) : (
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              확인
            </button>
          )}
        </StModalContainer>
      </StModal>
    </div>
  );
}

export default MainModal;

const StModal = styled.div`
  position: fixed;
  /* left: 0; */
  /* right: 0; */
  top: 0;
  left: 11px;
  bottom: 0;

  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  z-index: 100;
  margin: auto;
  margin-left: 25px;

  width: 311px;
  height: 299px;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const StModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-bottom: 20px;

  & > h5 {
    font-family: sans-serif;
    font-weight: 400;
  }

  & > button {
    width: 155px;
    height: 32px;
    background: #70cca6;
    border-radius: 2px;
    border: none;
  }
`;

const StModalTitleLayout = styled.div`
  margin-bottom: 5px;
`;

const StBtnLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  & > .retry {
    width: 155px;
    height: 32px;
    background: #70cca6;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    border: none;
  }
`;
