import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

//아이콘
import backBtn from "../../../assets/community/backbtn.svg";
import trash from "../../../assets/community/trash.png";
import PlayCircle from "../../../assets/community/PlayCircle.png";

import { format } from "date-fns";
import { decodeToken } from "react-jwt";

import PostLike from "../posts/PostLike";

const CommunityDetailPost = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [getpost, setGetpost] = useState({});
  const [change, setChange] = useState(false);

  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);

  const postInfo = async () => {
    await serverAxios.get(`api/posts/${param.postid}`).then((res) => {
      setGetpost(res.data.result);
    });
  };

  useEffect(() => {
    postInfo();
  }, []);

  const deletePost = () => {
    serverAxios.delete(`api/posts/${param.postid}`).then((res) => {
      if (res.data.success) {
        alert("게시글이 삭제되었습니다.");
        navigate("/community");
      }
    });
  };

  const showVideo = () => {
    setChange(!change);
  };

  console.log(getpost);

  return (
    <>
      <StContent>
        <StTop>
          <UserInfo>
            <BackBtn onClick={() => navigate("/community")}>
              <img src={backBtn} alt="" />
            </BackBtn>
            <StImg src={getpost.profile_image} />
            <InfoBox>
              <UserName>{getpost.nickname}</UserName>
              <CreatAt>
                {getpost.post &&
                  format(new Date(getpost.post.createdAt), "yy.MM.dd")}
              </CreatAt>
            </InfoBox>
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
                alt=""
              />
              <img className="playThumbnail" src={PlayCircle} alt="" />
            </>
          )}
        </VideoArea>
        <StBottom>
          <div className="titleDiv">
            <span style={{ marginRight: "7px", fontWeight: "600" }}>
              {getpost.post && getpost.post.goal_name}
            </span>
            <Period>
              &nbsp; &nbsp;
              {getpost.post &&
                format(new Date(getpost.post.day1), "yy.MM.dd")}~{" "}
              {getpost.post && format(new Date(getpost.post.day3), "yy.MM.dd")}{" "}
            </Period>
          </div>
          {getpost.post && (
            <PostLike
              like={getpost.is_like}
              cnt={getpost.post.like_cnt}
              postid={param.postid}
            />
          )}
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
  margin: 10px auto;
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const BackBtn = styled.button`
  background-color: #fff;
  border: none;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
`;

const StImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const UserName = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  margin: 0 5px;
`;

const CreatAt = styled.p`
  font-size: 11px;
  font-family: sans-serif;
  color: #4b4b4b;
  margin: 0 6px;
`;

const DelBtn = styled.button`
  width: 55px;
  height: 20px;
  border: none;
  background-color: #fff;
  padding-top: 3px;
  transform: translate(-50%, -50%);
  cursor: pointer;
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
