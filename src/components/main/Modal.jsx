import React from "react";
import styled from "styled-components";

const Modal = (props) => {

  const { open, close, header } = props;
  
  const closeModal = () => {
    props.closeModal();
  }

  return (
    <StModal>
      <div className="Modal" onClick={closeModal}>
        <div className="modalBody" onClick={(e) => e.stopPropagation()}>
          <button id="modalCloseBtn" onClick={closeModal}>
            ✖
          </button>
          {props.children}
        </div>
      </div>
    </StModal>
  );
}

const StModal = styled.div`
  
  .Modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalBody {
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}

#modalCloseBtn {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
}

#modalCloseBtn:hover {
  cursor: pointer;
}

`;

//정우님 모달 구현 코드
// const Modal = styled.div`
// display: flex;
// flex-flow: column;

// height: 100%;
// width: 100%;

// position: absolute;
// top: 0;
// left: ${(props) => (props.toggle ? "0%" : "100%")};
// z-index: ${(props) => (props.toggle ? 100 : -1)};

// transition-duration: 0.7s;

// background: white;
// `;

// export default Modal;
// const OpacityModal = styled.div`
// height: 100%;
// width: 100%;

// position: absolute;
// top: 0;
// left: 0;
// z-index: ${(props) => (props.toggle ? 100 : -1)};
// opacity: ${(props) => (props.toggle ? 1 : 0)};

// transition-duration: 0.3s;

// background: white;
// `;

// export default OpacityModal;
//여기까지


const StModalButton = styled.button``;


export default Modal;