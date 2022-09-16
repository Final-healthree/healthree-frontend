import React, { useState } from "react";
import styled from "styled-components";

import Modal1 from "../../assets/main/modal/Modal1.svg"
const MainModal = () => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <button onClick={() => { setModal(true) }}> 모달 </button>
            {
                modal = { modal } == true ? <Modal /> : null
            }
        </div>

    );
};

function Modal(props) {
    const modal =props.modal
    const setModal = props.setModal
    return (
        <div>
            <StModal>
                <h1>축하합니다!</h1>
                <img src={Modal1} />
                <h2>작심 1일에 성공하셨습니다</h2>
                <button onClick={() => { setModal(true) }}> 모달 </button>
            {
                modal = { modal } == true ? <Modal /> : null
            }
            </StModal>
        </div>
    );
}

export default MainModal;

const StModal = styled`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  margin: auto;

  width: 360px;
  height: 420px;
`