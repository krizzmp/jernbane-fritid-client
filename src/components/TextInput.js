import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing.unit
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));
function TextInput({ id, labelText, value, onChange }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        id={id}
        label={labelText}
        className={classes.textField}
        value={value}
        onChange={onChange}
        fullWidth
        variant="outlined"
      />
    </div>
  );
}
export default TextInput;
