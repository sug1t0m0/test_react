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
      <ParagraphWithCenteredElements
        title={"Title"}
        subTitle={"SubTitle"}
        body={
          "\n<p>\u3000\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3002<br></p>\n\n\n\n<p>\u3000\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3002</p>\n\n\n\n<p>\u3000\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3002</p>\n"
        }
        innerWidth={"80%"}
        gapHeight={10}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
