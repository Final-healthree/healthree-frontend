import React from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import MainGoalFirst from "./MainGoalFirst";
import MainGoalSecond from "./MainGoalSecond";
import MainGoalThird from "./MainGoalThird";

const GoalSlider = () => {

  // const settings = {
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  // }

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
      <div>
        <h2>인생은 회전목마</h2>
        <Slider {...settings}>
          <div>
            <MainGoalFirst />
          </div>
          <div>
            <MainGoalSecond />
          </div>
          <div>
            <MainGoalThird />
          </div>
        </Slider>
      </div>
  )
}

const StSliderLayout = styled.div`

`;

export default GoalSlider;