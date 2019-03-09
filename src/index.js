import React from "react";
import ReactDOM from "react-dom";
import { SampleSlider } from "./SampleSlider";
import { ImageSlider } from "./ImageSlider/index.jsx";
import { NavigationBar } from "./atoms/NavigationBar";
import { ParagraphWithCenteredElements } from "./molecules/ParagraphWithCenteredElements/";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";

import "./styles.css";

function App() {
  const slideContents = Array.from(Array(6).keys());
  const slugs = [
    "ParagraphWithCenteredElements",
    "ImageSlider",
    "SampleSlider"
  ];
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar slugs={slugs} />
          <hr />
          <Route
            exact
            path="/"
            render={() => (
              <ParagraphWithCenteredElements
                title={"Title"}
                subTitle={"SubTitle"}
                body={
                  "\n<p>\u3000\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3002<br></p>\n\n\n\n<p>\u3000\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3002</p>\n\n\n\n<p>\u3000\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3002</p>\n"
                }
                innerWidth={"80%"}
                gapHeight={10}
              />
            )}
          />
          <Route
            path="/ParagraphWithCenteredElements"
            render={() => (
              <ParagraphWithCenteredElements
                title={"Title"}
                subTitle={"SubTitle"}
                body={
                  "\n<p>\u3000\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3042\u3002<br></p>\n\n\n\n<p>\u3000\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3044\u3002</p>\n\n\n\n<p>\u3000\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3046\u3002</p>\n"
                }
                innerWidth={"80%"}
                gapHeight={10}
              />
            )}
          />
          <Route
            path="/ImageSlider"
            render={() => <ImageSlider slideContents={slideContents} />}
          />
          <Route
            path="/SampleSlider"
            render={() => <SampleSlider slideContents={slideContents} />}
          />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
