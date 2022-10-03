import React from "react";
import CommunityDetailPost from "../components/community/CommunityDetail";
import Comments from "../components/community/comment/Comments";
import styled from "styled-components";

const CommunityDetail = () => {
  return (
    <Container>
      <CommunityDetailPost />
      <Comments />
    </Container>
  );
};

export default CommunityDetail;

const Container = styled.div`
  overflow: auto;
  flex: 1;

  ::-webkit-scrollbar {
    display: none;
  }
`;
