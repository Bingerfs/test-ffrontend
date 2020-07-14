import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const ButtonA = (props) => (
  props.originForm ? (
    <Button
      form={props.originForm}
      fullWidth
      variant="contained"
      color="primary"
      id={props.id}
      name={props.name}
      type={props.type}
      className={!props.styleInfo ? 'button' : `button ${props.styleInfo}`}
      size="large"
    >
      <Typography variant="subtitle1">
        {props.content}
      </Typography>
    </Button>
  ) : (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      id={props.id}
      name={props.name}
      type={props.type}
      className={!props.styleInfo ? 'button' : `button ${props.styleInfo}`}
      size="large"
    >
      <Typography variant="subtitle1">
        {props.content}
      </Typography>
    </Button>
  )
);

export default ButtonA;
