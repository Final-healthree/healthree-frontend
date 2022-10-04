import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import InputComment from "./InputComment";
import StCommentText from "./EditComment";
import DateComment from "./DateComment";
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
          <div key={comment.comment_id}>
            <StContentContainer>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <StProfile>
                  <StImg src={comment.profile_image} />
                  <StNameText>{comment.nickname}</StNameText>
                </StProfile>

                <StCommentText
                  value={comment.comment}
                  comment_id={comment.comment_id}
                  userId={comment.user_id}
                  remove={remove}
                  setRemove={setRemove}
                />
              </div>
              <ReplyTime>{DateComment({ date: comment.date })}</ReplyTime>
            </StContentContainer>
          </div>
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

const StProfile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 5px;
`;

const StImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #dadada;
`;

const StNameText = styled.span`
  font-size: 14px;
  width: 50px;
  font-family: sans-serif;
  font-weight: 600;
`;

const StContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 10px;
  border-bottom: 1px solid #dadada;
`;

const ReplyTime = styled.span`
  display: flex;
  color: #70cca6;
  font-family: sans-serif;
  font-size: 10px;
  transform: translate(0, 80%);
`;
