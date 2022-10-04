import { React, useState } from "react";
import styled from "styled-components";
import jaksam from "../../assets/main/modal/Modal2.svg"


const GuideModal = (props) => {
  const { setmodal } = props;

  return (
    <StGuideModalLayout>
      <StGuideModalContainer>
        <StGuideTitle>
          <p>이용방법</p>
        </StGuideTitle>
        <StGuideContent>
          <img src= {jaksam} alt="" />
          <p>
            1. <span>딱 <span className="rc">3일</span>만!</span> 3일로 자동 세팅되는 <br />
            캘린더에서 운동목표 등록 후, <br />
            <br />
            2. <span>매일 <span className="rc">1초</span></span> 운동 영상 업로드하면 <br />
            오운완 인증 완료!! <br />
            <br />
            3. 작심삼일을 달성한 셋째 날, <br />
            3일 동안 모은 <span><span className="rc">3초영상</span>을 확인</span>해보세요! <br />
            <br />
            4. <span><span className="rc">커뮤니티</span>에 영상 자랑</span> 후 <br />
            다른 사람들의 3일도 확인하면 재미가 3배!! <br />
            <br />
          </p>
        </StGuideContent>
        <button
          onClick={()=>{
            setmodal(false);
          }}>
          확인
        </button>
      </StGuideModalContainer>
    </StGuideModalLayout>    
  )
};

const StGuideModalLayout = styled.div`
    position: relative;
    left: -13px;
    right: 0;
    top: -200px;
    bottom: 0;

    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    z-index: 100;
    margin: auto;
    margin-left: 25px;

    width: 320px;
    height: 500px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

const StGuideModalContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column; */

    & > button {
    width: 155px;
    height: 32px;
    background: #70CCA6;
    border-radius: 2px;
    border: none;
    }
`;

const StGuideTitle = styled.div`
  font-size: 20px;
`;

const StGuideContent = styled.div`
  
  & > p {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    
    & > span {
    color: #1ac17c;
    }
    
    & > .rc {
      color: red;
    }
  }
`;

export default GuideModal;