// @flow
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import * as ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => {
  return {
    root: {},
    formControl: {
      display: "flex",
      flexWrap: "wrap",
      margin: theme.spacing.unit
      // minWidth: 120
    }
  };
});
type PropType = {
  onChange?: (obj: { selectedItems: { id: string, text: string }[] }) => void,
  items?: string[],
  id: string,
  labelText: string
};
export default function MultiSelectV2({
  onChange = () => {},
  items = ["test", "test 2"],
  id,
  labelText
}: PropType) {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [values, setValues] = React.useState([]);
  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(event.target.value);
  }
  return (
    <FormControl className={classes.formControl} variant="outlined">
      <InputLabel ref={inputLabelRef} htmlFor={id}>
        {labelText}
      </InputLabel>
      <Select
        multiple
        fullWidth
        value={values}
        onChange={handleChange}
        input={
          <OutlinedInput labelWidth={labelWidth} name={labelText} id={id} />
        }
      >
        {items.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
