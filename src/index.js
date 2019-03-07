import React from "react";
import ReactDOM from "react-dom";
import { SampleSlider } from "./SampleSlider";
import { ImageSlider } from "./ImageSlider/index.jsx";

import "slick-carousel/slick/slick.css";

import "./styles.css";

function App() {
  const slideContents = Array.from(Array(6).keys());
  return (
    <div className="App">
      <ImageSlider slideContents={slideContents} />
      <SampleSlider slideContents={slideContents} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
