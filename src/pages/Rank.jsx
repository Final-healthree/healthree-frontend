import styled from "styled-components";

import RankBanner from "../components/ranking/RankBanner";
import UserRanking from "../components/ranking/UserRanking";
import MyRanking from "../components/ranking/MyRanking";



function Rank() {



    return (
        <StRanking>
            <RankBanner/>
            <UserRanking/>
            <MyRanking/>
        </StRanking>
    );
};

export default Rank

const StRanking = styled.div`
width: 340px;
height: 770px;
display: flex;
flex-direction: column;

gap: 20px;
box-sizing: border-box;

transform: translate(5%, 5%);
background-color: #11560f;
overflow-y: scroll;
`;






