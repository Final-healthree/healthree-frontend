import React from "react";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";

const VideoModal = (props) => {
  const url = props.url;
  const goalId = props.goal;
  const share = props.share;

  const setModalOpen = props.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  const ShareVideo = () => {
    serverAxios
      .post(process.env.REACT_APP_REST_API_KEY + `api/videos/share/${goalId}`)
      .then((res) => {
        if (res.data.success === true) {
          alert("공유 성공");
        }
      });
  };

  return (
    <ModalBody onClick={closeModal}>
      <ModalContainer>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
        <ShowVideo controls="controls">
          <source src={url} type="video/mp4" />
        </ShowVideo>
        {share === "1" ? null : (
          <ShareBtn onClick={ShareVideo}>공유하기</ShareBtn>
        )}
      </ModalContainer>
    </ModalBody>
  );
};

export default VideoModal;

const ModalBody = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(29, 27, 27, 0.8);

  display: flex;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 100%;
`;
const CloseBtn = styled.button`
  color: #70cca6;
  border: none;
  background: none;
  align-items: center;
  justify-content: center;
  padding: 10px;
  right: 12px;

  top: 130px;

  font-size: 19px;
`;

const ShowVideo = styled.video`
  background-color: #dadada;
  border-radius: 2px;
  margin: auto;
  width: 90%;
  height: 50%;
`;

const ShareBtn = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  right: 20px;
  bottom: 170px;

  background: #70cca6;
  border-radius: 2px;
  border: none;

  font-weight: 600;
  font-size: 12px;

  cursor: pointer;
`;
