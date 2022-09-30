import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainGoalFirst from "./MainGoalFirst";
import MainGoalSecond from "./MainGoalSecond";
import MainGoalThird from "./MainGoalThird";

const GoalSlider = (props) => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <StSliderLayout>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <MainGoalFirst number = {1} />
        {/* <button onClick={()=>{
          sliderRef.current.slickNext()
        }}>next</button> */}
          </div>
          <div>
            <MainGoalSecond number = {2} />
          </div>
          <div>
            <MainGoalThird number = {3} />
          </div>
        </Slider>
      </StSliderLayout>
  )
}

const StSliderLayout = styled.div`
  overflow: auto;
  flex: 1;
`;

const StSliderContainer = styled.div``;

export default GoalSlider;
