import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import styled from "styled-components";
import ReactLoading from "react-loading";
import VideoModal from "./VideoModal";

const MyVideo = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();
  const showVideo = useRef();
  // 서버에서 아이템을 가지고 오는 함수
  const getItems = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await axios
      .get(
        process.env.REACT_APP_REST_API_KEY +
          `api/users/my_video?pagecount=5&&page=${page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjQsIm5pY2tuYW1lIjoi7Jyg7JiBIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6Ly9rLmtha2FvY2RuLm5ldC9kbi9ielNMRDgvYnRySTJjd3lZYmcvMDJvTkNvWVVlZXF4czdReVp3a2E2MC9pbWdfNjQweDY0MC5qcGcifSwiaWF0IjoxNjYyOTkxMDc0fQ.nYSDF0dT_f8EOdmXg-Nhz2lpW194lGsCjouQ1z3fkcc`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setItems([...items, ...res.data.result.video_list]);
      });
    setLoading(false);
  };

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [page]);

  useEffect(() => {
    if (!loading && inView) {
      setPage(page + 1);
    }
  }, [inView, loading]);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  console.log("inView", inView);
  console.log("loading", loading);

  console.log(showVideo);


  // console.log(items);
  // console.log("inView", inView);
  // console.log("loading", loading);
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <VideoArea>
        {items.map((item, idx) => (
          <>
            <div key={idx}>
              {items.length - 1 === idx ? (
                <VideoBox ref={ref}>
                  <VideoImg onClick={showModal} ref={showVideo}>
                    <source src={item.final_video} type="video/mp4" />
                  </VideoImg>
                  <VideoDate>
                    {item.day1.slice(0, 10)} ~ {item.day3.slice(0, 10)}
                  </VideoDate>
                </VideoBox>
              ) : (
                <VideoBox>
                  <VideoImg onClick={showModal}>
                    <source src={item.final_video} type="video/mp4" />
                  </VideoImg>
                  <span>{item.goal_name}</span>
                  <VideoDate>
                    {item.day1.slice(0, 10)} ~ {item.day3.slice(0, 10)}
                  </VideoDate>
                </VideoBox>
              )}
              {modalOpen && (
                <VideoModal
                  url={showVideo.current.currentSrc}
                  setModalOpen={setModalOpen}
                />
              )}
            </div>
          </>
        ))}

        {inView ? (
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        ) : (
          ""
        )}
      </VideoArea>
    </Container>
  );
};

export default MyVideo;

const Container = styled.div``;

const VideoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  box-sizing: border-box;
`;

const VideoBox = styled.div`
  height: 170px;
  width: 320px;

  cursor: pointer;
`;

const VideoImg = styled.video`
  height: 150px;
  width: 320px;
  background-color: #4b4b4b;

  filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.12));
  mix-blend-mode: multiply;
  border-radius: 2px;
`;

const VideoDate = styled.span``;

const Box = styled.div`
  margin: 10px auto;
  width: 100px;
  height: 300px;
  background-color: pink;
`;

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
