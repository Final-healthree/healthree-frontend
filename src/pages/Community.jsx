import React from "react";
import styled from "styled-components";
import CommunityMain from "../components/community/CommunityMain"

const Community = () => {
  return (
    <StCommunity>
    <CommunityMain/>
    </StCommunity>
  )
}

export default Community;
const StCommunity = styled.div`
height: 10000px;
background: linear-gradient(to top, #fc257e, #fcdf7e);
`