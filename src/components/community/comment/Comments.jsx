import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import InputComment from "./InputComment";
import DeleteComment from "./DeleteComment";
import StCommentText from "./EditComment";
import DateComment from "./DateComment";
import Pagination from "./Pagination";

function Comments() {
  const params = useParams();
  const [page, setPage] = useState(1);

  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);

  const getInfo = async () => {
    await serverAxios
      .get(
        process.env.REACT_APP_REST_API_KEY +
          `api/comments/${params.postid}` +
          `?pagecount=5&&page=${page}`
      )
      .then((res) => {
        setComments([...res.data.result.comment]);
        setTotal(res.data.result.comment_cnt);
      });
  };

  useEffect(() => {
    getInfo();
  }, [page]);

  return (
    <>
      <StWrapper>
        {comments.map((comments) => (
          <div key={comments.comment_id}>
            <StContentContainer>
              <StProfile>
                <StImg src={comments.profile_image} />
                <StNameText>{comments.nickname}</StNameText>
              </StProfile>
              <Stcontent>
                <StCommentText
                  value={comments.comment}
                  comment_id={comments.comment_id}
                  userId={comments.user_id}
                />
                <StCommentBottom>
                  <DeleteComment comment_id={comments.comment_id} />
                  <DateComment date={comments.date} />
                </StCommentBottom>
              </Stcontent>
            </StContentContainer>
          </div>
        ))}
      </StWrapper>
      {/* <InputComment data={params.postid} /> */}
      <Pagination total={total} limit={5} page={page} setPage={setPage} />
    </>
  );
}

export default Comments;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
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
  color: black;
  font-size: 14px;
  width: 70px;
`;

const StContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid #dadada;
`;

const Stcontent = styled.div`
  display: flex;
  flex-direction: column;

  height: 69px;
  width: 192px;
  box-sizing: border-box;
  padding-top: 9px;
`;

const StCommentBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 20px;
`;
