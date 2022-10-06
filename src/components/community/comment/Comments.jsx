import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import InputComment from "./InputComment";
import StCommentText from "./EditComment";
import Pagination from "./Pagination";

function Comments() {
  const params = useParams();
  const [page, setPage] = useState(1);

  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [remove, setRemove] = useState(false);
  const [create, setCreate] = useState(false);

  const getInfo = async () => {
    await serverAxios
      .get(`api/comments/${params.postid}` + `?pagecount=4&&page=${page}`)
      .then((res) => {
        setComments([...res.data.result.comment]);
        setTotal(res.data.result.comment_cnt);
      });
  };

  useEffect(() => {
    getInfo();
  }, [page, remove, create]);

  return (
    <>
      <StWrapper>
        <InputComment
          data={params.postid}
          create={create}
          setCreate={setCreate}
        />
        {comments.map((comment) => (
          <StContentContainer key={comment.comment_id}>
            <StImg src={comment.profile_image} />

            <StNameText>{comment.nickname}</StNameText>
            <StCommentText
              content={comment.comment}
              commentId={comment.comment_id}
              userId={comment.user_id}
              commentTime={comment.date}
              remove={remove}
              setRemove={setRemove}
            />
          </StContentContainer>
        ))}
        <Pagination total={total} limit={4} page={page} setPage={setPage} />
      </StWrapper>
    </>
  );
}

export default Comments;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 55px 10px;
  flex: 1;
`;
const StContentContainer = styled.div`
  display: flex;
  padding: 5px 3px;
  box-sizing: border-box;
  border-bottom: 1px solid #dadada;
`;
const StImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #dadada;
`;

const StNameText = styled.div`
  width: 63px;
  height: 34px;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: 500;
  //글씨 가운데 정렬
  line-height: 34px;
  text-align: center;
`;
