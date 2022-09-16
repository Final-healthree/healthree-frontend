import React, { useState } from "react";
import styled from "styled-components";

import Modal1 from "../../assets/main/modal/Modal1.svg"
import Modal2 from "../../assets/main/modal/Modal2.svg"
import Modal3 from "../../assets/main/modal/Modal3.svg"
import ModalFail from "../../assets/main/modal/ModalFail.svg"




const MainModal = () => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <button onClick={() => { setModal(true) }}> 모달 </button>
            {
                modal ? <Modal page={3} setModal={setModal} /> : null
            }
        </div>
    );
};

function Modal({ page, setModal }) {
    const [img, setImg] = useState('');
    const num = page;
    console.log(num)
    return (
        <div>
            <StModal>
            <h3>축하합니다!</h3>
            <div>
            {
                num === 1 ? <img src={Modal1} />
                : (num === 2
                    ? <img src={Modal2} />
                    : <img src={Modal3} />
                    )
                }
                </div>
                
                <h5>작심 {page}일에 성공하셨습니다</h5>
                <button onClick={() => { setModal(false) }}> 확인 </button>
            </StModal>
        </div>
    );
}

export default MainModal;

const StModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

  z-index: 100;
  margin: auto;

  width: 311px;
  height: 299px;

  text-align: center;;
`
