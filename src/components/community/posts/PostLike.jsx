import React, { useState } from "react";
import serverAxios from "../../axios/server.axios";
import styled from "styled-components";

//아이콘이미지
import onLike from "../../../assets/community/like.svg";
import offLike from "../../../assets/community/unLike.svg";

function LikeHandler({ like, postid, cnt }) {
  const [count, setCount] = useState(cnt);
  const [status, setStatus] = useState(like);

  const likeHandler = (islike) => {
    if (islike) {
      setCount(Number(count) - 1);
      setStatus(false);
      serverAxios
        .delete(`api/posts/like/${postid}`)
        .then((res) => {
          if (res.data.result === "좋아요 취소 성공") {
          }
        })
        .catch((error) => {
          alert(error.response.message);
        });
    } else {
      setCount(Number(count) + 1);
      setStatus(true);
      serverAxios
        .post(`api/posts/like/${postid}`)
        .then((res) => {
          if (res.data.result === "좋아요 성공") {
          }
        })
        .catch((error) => {
          alert(error.response.message);
        });
    }
  };

  return (
    <IconContainer>
      <Icon
        cursor="pointer"
        onClick={() => likeHandler(status)}
        src={status ? onLike : offLike}
      />
      <Cnt>{count}</Cnt>
    </IconContainer>
  );
}

export default LikeHandler;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: "pointer";
`;

const Cnt = styled.p`
  margin-right: 10px;
`;
