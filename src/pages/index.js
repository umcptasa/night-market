/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {createMemoryHistory} from "history";
import { Router, Route, Switch} from "react-router-dom";

// styles
import "../assets/css/bootstrap.min.css";
import "../assets/scss/paper-kit.scss";
import "../assets/demo/demo.css";
// pages
import HomePage from "./HomePage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);
