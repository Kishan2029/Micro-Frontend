import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartContent from "./CartContent";
import Login from "./Login";
import MiniCart from "./MiniCart";

const App = () => (
  <Router>
    <div className="mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        Hey
        <CartContent />
        <MiniCart />
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
