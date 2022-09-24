import React from "react";
import CommunityDetailPost from "../components/community/CommunityDetail";
import Comments from "../components/community/Comments";

const CommunityDetail = () => {
  return (
    <>
      <CommunityDetailPost />
      <Comments />
    </>
  );
};

export default CommunityDetail;
