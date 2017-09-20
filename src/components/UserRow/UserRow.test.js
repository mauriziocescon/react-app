import React from "react";
import ReactDOM from "react-dom";
import { UserRow } from "./UserRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserRow/>, div);
});
