import React from "react";
import styled from "styled-components";
import ModalFail from "../../assets/main/modal/ModalFail.svg";
import fill from "../../assets/main/modal/fill.png";
import { existgoal } from "../../redux/modules/existgoalSlice";
import { __addFail } from "../../redux/modules/certificationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FailModal = (props) => {
  const { number, page, setModal } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ReturnCalendar = () => {
    dispatch(
      existgoal({
        exist: false,
      })
    );
    dispatch(__addFail(number));
  };

  return (
    <StModalLayout>
      <StModalContainer>
        <h3>앗! 이럴수가!!</h3>
        <img src={ModalFail} alt="" />
        <h5>작심 {number}일에 실패하셨습니다</h5>
        <StBtnLayout>
          <button
            className="check"
            onClick={() => {
              setModal(false);
              ReturnCalendar();
              navigate("/Mypage");
            }}
          >
            마이페이지로 가기
          </button>
          <button
            className="retry"
            onClick={() => {
              ReturnCalendar();
            }}
          >
            <img src={fill} alt="" />
            &nbsp;재도전하기
          </button>
        </StBtnLayout>
      </StModalContainer>
    </StModalLayout>
  );
};

const StModalLayout = styled.div`
  position: fixed;
  /* left: 0; */
  /* right: 0; */
  top: 0;
  left: 16px;
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
`;

const StModalContainer = styled.div`
  margin-top: 40px;

  & > h5 {
    font-family: sans-serif;
  }

  & > img {
    margin: 0 auto;
  }
`;

const StBtnLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  & > button {
    font-family: sans-serif;
    font-weight: 700;
  }

  & > .check {
    /* width: 93px; */
    height: 32px;
    background: #dadada;
    border-radius: 2px;
    border: none;
  }

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

export default FailModal;
