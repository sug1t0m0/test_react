import React, { Component } from "react";
import Slider from "react-slick";

import {
  Img,
  SlideOuter,
  ImgOuter,
  Button,
  Buttons,
  ButtonsOuter
} from "./element";

export class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      swipe: true,
      swipeToSlide: true,
      speed: 200,
      touchThreshold: 100,
      centerMode: true,
      centerPadding: "10%",
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <div>
        <SlideOuter>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.slideContents.map((content, index) => {
              return (
                <ImgOuter key={index}>
                  <Img src={"http://placehold.it/400x300"} />
                </ImgOuter>
              );
            })}
          </Slider>
        </SlideOuter>
        <ButtonsOuter>
          <Buttons>
            {this.props.slideContents.map((content, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => this.slider.slickGoTo(index)}
                />
              );
            })}
          </Buttons>
        </ButtonsOuter>
      </div>
    );
  }
}
