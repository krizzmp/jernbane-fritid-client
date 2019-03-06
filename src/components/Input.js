import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing.unit * 2
  }
}));

export default function Input({
  id,
  label,
  value,
  onChange,
  required,
  helperText,
  error,
  validators = [],
  onBlur = () => {},
  ...rest
}) {
  const classes = useStyles();
  function handleChange(value) {
    onChange(value);
  }
  function handleBlur(value) {
    onBlur(value);
  }
  return (
    <div className={classes.container}>
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={e => handleChange(e.target.value)}
        fullWidth
        variant="outlined"
        required={required}
        error={error}
        helperText={helperText}
        onBlur={e => handleBlur(e.target.value)}
        {...rest}
      />
    </div>
  );
}
