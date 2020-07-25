import React from 'react';
import { Typography } from '@material-ui/core';
import './error-message.css';

const ErrorMessage = (props) => (
  <div
    id={props.id}
    className={!props.styleInfo ? 'error-message' : `error-message ${props.styleInfo}`}
  >
    <Typography variant="body2">{props.content}</Typography>
  </div>
);

export default ErrorMessage;
