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
        <>
        <div className="content">
        {isEdit ? (
            <textarea
            ref={localContentInput}
            value={localContent}
            onChange={HandleContent}
            />
            ) : (
                content
                )}
      </div>
        {isEdit ? (
            <div>
              <button onClick={handleQuitEdit}>수정 취소</button>
              <button onClick={handleEdit}>수정 완료</button>
            </div>
          ) : (
              <div>
              <button onClick={HandleRemove}>삭제하기</button>
              <button onClick={toggleIsEdit}>수정하기</button>
            </div>
          )}
          </>
    );
};

export default EditComment;

const EditBtn = styled.button`
color: gray;
background-color: transparent;
border:0;
outline: 0;
`