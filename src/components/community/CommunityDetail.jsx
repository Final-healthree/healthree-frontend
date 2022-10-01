import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import likeimg from "../../assets/community/like.svg";
import unLikeimg from "../../assets/community/unLike.svg";
import serverAxios from "../axios/server.axios";
import backBtn from "../../assets/community/backbtn.svg";
import trash from "../../assets/community/trash.png"
import PlayCircle from "../../assets/community/PlayCircle.png"

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
         
            setLike(true);
          }
        });
    }
  };

  const postInfo = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/posts/${param.postid}`)
      .then((res) => {
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
            <BackBtn onClick={() => window.location.replace("/community")}>
              <img src={backBtn} alt=""/>
            </BackBtn>
            <StImg src={getpost.profile_image} />
            <div className="userDiv">
              <p style={{ margin: "0px" }}>{getpost.nickname}</p>
              <span
                style={{
                  color: "#A0A0A0",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                {getpost.post &&
                  format(new Date(getpost.post.createdAt), "yy.MM.dd")}
              </span>
            </div>
          </UserInfo>
          {myDecodedToken.payload.user_id === getpost.user_id ? (
            <DelBtn onClick={deletePost}>
              <img src={trash} alt="" />
            </DelBtn>
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
            <>
            <img
              className="videoThumbnail"
              src={getpost.post && getpost.post.thumbnail}
              style={{ width: "320px", height: "315px", padding: "auto" }}
            alt="" />
            <img className="playThumbnail" src={PlayCircle} alt="" />
            </>
          )}
        </VideoArea>

        <StBottom>
          <div className="titleDiv">
            <span style={{ marginRight: "7px", fontWeight: "600" }}>
              {getpost.post && getpost.post.goal_name}
            </span>
            {/* <span
              style={{
                color: "#A0A0A0",
                fontSize: "12px",
                fontFamily: "sans-serif",
              }}
            >
              {getpost.post &&
                format(new Date(getpost.post.createdAt), "yy.MM.dd")}
            </span> */}
            <Period>
              &nbsp; &nbsp;
              {getpost.post && format(new Date(getpost.post.day1), "yy.MM.dd")}~{" "}
              {getpost.post && format(new Date(getpost.post.day3), "yy.MM.dd")}{" "}
            </Period>
          </div>
          {/* <div>
            <Likes
              onClick={() => {
                onlike(getpost.post.post_id, like);
              }}
              src={like ? likeimg : unLikeimg}
            />
            <span style={{ fontFamily: "sans-serif" }}>
              {getpost.post && getpost.post.like_cnt}
            </span>
          </div> */}
        </StBottom>
      </StContent>
    </>
  );
};

export default CommunityDetailPost;

const StContent = styled.div`
  width: 375px;
  height: 400px;
  margin-top: 23px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11px;
  box-sizing: border-box;
`;

const BackBtn = styled.button`
  background-color: #fff;
  border: none;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  & > .userDiv {
    margin-top: 10px;
  }
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
  /* border: 2px solid #70cca6; */
  border: none;
  background-color: #fff;
  margin-right: 15px;
  margin-bottom: 7px;

  cursor: pointer;

  font-size: 12px;
  font-family: sans-serif;
  font-weight: 500;
`;

const VideoArea = styled.div`
  display: flex;
  justify-content: center;

  height: 340px;
  width: 370px;
  margin-bottom: 20px;
  position: relative;

  & > .videoThumbnail {
    cursor: pointer;
  }

  & > .playThumbnail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
const StVideo = styled.video`
  width: 320px;
  height: 315px;
`;

const StBottom = styled.div`
  display: flex;
  /* justify-content: space-around; */
  margin-bottom: 30px;

  & > .titleDiv {
    display: flex;
    margin-left: 26px;
  }
`;

const Period = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
`;

const Likes = styled.img``;
