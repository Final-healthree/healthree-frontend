import React from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

function DeleteComment(props) {

    const onDeleteHandler = async () => {
        await serverAxios
            .delete(process.env.REACT_APP_REST_API_KEY + `api/comments/${props.comment_id}`)
            .then((res) => {
                console.log(res)
            });
        window.location.reload();
    };



    return (
        <DeleteBtn onClick={onDeleteHandler}>
            삭제하기
        </DeleteBtn>
    );
};
export default DeleteComment;

const DeleteBtn = styled.button`
color: gray;
background-color: transparent;
border:0;
outline: 0;
`;