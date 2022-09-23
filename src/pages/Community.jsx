import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import serverAxios from "../components/axios/server.axios";

// import like from "../assets/community/like.svg";
import unLike from "../assets/community/unLike.svg";

function Community() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(0);

  const [ref, inView] = useInView();
  const navigate = useNavigate();

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

  console.log(posts);

  useEffect(() => {
    getItems();
  }, [page]); //페이지가 바껴서 함수가 실행됐어

  useEffect(() => {
    if (inView && !loading && posts.length >= more) {
      setPage(page + 1);
      setMore(more + 5);
    }
  }, [inView, loading]);

  const [postid, setPostid] = useState("");

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
                  setPostid(post.post_id);
                  navigate(`/community/${postid}`);
                }}
              >
                {/* <img src={videoImg} /> */}
              </VideoImg>
              <StBottom>
                <div>
                  <Goal>{post.goal_name}</Goal>
                  <Period>{post.day1}</Period>
                </div>
                <Likes>
                  <img src={unLike} />
                </Likes>
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
                  setPostid(post.post_id);
                  navigate(`/community/${postid}`);
                }}
              >
                {/* <img src={videoImg} /> */}
              </VideoImg>
              <StBottom>
                <div>
                  <Goal>{post.goal_name}</Goal>
                  <Period>{post.day1}</Period>
                </div>
                <Likes>
                  <img src={unLike} />
                </Likes>
              </StBottom>
            </StContent>
          )}
        </div>
      ))}
    </Container>
  );
}
export default Community;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  gap: 20px;
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
const Likes = styled.div``;
