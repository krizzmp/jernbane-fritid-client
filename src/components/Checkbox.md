```js
import React from "react";
import Checkbox from "./Checkbox";
function Input2() {
  const [value, setValue] = React.useState();
  const [indeterminate, setIndeterminate] = React.useState(true);

  return (
    <Checkbox
      id="hello"
      label="cpr nr"
      value={value}
      required={true}
      onChange={setValue}
      indeterminate={indeterminate}
      setIndeterminate={setIndeterminate}
      helperText="cpr nr"
    />
  );
}
<Input2 />;
```
