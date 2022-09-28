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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StSliderLayout>
      <Slider ref={sliderRef} {...settings}>
        <StSliderContainer>
          <MainGoalFirst number={1} />
          {/* <button onClick={()=>{
          sliderRef.current.slickNext()
        }}>next</button> */}
        </StSliderContainer>
        <StSliderContainer>
          <MainGoalSecond number={2} />
        </StSliderContainer>
        <StSliderContainer>
          <MainGoalThird number={3} />
        </StSliderContainer>
      </Slider>
    </StSliderLayout>
  );
};

const StSliderLayout = styled.div`
  flex: 1;
  overflow: auto;
`;

const StSliderContainer = styled.div``;

export default GoalSlider;
