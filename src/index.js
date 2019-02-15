import React from "react";
import ReactDOM from "react-dom";
import { SimpleSlider } from "./simpleSlider";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SimpleSlider />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
