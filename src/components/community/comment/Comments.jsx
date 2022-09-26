import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import InputComment from "./InputComment"
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import DateComment from "./DateComment";
function Comments() {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [newComments, setNewComments] = useState()

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
console.log(comments)
  return (
<>
    <StWrapper>
      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <StContentContainer>
            <StProfile>
              <StImg src={comment.profile_image} />
              <StNameText>
                <span>{comment.nickname}</span>
              </StNameText>
            </StProfile>
            <StCommentText>
              <span>{comment.comment}</span>
            </StCommentText>
          </StContentContainer>
          <StCommentBottom>
          <StED>
          <EditComment comment = {comment} newComments = {newComments} setNewComments = {setNewComments}/>
          <DeleteComment comment_id = {comment.comment_id}/>
          </StED>
          <StDate>
          <DateComment date = {comment.date} />
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

const StED = styled.div`
display: flex;
`
