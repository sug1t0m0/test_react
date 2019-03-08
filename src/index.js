import React from "react";
import ReactDOM from "react-dom";
import { SampleSlider } from "./SampleSlider";
import { ImageSlider } from "./ImageSlider/index.jsx";
import { Text } from "./atoms/Text/";
import { Title } from "./atoms/Title/";
import { ParagraphWithCenteredElements } from "./molecules/ParagraphWithCenteredElements/";

import "slick-carousel/slick/slick.css";

import "./styles.css";

function App() {
  const slideContents = Array.from(Array(6).keys());
  return (
    <div className="App">
      <ImageSlider slideContents={slideContents} />
      <SampleSlider slideContents={slideContents} />
      <ParagraphWithCenteredElements />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
