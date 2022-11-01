import React from "react";
import DetailCommunityPost from "../components/community/posts/DetailCommunityPost";
import Comment from "../components/community/comment/Comment";
import styled from "styled-components";

const CommunityDetail = () => {
  return (
    <Container>
      <DetailCommunityPost />
      <Comment />
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
