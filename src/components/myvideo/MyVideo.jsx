import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ReactLoading from "react-loading";
import VideoModal from "./VideoModal";
import serverAxios from "../axios/server.axios";

import emptyImg from "../../assets/myCalendar/emptyimg.svg";
import share from "../../assets/video/share.svg";
import PlayCircle from "../../assets/community/PlayCircle.png";

import { format } from "date-fns";

const MyVideo = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(0);
  const [ref, inView] = useInView();

  // 모달 props
  const [modalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [goalId, setGoalId] = useState("");
  const [isshare, setIsShare] = useState(0);

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = async () => {
    setLoading(true);
    if (page > 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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

  const sendModal = (video, goal, share) => {
    setUrl(video);
    setGoalId(goal);
    setIsShare(share);
  };

  const showModal = (data) => {
    setModalOpen(true);
  };

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
              onClick={() =>
                sendModal(data.final_video, data.goal_id, data.is_share)
              }
            >
              {items.length - 1 === idx ? (
                <VideoBox ref={ref}>
                  <VideoImg src={data.thumbnail} onClick={showModal} />
                  <PlayImg src={PlayCircle} onClick={showModal} />
                  {data.is_share === "1" ? <ShareImg src={share} /> : null}
                  <GoalName style={{ margin: "2px" }}>
                    {data.goal_name}
                  </GoalName>
                  <VideoDate>
                    {format(new Date(data.day1), "yy.MM.dd")} ~{" "}
                    {format(new Date(data.day3), "yy.MM.dd")}
                  </VideoDate>
                </VideoBox>
              ) : (
                <VideoBox>
                  <VideoImg src={data.thumbnail} onClick={showModal} />
                  <PlayImg src={PlayCircle} onClick={showModal} />
                  <MiddleBox>
                    <GoalName style={{ margin: "2px" }}>
                      {data.goal_name}
                    </GoalName>
                    {data.is_share === "1" ? <ShareImg src={share} /> : null}
                  </MiddleBox>
                  <VideoDate>
                    {format(new Date(data.day1), "yy.MM.dd")} ~{" "}
                    {format(new Date(data.day3), "yy.MM.dd")}
                  </VideoDate>
                </VideoBox>
              )}
            </div>
          ))}
          {modalOpen && (
            <VideoModal
              url={url}
              goal={goalId}
              share={isshare}
              setModalOpen={setModalOpen}
            />
          )}

          {inView && items.length >= more ? (
            <LoaderWrap>
              <ReactLoading type="spin" color="#70cca6" />
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

const Container = styled.div`
  flex: 1;
  overflow: auto;
  margin: 0 auto;

  ::-webkit-scrollbar {
    display: none;
  }

  padding-bottom: 70px;
  box-sizing: border-box;
`;

const EmptyArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyImg = styled.div`
  position: absolute;
  width: 144.74px;
  height: 154.36px;
  top: 200px;
  background-image: url(${emptyImg});
  background-size: cover;
  background-position: center;
`;

const EmptyP = styled.p`
  position: absolute;
  height: 36px;
  top: 380px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: #4b4b4b;
`;

const VideoArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 370px;
  flex-flow: wrap;
  gap: 10px;
  padding: 20px 0;
  box-sizing: border-box;
`;

const VideoBox = styled.div`
  height: 225px;
  width: 180px;
  cursor: pointer;
  position: relative;
`;

const VideoImg = styled.img`
  position: relative;
  height: 180px;
  width: 100%;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  border: none;

  margin-bottom: 3px;
  opacity: 0.9;
`;

const PlayImg = styled.img`
  display: flex;
  height: 50px;
  width: 50px;
  top: 90px;
  left: 90px;
  transform: translate(-25px, -25px);
  position: absolute;
  opacity: 1;
  cursor: pointer;
`;

const MiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;
const GoalName = styled.span`
  padding-left: 2px;
  text-overflow: ellipsis;
`;

const ShareImg = styled.img`
  flex: 0 0 15px;
`;

const VideoDate = styled.p`
  margin: 2px;
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
