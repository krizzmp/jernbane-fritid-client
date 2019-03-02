import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap";
import "./index.css";
import App from "./App";
import Samlever from "./Samlever";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
let t = createMuiTheme();
function Root() {
  return (
    <ThemeProvider theme={t}>
      <Router>
        <div>
          <Route path="/" exact component={App} />
          <Route path="/samlever/" component={Samlever} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
ReactDOM.render(<Root />, document.getElementById("root"));
