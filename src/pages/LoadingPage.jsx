import React from "react";
import styled from "styled-components";
import loading from "../assets/notFound/loading.svg";

const LoadingPage = () => {
  return (
    <FullPage>
      <img src={loading} />
    </FullPage>
  );
};

export default LoadingPage;

const FullPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  animation: fadeout 0.2s 1.8s forwards;

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
