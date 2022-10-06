import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";
//아이콘
import backBtn from "../../../assets/community/backbtn.svg";
import trash from "../../../assets/community/delete.svg";
import PlayCircle from "../../../assets/community/PlayCircle.png";

import { format } from "date-fns";
import { decodeToken } from "react-jwt";

import PostLike from "./PostLike";
import DeleteModal from "./DeleteModal";

const CommunityDetailPost = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [getpost, setGetpost] = useState({});
  const [change, setChange] = useState(false);

  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);
  const [modalopen, setModalOpen] = useState(false);

  const postInfo = async () => {
    await serverAxios.get(`api/posts/${param.postid}`).then((res) => {
      setGetpost(res.data.result);
    });
  };

  useEffect(() => {
    postInfo();
  }, []);

  const showVideo = () => {
    setChange(!change);
  };

  const deleteHandler = () => {
    setModalOpen(true);
  };

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
            <DelBtn onClick={deleteHandler}>
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
          <MiddleBox>
            <span style={{ fontSize: "16px" }}>
              {getpost.post && getpost.post.goal_name}
            </span>
            <Period>
              {getpost.post && format(new Date(getpost.post.day1), "yy.MM.dd")}{" "}
              - {getpost.post && format(new Date(getpost.post.day3), "dd")}{" "}
            </Period>
          </MiddleBox>
          {getpost.post && (
            <PostLike
              like={getpost.is_like}
              cnt={getpost.post.like_cnt}
              postid={param.postid}
            />
          )}
        </StBottom>
        {modalopen ? (
          <DeleteModal content={"게시글"} setModalOpen={setModalOpen} />
        ) : null}
      </StContent>
    </>
  );
};

export default CommunityDetailPost;

const StContent = styled.div`
  width: 375px;
  height: 420px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  margin: 16px auto;
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
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  margin-right: 33px;
`;

const VideoArea = styled.div`
  display: flex;
  justify-content: center;

  height: 340px;
  width: 370px;
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
  justify-content: space-between;
  align-items: center;
  width: 330px;
  padding: 0px 20px 0 25px;
`;

const MiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 6px;
`;

const Period = styled.p`
  margin-left: 4px;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
  color: #4b4b4b;
`;
