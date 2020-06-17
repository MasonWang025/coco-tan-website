import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

import "./assets/style.css";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/listings">Listings</Route>
          <Route path="/about">About Coco</Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
