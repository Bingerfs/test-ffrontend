import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputText = (props) => (
  <TextField
    fullWidth
    id={props.id}
    name={props.name}
    value={props.value}
    key={props.label}
    label={props.label}
    className={!props.styleInfo ? 'input-text' : `input-text ${props.styleInfo}`}
    onChange={props.onChange}
    placeholder={props.label}
    onBlur={props.onBlur}
    variant="outlined"
    margin="normal"
    error={props.error}
    helperText={props.helperText}
    InputProps={{
      inputProps: { maxLength: props.maxLength }
    }}
  />
);

export default InputText;
