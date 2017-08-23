import React from "react";
import ReactDOM from "react-dom";
import LoadCompleted from "./LoadCompleted";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoadCompleted/>, div);
});
