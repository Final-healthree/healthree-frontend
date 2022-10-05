import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";
import shareimg from "../../assets/video/share-2.png";

const VideoModal = (props) => {
  const url = props.url;
  const goalId = props.goal;
  const share = props.share;
  const navigate = useNavigate();

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
          navigate("/community");
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
          <ShareBtn onClick={ShareVideo}>
            <img src={shareimg} alt=""/>
            &nbsp;공유하기
          </ShareBtn>
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
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;
const CloseBtn = styled.button`
  align-self: flex-end;
  margin-bottom: 10px;
  font-size: 19px;
  background: none;
  border: none;
  color: #70cca6;
  cursor: pointer;
`;

const ShowVideo = styled.video`
  background-color: #dadada;
  border-radius: 2px;
  margin: 0;
  width: 100%;
  height: 346px;
`;

const ShareBtn = styled.button`
  width: 80px;
  height: 30px;
  align-self: flex-end;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  background: #70cca6;
  border-radius: 2px;
  border: none;

  font-family: sans-serif;
  font-weight: 600;
  font-size: 12px;

  cursor: pointer;

  & > img {
    transform: translate(0px, 1px);
  }
`;
