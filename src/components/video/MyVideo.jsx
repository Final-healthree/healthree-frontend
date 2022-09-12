import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import styled from "styled-components";
// import ReactLoading from "react-loading";
import VideoModal from "./VideoModal";

const MyVideo = () => {
  // const [items, setItems] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  // const [ref, inView] = useInView();

  // // 서버에서 아이템을 가지고 오는 함수
  // const getItems = async () => {
  //   setLoading(true);
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   await axios
  //     .get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
  //     .then((res) => {
  //       setItems((items) => items.concat(res.data));
  //     });
  //   setLoading(false);
  // };

  // // `getItems` 가 바뀔 때 마다 함수 실행
  // useEffect(() => {
  //   getItems();
  // }, [page]);

  // useEffect(() => {
  //   if (!loading && inView) {
  //     setPage(page + 1);
  //   }
  // }, [inView, loading]);

  // console.log(items);
  // console.log("inView", inView);
  // console.log("loading", loading);
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <Container>
      <VideoArea>
        {modal === true ? <VideoModal modal={modal} /> : null}
        <VideoBox>
          <VideoImg
            onClick={() => {
              setModal(true);
            }}
          >
            <source
              src="https://healthree.s3.ap-northeast-2.amazonaws.com/videos/1662714433501.6726"
              type="video/mp4"
            />
          </VideoImg>
          <VideoDate>08.07 - 08.10</VideoDate>
        </VideoBox>

        <VideoBox>
          <VideoImg
            onClick={() => {
              setModal(true);
            }}
          >
            <source
              src="https://healthree.s3.ap-northeast-2.amazonaws.com/videos/1662949231502.5002"
              type="video/mp4"
            />
          </VideoImg>
          <VideoDate>08.07 - 08.10</VideoDate>
        </VideoBox>
        <VideoBox>
          <VideoImg
            onClick={() => {
              setModal(true);
            }}
          >
            <source
              src="https://healthree.s3.ap-northeast-2.amazonaws.com/videos/1662714433501.6726"
              type="video/mp4"
            />
          </VideoImg>
          <VideoDate>08.07 - 08.10</VideoDate>
        </VideoBox>
      </VideoArea>

      {/* {items.map((item, idx) => (
        <div key={idx}>
          {items.length - 1 === idx ? (
            <Box ref={ref}>{item.author}</Box>
          ) : (
            <Box>{item.author}</Box>
          )}
        </div>
      ))}
      {inView ? (
        <LoaderWrap>
          <ReactLoading type="spin" color="#A593E0" />
        </LoaderWrap>
      ) : (
        ""
      )} */}
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
