import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import MainGoalFirst from "./MainGoalFirst";
import MainGoalSecond from "./MainGoalSecond";
import MainGoalThird from "./MainGoalThird";
import { useDispatch } from "react-redux";
import { __loadMainGoal } from "../../redux/modules/goalSlice";

const GoalSlider = (props) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(props.number)
  //   dispatch(__loadMainGoal(props.number));
  // }, [])

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
        <Slider {...settings}>
          <div>
            <MainGoalFirst number = {1}/>
          </div>
          <div>
            <MainGoalSecond number = {2}/>
          </div>
          <div>
            <MainGoalThird number = {3}/>
          </div>
        </Slider>
      </div>
  )
}

const StSliderLayout = styled.div`

`;

export default GoalSlider;