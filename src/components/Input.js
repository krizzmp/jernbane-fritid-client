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
  helperText,
  validators = [],
  ...rest
}) {
  const classes = useStyles();
  const [helperText2, setHelperText2] = React.useState(helperText);
  const [error2, setError2] = React.useState(false);

  function handleChange(value) {
    let hasError = false;
    for (const validator of validators) {
      const errorMsg = validator.validate(value);
      if (errorMsg) {
        setHelperText2(errorMsg);
        setError2(true);
        hasError = true;
        break;
      }
    }
    if (hasError === false) {
      setHelperText2(helperText);
      setError2(false);
    }

    onChange(value);
  }
  function handleBlur(value) {
    for (const validator of validators) {
      const errorMsg = validator.validateBlur(value);
      if (errorMsg) {
        setHelperText2(errorMsg);
        setError2(true);
        break;
      }
    }
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
        error={error2}
        helperText={helperText2}
        onBlur={e => handleBlur(e.target.value)}
        {...rest}
      />
    </div>
  );
}
