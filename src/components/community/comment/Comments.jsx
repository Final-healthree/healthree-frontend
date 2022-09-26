import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import InputComment from "./InputComment"
import DeleteComment from "./DeleteComment";
import DateComment from "./DateComment";
function Comments() {
  const params = useParams();
  const [page, setPage] = useState(1);

  const [comments, setComments] = useState([])
  console.log(params)

  const getInfo = async () => {
    await serverAxios
      .get(process.env.REACT_APP_REST_API_KEY + `api/comments/${params.postid}` + `?pagecount=5&&page=${page}`)
      .then((res) => {
        console.log(res);
        setComments([...comments, ...res.data.result]);

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
              <StNameText>
                <span>{comments.nickname}</span>
              </StNameText>
            </StProfile>
            <StCommentText>
              <span>{comments.comment}</span>
            </StCommentText>
          </StContentContainer>
          <StCommentBottom>
          <DeleteComment comment_id = {comments.comment_id}/>
          <StDate>
          <DateComment date = {comments.date} />
          </StDate>
          </StCommentBottom>
          <Hr/>
        </div>
      ))
    }
    </StWrapper>
    <InputComment data = {params.postid}/>
</>
  );
}

export default Comments;

const StWrapper = styled.div`
margin: 8px;
padding: 8px;
display: flex;
flex-direction: column;
border: 1px, solid grey;
border-radius: 16px;
`

const StProfile = styled.div`
display: flex;
gap:10px;
align-items: center;
`

const StImg = styled.img`
width: 34px;
height: 34px;
border-radius: 50%;
`

const StContentContainer = styled.div`
margin-left: 8px;
display: flex;
flex-direction: column;
justify-content: center;
`

const StNameText = styled.div`
color: black;
font-size: 16px;
font-weight: bold;
`

const StCommentText = styled.div`
color: black;
font-size: 16px;
`

const StDate = styled.div`
  color: #70CCA6;
  font-size: 14px;
`
const StCommentBottom = styled.div`
display: flex;
justify-content: space-between;
`
const Hr = styled.hr`
border: solid 1px #f2f2f2f4;
`