import React from "react";
import ReactDOM from "react-dom";
import { Albums } from "./Albums";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Albums/>, div);
});
