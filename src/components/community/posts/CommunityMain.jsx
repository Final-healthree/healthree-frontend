import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import ReactLoading from "react-loading";
import { format } from "date-fns";

//아이콘
import PlayCircle from "../../../assets/community/PlayCircle.png";
import comments from "../../../assets/community/comments.svg";
import noncomment from "../../../assets/community/noncomment.svg";

import LikeHandler from "../posts/PostLike";

function CommunityMain() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(0);

  const [ref, inView] = useInView();
  const navigate = useNavigate();

  const getItems = async () => {
    if (page > 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    await serverAxios.get(`api/posts?pagecount=5&&page=${page}`).then((res) => {
      setPosts([...posts, ...res.data.result.post]);
    });
  };

  useEffect(() => {
    getItems();
  }, [page]); //페이지가 바껴서 함수가 실행됐어

  useEffect(() => {
    console.log("inview");
    if (inView && posts.length >= more) {
      setPage(page + 1);
      setMore(more + 3);
    }
  }, [inView]);

  return (
    <Container>
      {posts.map((post, idx) => (
        <div key={post.post_id}>
          {posts.length - 1 === idx ? (
            <StContent>
              <InfoBox>
                <Goal>{post.goal_name}</Goal>
                <Period>
                  {format(new Date(post.day1), "yy.MM.dd")} ~{" "}
                  {format(new Date(post.day3), "yy.MM.dd")}{" "}
                </Period>
              </InfoBox>
              <ImgBox>
                <VideoImg
                  onClick={() => {
                    navigate(`/community/${post.post_id}`);
                  }}
                  src={post.thumbnail}
                />
                <PlayImg
                  onClick={() => {
                    navigate(`/community/${post.post_id}`);
                  }}
                  src={PlayCircle}
                />
              </ImgBox>
              <StBottom>
                <StProfile>
                  <StImg src={post.profile_image} />
                  <UserName>{post.nickname}</UserName>
                </StProfile>
                <IconBox>
                  <CommentBox>
                    <img
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                      src={post.comment_cnt > 0 ? comments : noncomment}
                    />
                    <p
                      style={{
                        width: "20px",
                        height: "20px",
                        fontSize: "17px",
                      }}
                    >
                      {post.comment_cnt}
                    </p>
                  </CommentBox>
                  <LikeHandler
                    like={post.is_like}
                    postid={post.post_id}
                    cnt={post.like_cnt}
                  />
                </IconBox>
              </StBottom>
              <div ref={ref}></div>
            </StContent>
          ) : (
            <StContent>
              <InfoBox>
                <Goal>{post.goal_name}</Goal>
                <Period>
                  {format(new Date(post.day1), "yy.MM.dd")} ~{" "}
                  {format(new Date(post.day3), "yy.MM.dd")}{" "}
                </Period>
              </InfoBox>
              <ImgBox>
                <VideoImg
                  onClick={() => {
                    navigate(`/community/${post.post_id}`);
                  }}
                  src={post.thumbnail}
                />
                <PlayImg
                  onClick={() => {
                    navigate(`/community/${post.post_id}`);
                  }}
                  src={PlayCircle}
                />
              </ImgBox>
              <StBottom>
                <StProfile>
                  <StImg src={post.profile_image} />
                  <UserName>{post.nickname}</UserName>
                </StProfile>
                <IconBox>
                  <CommentBox>
                    <img
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                      src={post.comment_cnt > 0 ? comments : noncomment}
                    />
                    <p
                      style={{
                        width: "20px",
                        height: "20px",
                        fontSize: "17px",
                      }}
                    >
                      {post.comment_cnt}
                    </p>
                  </CommentBox>
                  <LikeHandler
                    like={post.is_like}
                    postid={post.post_id}
                    cnt={post.like_cnt}
                  />
                </IconBox>
              </StBottom>
            </StContent>
          )}
        </div>
      ))}
      {inView && posts.length >= more ? (
        <LoaderWrap>
          <ReactLoading type="spin" color="#70cca6" />
        </LoaderWrap>
      ) : (
        ""
      )}
    </Container>
  );
}
export default CommunityMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 16px 0 70px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 340px;
  height: 405px;

  padding: 0 auto;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
`;

const Goal = styled.h4`
  margin: 2px 0;
`;

const Period = styled.p`
  margin: 2px 0;
  font-size: 14px;
  font-family: sans-serif;
  color: #4b4b4b;
`;

const ImgBox = styled.div`
  position: relative;
  margin: 0 auto;
`;
const VideoImg = styled.img`
  height: 330px;
  width: 330px;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  border: none;
  opacity: 0.8;

  margin: 0 auto;

  cursor: pointer;
`;

const PlayImg = styled.img`
  display: flex;
  top: 0;
  left: 0;
  transform: translate(110px, 110px);
  position: absolute;
  opacity: 1;
  cursor: pointer;
`;

const StBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;
const StImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const UserName = styled.p`
  font-family: sans-serif;
  font-weight: 500;
  margin: 0 5px;
`;
const IconBox = styled.div`
  display: flex;
`;

const CommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px 0 0;
  gap: 4px;
`;

const LoaderWrap = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-bottom: 70px;
`;
