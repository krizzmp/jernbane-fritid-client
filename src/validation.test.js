import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "./bootstrap";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import Input from "./components/Input";

let theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class CprValidator {
  validate(value) {
    if (/^[0-9]*$/.test(value)) {
      return null;
    }
    return "error1";
  }
  validateBlur(value) {
    if (value.length === 10) {
      return null;
    }
    return "tomt";
  }
}
class RequiredValidator {
  validate() {
    return null;
  }
}
function Test() {
  const [value, setValue] = React.useState("");
  return (
    <Input
      id="hello"
      label="cpr nr"
      value={value}
      onChange={setValue}
      required={true}
      helperText="ht"
      validators={[new CprValidator(), new RequiredValidator()]}
    />
  );
}
it("validates", () => {
  const {
    getByText,
    getByTestId,
    container,
    asFragment,
    getByLabelText
  } = render(
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  );
  // test that typeing numbers does not show an error
  const input = getByLabelText("cpr nr *");
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
  const invalidEl0 = container.querySelector(`[aria-invalid="false"]`);
  expect(invalidEl0).not.toBeNull();
  getByText("ht");

  // test that typeing letters does show an error
  fireEvent.change(input, { target: { value: "b" } });
  expect(input.value).toBe("b");
  getByText("error1");
  const invalidEl = container.querySelector(`[aria-invalid="true"]`);
  expect(invalidEl).not.toBeNull();

  // test that deleting the letters and writing numbers does not show an error
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
  getByText("ht");
  const invalidEl2 = container.querySelector(`[aria-invalid="false"]`);
  expect(invalidEl2).not.toBeNull();

  // test that deleting the letters and writing numbers does not show an error
  fireEvent.change(input, { target: { value: "23" } });
  fireEvent.blur(input);
  expect(input.value).toBe("23");
  getByText("tomt");
  const invalidEl3 = container.querySelector(`[aria-invalid="true"]`);
  expect(invalidEl3).not.toBeNull();
});
