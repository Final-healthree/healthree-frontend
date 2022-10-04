import React from "react";
import CommunityMain from "../components/community/posts/CommunityMain";
import styled from "styled-components";

const Community = () => {
  return (
    <Container>
      <CommunityMain />
    </Container>
  );
};

export default Community;

const Container = styled.div`
  overflow: auto;
  flex: 1;
  margin-top: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
