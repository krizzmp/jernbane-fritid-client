MultiSelectV2 example:

```js
import { install, ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

install();
let t = createMuiTheme();
<ThemeProvider theme={t}>
<TextInput
        id="cpr"
        labelText="Cpr nr"
        type="text"
        value={state.value}
        onChange={({ target: { value } }) => setState({value})}
      />
</ThemeProvider>;
```
