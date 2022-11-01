import React, { useState } from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

import { decodeToken } from "react-jwt";

import CommentDate from "./CommentDate";
import DeleteModal from "../posts/DeleteModal";

function StCommentText({
  content,
  commentId,
  userId,
  commentTime,
  remove,
  setRemove,
}) {
  const Token = localStorage.getItem("Token");
  const myDecodedToken = decodeToken(Token);
  const NowUser = myDecodedToken.payload.user_id;
  const Time = CommentDate({ date: commentTime });
  const [modalopen, setModalOpen] = useState(false);

  const [edit, setEdit] = useState(true);
  const [commentEdit, setCommentEdit] = useState({
    comment: content,
  });

  const onChange = (e) => {
    setCommentEdit({
      ...commentEdit,
      comment: e.target.value,
    });
  };

  const onEditHandler = () => {
    setEdit(!edit);
  };

  const onSaveHandler = async () => {
    setEdit(true);
    await serverAxios
      .put(`api/comments/${commentId}`, commentEdit)
      .then((res) => {
        if (res.data.success === true) {
        }
      });
  };

  const onDeleteHandler = async () => {
    setModalOpen(true);
  };

  return (
    <Stcontent>
      <StComment
        disabled={edit}
        value={commentEdit.comment}
        onChange={onChange}
        maxLength={40}
        rows={2}
      />
      <StBottom>
        <BtnArea>
          {NowUser === userId ? (
            edit ? (
              <>
                <EditBtn onClick={onEditHandler}>수정하기</EditBtn>
                <EditBtn onClick={onDeleteHandler}>삭제하기</EditBtn>
              </>
            ) : (
              <>
                <EditBtn onClick={onSaveHandler}>완료하기</EditBtn>
                <EditBtn onClick={onEditHandler}>취소하기</EditBtn>
              </>
            )
          ) : null}
        </BtnArea>
        {modalopen ? (
          <DeleteModal
            content={"댓글"}
            setModalOpen={setModalOpen}
            commentId={commentId}
            remove={remove}
            setRemove={setRemove}
          />
        ) : null}
        <CommentTime>{Time}</CommentTime>
      </StBottom>
    </Stcontent>
  );
}

export default StCommentText;

const Stcontent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
`;

const StComment = styled.textarea`
  flex: 1;
  resize: none;

  border: ${(props) => (props.disabled ? "none" : "1px solid gray")};
  border-radius: 2px;
  font-size: 13px;
  background-color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  padding-top: 8px;
  margin: 0;
`;

const StBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnArea = styled.div`
  display: flex;
`;
const EditBtn = styled.button`
  color: #a0a0a0;
  background-color: transparent;
  border: none;
  font-family: sans-serif;
  font-size: 11px;

  cursor: pointer;
`;

const CommentTime = styled.div`
  width: 60px;
  color: #70cca6;
  font-family: sans-serif;
  font-size: 10px;
`;
