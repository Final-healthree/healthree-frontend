import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
      slidesToScroll: 1
    };

  return (
      <div>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <MainGoalFirst number = {1} />
        <button onClick={()=>{
          sliderRef.current.slickNext()
        }}>next</button>
          </div>
          <div>
            <MainGoalSecond number = {2} />
          </div>
          <div>
            <MainGoalThird number = {3} />
          </div>
        </Slider>
      </div>
  )
}

const StSliderLayout = styled.div`

`;

export default GoalSlider;