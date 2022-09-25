import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import likeimg from "../../assets/community/like.svg";
import unLikeimg from "../../assets/community/unLike.svg";
import serverAxios from "../axios/server.axios";

const CommunityDetailPost = () => {
  const param = useParams();
  const [getpost, setGetpost] = useState({});
  const [like, setLike] = useState(false);

  const onlike = (postid, like) => {
    if (like) {
      serverAxios
        .delete(process.env.REACT_APP_REST_API_KEY + `api/posts/like/${postid}`)
        .then((res) => {
          if (res.data.result === "좋아요 취소 성공") {
            setLike(false);
          }
        });
    } else {
      serverAxios
        .post(process.env.REACT_APP_REST_API_KEY + `api/posts/like/${postid}`)
        .then((res) => {
          if (res.data.result === "좋아요 성공") {
            console.log(res);
            setLike(true);
          }
        });
    }
  };

  const postInfo = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/posts/${param.postid}`)
      .then((res) => {
        console.log(res);
        setGetpost(res.data.result);
      });
  };

  useEffect(() => {
    postInfo();
  }, []);

  console.log(typeof (getpost.post && getpost.post[0].final_video));
  console.log(getpost.post && getpost.post[0].final_video);
  const url = getpost.post && getpost.post[0].final_video;
  return (
    <>
      <StContent>
        <StProfile>
          <StImg src={getpost.profile_image} />
          <StNickName>{getpost.nickname}</StNickName>
        </StProfile>
        <div>
          <StVideo controls>
            {getpost.post && (
              <source src={getpost.post[0].final_video} type="video/mp4" />
            )}
          </StVideo>
          <StBottom>
            <Date>{getpost.post && getpost.post[0].day1}</Date>
            <Likes
              onClick={() => {
                onlike(getpost.post && getpost.post[0].post_id, like);
              }}
              src={like ? likeimg : unLikeimg}
            />
          </StBottom>
        </div>
      </StContent>
    </>
  );
};

export default CommunityDetailPost;

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

const Likes = styled.img``;
