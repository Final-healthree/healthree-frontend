import React, { useState } from "react";
import styled from "styled-components";

const VideoModal = (props) => {
  const modal = props.modal;
  console.log(modal);

  return (
    <ModalBody>
      <ShowVideo controls="controls">
        <source
          src="https://healthree.s3.ap-northeast-2.amazonaws.com/videos/1662714433501.6726"
          type="video/mp4"
        />
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
`;

const ShowVideo = styled.video`
  background-color: #dadada;
  border-radius: 2px;
  margin: auto;
  width: 20%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
