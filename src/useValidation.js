import { useGlobalState } from './state'
import React from 'react'

export function useValidation (stateName, validators, defaultHelperText) {
  return useValidationBase(useGlobalState(stateName),validators,defaultHelperText)
}
function useMyState(index, key, defaultValue) {
  const defaultObject = { [key]: defaultValue };
  const [children, setChildren] = useGlobalState("children");
  let child = children[index];
  if (child === undefined) {
    child = defaultObject;
  }
  if (child[key] === undefined) {
    child = { ...child, ...defaultObject };
  }
  const set = val => {
    children[index] = { ...child, ...{ [key]: val } };
    setChildren([...children]);
  };
  return [child[key], set];
}
export function useChildValidation (index, stateName, defaultValue, validators, defaultHelperText) {
  return useValidationBase(useMyState(index, `cpr`, ""),validators,defaultHelperText)
}
function useValidationBase ([value, set_value], validators, defaultHelperText) {
  const [helperText, set_helperText] = React.useState(defaultHelperText)
  const [error, set_error] = React.useState(false)
  const onChange = value => {
    set_helperText(defaultHelperText)
    set_error(false)
    for (const validator of validators) {
      let error1 = validator.validateChange(value)
      if (error1) {
        set_helperText(error1)
        set_error(true)
        break
      }
    }
    set_value(value)
  }
  const onBlur = value => {
    for (const validator of validators) {
      let error1 = validator.validateBlur(value)
      if (error1) {
        set_helperText(error1)
        set_error(true)
        break
      }
    }
  }
  const submit = () => {
    for (const validator of validators) {
      let error1 =
        validator.validateSubmit(value) ||
        validator.validateBlur(value) ||
        validator.validateChange(value)
      if (error1) {
        set_helperText(error1)
        set_error(true)
        return error1
      }
    }
  }
  return [{value, onChange, onBlur, helperText, error}, submit]
}