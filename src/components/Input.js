import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    // margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
}));

export default function Input({
  id,
  label,
  value,
  onChange,
  required,
  error,
  helperText,
  ...rest
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={e => onChange(e.target.value)}
        fullWidth
        variant="outlined"
        required={required}
        error={error}
        helperText={helperText}
        {...rest}
      />
    </div>
  );
}
