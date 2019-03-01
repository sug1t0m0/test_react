import React from "react";
import ReactDOM from "react-dom";
import { SimpleSlider } from "./simpleSlider";
import { SampleSlider } from "./sampleSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";

function App() {
  const slideContents = Array.from(Array(6).keys());
  return (
    <div className="App">
      <SimpleSlider />
      <SampleSlider slideContents={slideContents} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
