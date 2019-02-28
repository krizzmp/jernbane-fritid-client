import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Samlever from "./Samlever";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Root() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/samlever/" component={Samlever} />
      </div>
    </Router>
  );
}
ReactDOM.render(<Root />, document.getElementById("root"));
