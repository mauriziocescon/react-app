import React from "react";
import ReactDOM from "react-dom";
import { NoResult } from "./NoResult";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NoResult/>, div);
});
