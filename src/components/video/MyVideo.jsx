import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ReactLoading from "react-loading";
import VideoModal from "./VideoModal";
import serverAxios from "../axios/server.axios";

import emptyImg from "../../assets/images/emptyimg.svg";

const MyVideo = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(0);

  const [ref, inView] = useInView();

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = async () => {
    setLoading(true);
    if (page > 1) {
      await new Promise((resolve) => setTimeout(resolve, 700));
    }

    await serverAxios
      .get(
        process.env.REACT_APP_REST_API_KEY +
          `api/videos/mine?pagecount=8&&page=${page}`
      )
      .then((res) => {
        setItems([...items, ...res.data.result.video_list]);
      });
    setLoading(false);
  };

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [page]); //페이지가 바껴서 함수가 실행됐어

  useEffect(() => {
    if (inView && !loading && items.length >= more) {
      setPage(page + 1);
      setMore(more + 5);
    }
  }, [inView, loading]);

  const [modalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [goalId, setGoalId] = useState("");

  const sendModal = (video, goal) => {
    setUrl(video);
    setGoalId(goal);
  };

  const showModal = (data) => {
    setModalOpen(true);
  };

  // console.log("inView", inView);
  // console.log("more", more);
  // console.log("item", items.length);
  // console.log("loading", loading);
  // console.log("page", page);

  return (
    <Container>
      {items.length === 0 ? (
        <EmptyArea>
          <EmptyImg />
          <EmptyP>
            영상이 비어있어요. <br /> 작심삼일을 성공해봐요!
          </EmptyP>
        </EmptyArea>
      ) : (
        <VideoArea>
          {items.map((data, idx) => (
            <div
              key={data.goal_id}
              onClick={() => sendModal(data.final_video, data.goal_id)}
            >
              {items.length - 1 === idx ? (
                <VideoBox ref={ref}>
                  <VideoImg src={data.thumbnail} onClick={showModal} />
                  <p style={{ margin: "0" }}>{data.goal_name}</p>
                  <VideoDate>
                    {data.day1.slice(0, 10)} ~ {data.day3.slice(0, 10)}
                  </VideoDate>
                </VideoBox>
              ) : (
                <VideoBox>
                  <VideoImg src={data.thumbnail} onClick={showModal} />
                  <p style={{ margin: "0" }}>{data.goal_name}</p>
                  <VideoDate>
                    {data.day1.slice(0, 10)} ~ {data.day3.slice(0, 10)}
                  </VideoDate>
                </VideoBox>
              )}
            </div>
          ))}
          {modalOpen && (
            <VideoModal url={url} goal={goalId} setModalOpen={setModalOpen} />
          )}

          {inView && items.length >= more ? (
            <LoaderWrap>
              <ReactLoading type="spin" color="#A593E0" />
            </LoaderWrap>
          ) : (
            ""
          )}
        </VideoArea>
      )}
    </Container>
  );
};

export default MyVideo;

const Container = styled.div``;

const EmptyArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyImg = styled.div`
  position: absolute;
  width: 144.74px;
  height: 154.36px;
  top: 150px;
  background-image: url(${emptyImg});
  background-size: cover;
  background-position: center;
`;

const EmptyP = styled.p`
  position: absolute;
  height: 36px;
  /* top: calc(50% - 36px / 2 + 123px); */
  top: 330px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: #4b4b4b;
`;

const VideoArea = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: wrap;
  gap: 30px;
  padding: 20px 0;
  box-sizing: border-box;
`;

const VideoBox = styled.div`
  height: 170px;
  width: 153px;
  cursor: pointer;
`;

// const VideoImg = styled.video`
//   height: 150px;
//   width: 150px;
//   background-color: #4b4b4b;
//   filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.12));
//   mix-blend-mode: multiply;
//   border-radius: 2px;
// `;

const VideoImg = styled.img`
  height: 150px;
  width: 150px;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  border: none;

  margin: 0 auto;
`;

const VideoDate = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: sans-serif;
`;

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
