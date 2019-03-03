// styleguide/ThemeWrapper.js
import React, { Component } from "react";
import '../src/bootstrap';
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
let theme = createMuiTheme();
export default class ThemeWrapper extends Component {
  render() {
    return React.createElement(ThemeProvider, { theme }, this.props.children);
  }
}
