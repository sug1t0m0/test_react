import React from "react";
import Slider from "react-slick";

export const SampleSlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    speed: 200,
    touchThreshold: 100
  };
  return (
    <Slider {...settings}>
      {props.slideContents.map((content, index) => {
        return (
          <div key={index}>
            <h3>{content}</h3>
          </div>
        );
      })}
    </Slider>
  );
};
