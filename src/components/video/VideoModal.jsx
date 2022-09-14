import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const VideoModal = (props) => {
  const url = props.url;

  const setModalOpen = props.setModalOpen;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalBody onClick={closeModal}>
      <ShowVideo controls="controls">
        <source src={url} type="video/mp4" />
      </ShowVideo>
    </ModalBody>
  );
};

export default VideoModal;

const ModalBody = styled.div`
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
`;

const ShowVideo = styled.video`
  background-color: #dadada;
  border-radius: 2px;
  margin: auto;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;
