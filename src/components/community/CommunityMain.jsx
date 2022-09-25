import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import serverAxios from "../axios/server.axios";

import likeimg from "../../assets/community/like.svg";
import unLikeimg from "../../assets/community/unLike.svg";

function CommunityMain() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(0);

  const [ref, inView] = useInView();
  const navigate = useNavigate();

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
            setLike(true);
          }
        });
    }
  };

  const getItems = async () => {
    setLoading(true);
    if (page > 1) {
      await new Promise((resolve) => setTimeout(resolve, 700));
    }

    await serverAxios
      .get(
        process.env.REACT_APP_REST_API_KEY +
          `api/posts?pagecount=5&&page=${page}`
      )
      .then((res) => {
        console.log(res);
        setPosts([...posts, ...res.data.result.post]);
      });
    setLoading(false);
  };

  useEffect(() => {
    getItems();
  }, [page]); //페이지가 바껴서 함수가 실행됐어

  useEffect(() => {
    if (inView && !loading && posts.length >= more) {
      setPage(page + 1);
      setMore(more + 5);
    }
  }, [inView, loading]);

  console.log(posts);

  return (
    <Container>
      {posts.map((post, idx) => (
        <div key={post.post_id}>
          {posts.length - 1 === idx ? (
            <StContent ref={ref}>
              <StProfile>
                <StImg src={post.profile_image} />
                <p>{post.nickname}</p>
              </StProfile>
              <VideoImg
                onClick={() => {
                  navigate(`/community/${post.post_id}`);
                }}
              />
              <StBottom>
                <div>
                  <Goal>{post.goal_name}</Goal>
                  <Period>{post.day1}</Period>
                </div>
                <div>
                  <img src={likeimg} />
                  <span>{post.comment_cnt}</span>
                </div>
                <div>
                  <Likes
                    onClick={() => {
                      onlike(post.post_id, like);
                    }}
                    src={like ? likeimg : unLikeimg}
                  />
                </div>
              </StBottom>
            </StContent>
          ) : (
            <StContent>
              <StProfile>
                <StImg src={post.profile_image} />
                <p>{post.nickname}</p>
              </StProfile>
              <VideoImg
                onClick={() => {
                  navigate(`/community/${post.post_id}`);
                }}
              />

              {/* <img src={videoImg} /> */}
              <StBottom>
                <div>
                  <Goal>{post.goal_name}</Goal>
                  <Period>{post.day1}</Period>
                </div>
                <div>
                  <img src={likeimg} />
                  <span>{post.comment_cnt}</span>
                </div>
                <div>
                  <Likes
                    onClick={() => {
                      onlike(post.post_id, like);
                    }}
                    src={like ? likeimg : unLikeimg}
                  />
                </div>
              </StBottom>
            </StContent>
          )}
        </div>
      ))}
    </Container>
  );
}
export default CommunityMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  box-sizing: border-box;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 340px;
  height: 405px;

  padding: 0 auto;
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

const VideoImg = styled.video`
  height: 335.85px;
  width: 340px;
  background: #dadada;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;

const StBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
`;
const Goal = styled.p`
  padding-left: 0px;
  margin: 0;
  font-weight: 700;
`;
const Period = styled.p`
  margin: 0;
`;
const Likes = styled.img`
  width: 20px;
  height: 20px;
`;
