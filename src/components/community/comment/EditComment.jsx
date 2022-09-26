import React, { useState} from "react";
import styled from "styled-components";
import serverAxios from "../../axios/server.axios";

function EditComment({comment, newComments, setNewComments}) {

    console.log(comment)
    const [editComment, setEditComment] = useState({
       comment :"",
    });

    const [isEdit, setIsEdit] = useState(false);
    
    // const handleToggle() {
    //     setIsEdit(!isEdit

    // }
    
    const onEditHandler = () => {
        
    }

    return (
        <EditBtn>
        수정하기
    </EditBtn>
    );
};

export default EditComment;

const EditBtn = styled.button`
color: gray;
background-color: transparent;
border:0;
outline: 0;
`