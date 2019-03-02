import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(theme => {
  console.log(theme);
  const borderColor =
    theme.palette.type === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)";

  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      margin: theme.spacing.unit,
      boxSizing: "border-box",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      padding: "3px 12px",
      borderRadius: theme.shape.borderRadius,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor,
      "&:hover:not($disabled):not($focused):not($error)": {
        borderColor: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          borderColor
        }
      },

    },
    label:{
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em', // Reset (19px), match the native input line-height
      display: 'inline-flex',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      zIndex: 1,
      pointerEvents: 'none',
    }
  };
});
export default function CheckBox({ checked, setChecked, labelText }) {
  const classes = useStyles();
  function handleChange(event) {
    setChecked(event.target.checked);
  }
  return (
    <FormControlLabel
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={labelText}
    />
  );
}
