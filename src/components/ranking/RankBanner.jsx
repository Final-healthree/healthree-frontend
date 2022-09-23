import styled from "styled-components";


function RankBanner() {
    return (
        <StBanner>
            <img style={{ width: "196px", height: "140px" }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXk3x0YlelpvZl-Hb5Ro3MJKjx_r06nziC0g&usqp=CAU"} />
        </StBanner>
    )
}
export default RankBanner

const StBanner = styled.div`
width:196px;
height:140px;
display: block;
margin: 0 auto;
`;