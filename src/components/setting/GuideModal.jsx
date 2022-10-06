import React from "react";
import styled from "styled-components";
import jaksam from "../../assets/main/modal/Modal2.svg";

const GuideModal = (props) => {
  const { setmodal } = props;

  return (
    <StGuideModalLayout>
      <StGuideModalContainer>
        <StGuideTitle>
          <p>이용방법</p>
        </StGuideTitle>
        <StGuideContent>
          <div className="StimgLayout">
            <img src={jaksam} alt="" />
          </div>
          <div className="alignBox">
            <p>
              1.{" "}
              <span>
                딱 <strong>3일</strong>만!
              </span>{" "}
              3일로 자동 세팅되는{" "}
            </p>
            <p>캘린더에서 운동목표 등록 후, </p>
            <p>
              2.{" "}
              <span>
                매일 <strong>1초</strong>
              </span>{" "}
              운동 영상 업로드하면{" "}
            </p>
            <p>오운완 인증 완료!! </p>
            <p>3. 작심삼일을 달성한 셋째 날,</p>
            <p>
              3일 동안 모은{" "}
              <span>
                <strong>3초영상</strong>을 확인
              </span>
              해보세요!
            </p>
            <p>
              4.{" "}
              <span>
                <strong>커뮤니티</strong>에 영상 자랑
              </span>{" "}
              후
            </p>
            <p>다른 사람들의 3일도 확인하면 재미가 3배!! </p>
          </div>
        </StGuideContent>
        <button
          onClick={() => {
            setmodal(false);
          }}
        >
          확인
        </button>
      </StGuideModalContainer>
    </StGuideModalLayout>
  );
};

const StGuideModalLayout = styled.div`
  position: relative;
  left: -13px;
  right: 0;
  top: -160px;
  bottom: 0;

  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  z-index: 100;
  margin: auto;
  margin-left: 25px;

  width: 320px;
  height: 500px;

  /* text-align: center; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const StGuideModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  & > button {
    width: 155px;
    height: 32px;
    background: #70cca6;
    border-radius: 2px;
    border: none;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin-top: 10px;
  }
`;

const StGuideTitle = styled.div`
  font-size: 20px;
  text-align: center;
`;

const StGuideContent = styled.div`
  /* width: 300px;
  text-align: left; */

  & > .StimgLayout {
    text-align: center;
  }

  & > .alignBox {
    p:nth-child(odd) {
      padding: 20px;
    }
    p:nth-child(even) {
      text-align: center;
      margin-bottom: 15px;
    }

    & > p {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 0.3;
      margin: 0;
      & > span {
        color: #1ac17c;

        /* & > strong {
          color: black;
        }
        } */
      }
    }
  }
`;

export default GuideModal;
