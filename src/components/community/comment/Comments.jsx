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

  const getInfo = async () => {
    await serverAxios
      .get(
        process.env.REACT_APP_REST_API_KEY +
          `api/comments/${params.postid}` +
          `?pagecount=4&&page=${page}`
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
        <InputComment data={params.postid} />
        {comments.map((comments) => (
          <div key={comments.comment_id}>
            <StContentContainer>
              <div style={{ display: "flex", flexDirection: "row" }}>
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
                </Stcontent>
              </div>
              <ReplyTime>{DateComment({ date: comments.date })}</ReplyTime>
            </StContentContainer>
          </div>
        ))}
      </StWrapper>
      <Pagination total={total} limit={4} page={page} setPage={setPage} />
    </>
  );
}

export default Comments;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
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
  color: black;
  font-size: 14px;
  width: 70px;
`;

const StContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid #dadada;
`;

const Stcontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 210px;
  box-sizing: border-box;
  padding-top: 9px;

  gap: 20px;
`;

const StCommentBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding-top: 20px;
`;

const Hr = styled.hr`
border: solid 1px #f2f2f2f4;
`;

const StInputArea = styled.div`

position: sticky;
bottom: 100px;
`;


const ReplyTime = styled.p`
  display: flex;
  justify-content: flex-end;
  color: #70cca6;
  width: 350px;
  height: 18px;
  font-family: sans-serif;
  font-size: 10px;
  margin: 0;
`;
