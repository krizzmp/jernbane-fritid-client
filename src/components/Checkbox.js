import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
const useStyles = makeStyles(theme => {
  const borderColor =
    theme.palette.type === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)";

  return {
    formControl: {
      display: "flex",
      flexWrap: "wrap",
      // margin: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 2
    },
    formHelperText: {
      margin: "8px 12px 0"
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      margin: 0, // theme.spacing.unit/3,
      boxSizing: "border-box",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      padding: "3px 12px",
      borderRadius: theme.shape.borderRadius,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor,
      transition: theme.transitions.create("border-color", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      "&:hover:not($disabled):not($focused):not($error)": {
        borderColor: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          borderColor
        }
      }
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "1.1875em", // Reset (19px), match the native input line-height
      display: "inline-flex",
      alignItems: "center",
      color: theme.palette.text.secondary,
      zIndex: 1,
      pointerEvents: "none"
    }
  };
});
export default function CheckBox({
  id,
  label,
  value,
  onChange = () => {},
  required,
  error,
  helperText,
  indeterminate = false,
  setIndeterminate = () => {},
  ...rest
}) {
  const classes = useStyles();
  function handleChange(event) {
    setIndeterminate(false);
    onChange(event.target.checked);
  }
  const ast = required ? " *" : " ";
  const _label = label + ast;
  return (
    <FormControl
      required={required}
      error={error}
      component="fieldset"
      className={classes.formControl}
    >
      <FormControlLabel
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label // class name, e.g. `classes-nesting-label-x`
        }}
        control={
          <Checkbox
            checked={value}
            indeterminate={indeterminate}
            onChange={handleChange}
            color={"primary"}
            {...rest}
          />
        }
        label={_label}
      />
      <FormHelperText className={classes.formHelperText}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}
