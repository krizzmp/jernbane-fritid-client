```js
import React from "react";
import Input from "./Input";
function useValidation(validator, description, setValue) {
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(description);
  function onChange(v) {
    let hasError = validator(v);
    setError(!!hasError);
    setHelperText(hasError || description);
    setValue(v);
  }
  return { error, helperText, onChange };
}
function Input2() {
  const [value, setValue] = React.useState();
  const t = useValidation(validator, "cpr number", setValue);

  function validator(v) {
    if (v === "") {
      return null;
    }
    if (/^[0-9]*$/.test(v) === false) {
      return "must contain only numbers";
    }
    return null;
  }

  return (
    <Input id="hello" label="cpr nr" value={value} required={true} {...t} />
  );
}
<Input2 />;
```
