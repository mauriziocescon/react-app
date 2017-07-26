import React from "react";
import { Route } from "react-router";
import App from "./containers/App/App";
import Users from "./containers/Users/Users";

export default (
  <Route path="/" component={App}>
    <Route path="users" component={Users}/>
  </Route>
);
