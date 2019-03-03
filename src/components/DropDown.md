single selections:

```js
import React from "react";
import DropDown from "./DropDown";
function DropDown2() {
  const [value, setValue] = React.useState([]);

  return (
    <DropDown
      id="virksomhed"
      label="Virksomhed"
      items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
      onChange={setValue}
      value={value}
      required={true}
      helperText="Virksomhed"
    />
  );
}
<DropDown2 />;
```

multiple selections:

```js
import React from "react";
import DropDown from "./DropDown";

function DropDown3() {
  const [value, setValue] = React.useState([]);

  return (
    <DropDown
      multiple={true}
      id="memberships"
      label="Memlemskaber"
      items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
      onChange={setValue}
      value={value}
      required={true}
      helperText="Memlemskaber"
    />
  );
}
<DropDown3 />;
```
