import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import { decodeToken } from "react-jwt";

function StCommentText(props) {
  const token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(token);

  const commentID = props.comment_id;
  const userID = props.userId;

  const [editComment, setEditComment] = useState({
    comment: props.value,
  });

  const [onEdit, setOnEdit] = useState(true);
  const editHandler = () => {
    setOnEdit(!onEdit);
  };

  const onChange = (e) => {
    setEditComment({
      ...editComment,
      comment: e.target.value,
    });
  };

  const saveHandler = () => {
    setOnEdit(!onEdit);
    serverAxios
      .put(
        process.env.REACT_APP_REST_API_KEY + `api/comments/${commentID}`,
        editComment
      )
      .then((res) => console.log(res));
  };

  return (
    <div>
      <StComment
        disabled={onEdit}
        value={editComment.comment}
        onChange={onChange}
      />
      {myDecodedToken.payload.user_id === userID ? (
        <div>
          <EditBtn onClick={editHandler}>수정하기</EditBtn>
          <EditBtn onClick={saveHandler}>완료하기</EditBtn>
        </div>
      ) : null}
    </div>
  );
}


export default StCommentText;


const StComment = styled.input`
  border: none;
  font-size: 16px;
  background-color: #fff;
`;

const EditBtn = styled.button`
  color: gray;
  background-color: transparent;
  border: 0;
  outline: 0;
`;
