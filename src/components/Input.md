```js
import React from "react";
import Input from "./Input";
class Test {
  validate(v) {
    if (/^[0-9]*$/.test(v) === false) {
      return "must contain only numbers";
    }
    return null;
  }
}
function Input2() {
  const [value, setValue] = React.useState();

  return (
    <Input
      id="hello"
      label="cpr nr"
      value={value}
      required={true}
      onChange={setValue}
      validators={[new Test()]}
    />
  );
}
<Input2 />;
```
