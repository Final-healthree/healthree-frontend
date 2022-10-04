import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import notFound from "../assets/notFound/404.svg"

const NotFound = () => {
    const navigate = useNavigate("/")
    const goBack = () => navigate("/")
    setTimeout(goBack, 2000)
    
    return (
        <div>
            <FullPage onClick={goBack}>
                <img src={notFound}/>
                <h1>알 수 없는 요청입니다.</h1>
                <h3>이전 페이지로 이동합니다.</h3>
            </FullPage>
        </div >
    );
}

export default NotFound;

const FullPage = styled.div`
    position: fixed;
    top:0; 
    right: 0; 
    bottom: 0; 
    left: 0;

    background-color:#fff;
    color: #70CCA6;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    animation: fadeout .2s 1.8s forwards;

    @keyframes fadeout {
        0% {opacity: 1}
        100% {opacity: 0}
    }
`