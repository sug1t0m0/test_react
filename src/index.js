import React from "react";
import ReactDOM from "react-dom";
import { SampleSlider } from "./SampleSlider";

import "slick-carousel/slick/slick.css";

import "./styles.css";

function App() {
  const slideContents = Array.from(Array(6).keys());
  return (
    <div className="App">
      <SampleSlider slideContents={slideContents} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
