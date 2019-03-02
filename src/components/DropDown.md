MultiSelectV2 example:

```js
import { install, ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

install();
let t = createMuiTheme();
<ThemeProvider theme={t}>
  <DropDown labelText="Memberships" id="memberships"/>
</ThemeProvider>;
```
