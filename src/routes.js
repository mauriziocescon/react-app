import React from "react";
import { Route } from "react-router";
import App from "./containers/App/App";
import Albums from "./containers/App/Albums/Albums";
import Users from "./containers/App/Users/Users";

export default (
  <Route path="/" component={App}>
    <Route path="albums" component={Albums}/>
    <Route path="users" component={Users}/>
  </Route>
);
