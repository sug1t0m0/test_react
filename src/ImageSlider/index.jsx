import React from "react";
import Slider from "react-slick";

import { Img, SlideOuter, ImgOuter } from "./element";

export const ImageSlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    speed: 200,
    touchThreshold: 100,
    centerMode: true,
    centerPadding: "10%"
  };
  return (
    <div>
      <SlideOuter>
        <Slider {...settings}>
          {props.slideContents.map((content, index) => {
            return (
              <ImgOuter key={index}>
                <Img src={"http://placehold.it/400x300"} />
              </ImgOuter>
            );
          })}
        </Slider>
      </SlideOuter>
    </div>
  );
};
