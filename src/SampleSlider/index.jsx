import React from "react";
import Slider from "react-slick";
import { Outer } from "./element";

export const SampleSlider = props => {
  const settings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    speed: 200,
    touchThreshold: 100,
    centerMode: true,
    centerPadding: "15px"
  };
  return (
    <Slider {...settings}>
      {props.slideContents.map((content, index) => {
        return <Outer key={index}>紅茶の種類 {content}</Outer>;
      })}
    </Slider>
  );
};
