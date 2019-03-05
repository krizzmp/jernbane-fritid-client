import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap";
import "./index.css";
import Member from "./Member";
import Samlever from "./Samlever";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function isStepSkipped(index) {
  return false;
}
function Fron({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0)
  console.log(activeStep)
  const Component = steps[activeStep].component;
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((obj, index) => {
          const stepProps = {};
          const labelProps = {};
          if (obj.optional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={obj.title} {...stepProps}>
              <StepLabel {...labelProps}>{obj.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Component onNext={()=>setActiveStep(activeStep+1)} />
    </div>
  );
}
function Root() {
  let steps = [
    { title: "member", component: Member, optional: false },
    { title: "Samlever", component: Samlever, optional: true },
    { title: "Barn", component: Samlever, optional: true },
    { title: "Betalingsmåde", component: Samlever, optional: false },
    { title: "Review", component: Samlever, optional: false }
  ];
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Fron steps={steps} />
      </Router>
    </ThemeProvider>
  );
}
ReactDOM.render(<Root />, document.getElementById("root"));
