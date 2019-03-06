import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap";
import "./index.css";
import Member from "./Member";
import Samlever from "./Samlever";
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { GlobalStateProvider } from "./state";
import ChildList from "./Child";
import Review from "./Review";

let theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function isStepSkipped(index) {
  return false;
}
function Fron({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const Page = steps[activeStep].component;
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (step.optional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step.title} {...stepProps}>
              <StepLabel {...labelProps}>{step.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Page
        onNext={() => setActiveStep(activeStep + 1)}
        onPrev={() => setActiveStep(activeStep - 1)}
      />
    </div>
  );
}
function Root() {
  let steps = [
    { title: "Member", component: Member, optional: false },
    { title: "Samlever", component: Samlever, optional: true },
    { title: "Barn", component: ChildList, optional: true },
    { title: "Review", component: Review, optional: false }
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStateProvider>
        <Fron steps={steps} />
      </GlobalStateProvider>
    </ThemeProvider>
  );
}
ReactDOM.render(<Root />, document.getElementById("root"));
