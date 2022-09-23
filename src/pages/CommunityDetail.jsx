import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import like from "../assets/community/like.svg";
import unLike from "../assets/community/unLike.svg";
import serverAxios from "../components/axios/server.axios";
import Comments from "../components/community/Comments";

const CommunityDetail = () => {
  const param = useParams();
  const [post, setPost] = useState({});
  console.log(param);

  const postInfo = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/posts/${param.postid}`)
      .then((res) => {
        setPost(...res.data.result.post);
      });
  };

  console.log(post);

  useEffect(() => {
    postInfo();
  }, []);

  return (
    <>
      <StContent>
        <StProfile>
          <StImg src="https://placeholder.com/" />
          <StNickName>아이유</StNickName>
        </StProfile>
        <div>
          <StVideo controls="controls">
            <source src={post.final_video} type="video/mp4" />
          </StVideo>
          <StBottom>
            <Date>{post.day1}</Date>
            <Likes>
              <img src={unLike} />
            </Likes>
          </StBottom>
        </div>
      </StContent>
      <Comments />
    </>
  );
};

export default CommunityDetail;

const StContent = styled.div`
  width: 340px;
  height: 340px;
  /* background-color: #5e6969b5; */
  display: flex;
  flex-direction: column;

  gap: 25px;
  box-sizing: border-box;

  transform: translate(5%, 5%);
`;

const StProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const StNickName = styled.div``;

const StVideo = styled.video`
  height: 223px;
  width: 223px;
  box-shadow: 1px 1px 3px 1px;
  transform: translate(25%);
`;

const StBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Date = styled.p`
  margin: 0;
`;

const Likes = styled.div``;
