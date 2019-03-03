import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import * as ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => {
  return {
    root: {},
    formControl: {
      display: "flex",
      flexWrap: "wrap",
      margin: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 2
    }
  };
});
export default function DropDown({
  onChange = () => {},
  items = ["test", "test 2"],
  id,
  label,
  value,
  required,
  error,
  helperText,
  multiple = false
}) {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  function handleChange(event) {
    onChange(event.target.value);
  }
  return (
    <FormControl
      className={classes.formControl}
      variant="outlined"
      required={required}
      error={error}
    >
      <InputLabel ref={inputLabelRef} htmlFor={id}>
        {label}
      </InputLabel>
      <Select
        multiple={multiple}
        fullWidth
        value={value}
        onChange={handleChange}
        input={<OutlinedInput labelWidth={labelWidth} name={label} id={id} />}
      >
        {items.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
