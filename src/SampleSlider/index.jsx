import React from "react";
import Slider from "react-slick";
import {
  NextButton,
  SlideOuter,
  Outer,
  PrevButton,
  Text,
  Button
} from "./element";

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
    centerPadding: "20px",
    prevArrow: <PrevButton>Previous</PrevButton>,
    nextArrow: <NextButton>next</NextButton>
  };
  return (
    <div>
      <SlideOuter>
        <Slider {...settings}>
          {props.slideContents.map((content, index) => {
            return (
              <Outer key={index}>
                <Text>{"紅茶の種類 " + content}</Text>
              </Outer>
            );
          })}
        </Slider>
      </SlideOuter>
    </div>
  );
};
