import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import likeimg from "../../assets/community/like.svg";
import unLikeimg from "../../assets/community/unLike.svg";
import serverAxios from "../axios/server.axios";

import { format } from "date-fns";

import { decodeToken } from "react-jwt";

const CommunityDetailPost = () => {
  const param = useParams();
  const [getpost, setGetpost] = useState({});
  const [like, setLike] = useState(false);

  const [change, setChange] = useState(false);

  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);

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

  const deletePost = () => {
    serverAxios
      .delete(process.env.REACT_APP_REST_API_KEY + `api/posts/${param.postid}`)
      .then((res) => {
        if (res.data.success) {
          alert("게시글이 삭제되었습니다.");
          window.location.replace("/community");
        }
      });
  };

  const showVideo = () => {
    setChange(!change);
  };

  return (
    <>
      <StContent>
        <StTop>
          <UserInfo>
            <StImg src={getpost.profile_image} />
            <p style={{ margin: "0px" }}>{getpost.nickname}</p>
          </UserInfo>
          {myDecodedToken.payload.user_id === getpost.user_id ? (
            <DelBtn onClick={deletePost}>삭제</DelBtn>
          ) : null}
        </StTop>
        <VideoArea onClick={showVideo}>
          {change ? (
            <StVideo controls>
              {getpost.post && (
                <source src={getpost.post.final_video} type="video/mp4" />
              )}
            </StVideo>
          ) : (
            <img
              src={getpost.post && getpost.post.thumbnail}
              style={{ width: "230px", height: "230px", padding: "auto" }}
            />
          )}
        </VideoArea>

        <StBottom>
          <div>
            <span style={{ marginRight: "7px", fontWeight: "600" }}>
              #{getpost.post && getpost.post.goal_name}
            </span>
            <span style={{ color: "#A0A0A0", fontSize: "12px" }}>22.09.26</span>
            <Date>22.08.07 ~ 22.08.10</Date>
          </div>
          <div>
            <Likes
              onClick={() => {
                onlike(getpost.post.post_id, like);
              }}
              src={like ? likeimg : unLikeimg}
            />
            <span>{getpost.post && getpost.post.like_cnt}</span>
          </div>
        </StBottom>
      </StContent>
    </>
  );
};

export default CommunityDetailPost;

const StContent = styled.div`
  width: 375px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const StImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 15px;
`;

const DelBtn = styled.button`
  width: 60px;
  height: 25px;
  border-radius: 2px;
  border: 2px solid #70cca6;
  background-color: #fff;

  font-size: 12px;
  font-weight: 500;
`;

const VideoArea = styled.div`
  display: flex;
  justify-content: center;

  height: 230px;
  width: 375px;
  margin-bottom: 20px;
`;
const StVideo = styled.video`
  height: 223px;
  width: 223px;
`;

const StBottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const Date = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Likes = styled.img``;
