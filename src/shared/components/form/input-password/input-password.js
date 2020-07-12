import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';


class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  handleClickShowPassword() {
    const previousPasswordVisibilityState = this.state.isPasswordVisible;
    this.setState({ isPasswordVisible: !previousPasswordVisibilityState });
  }

  handleMouseDownPassword(event) {
    event.preventDefault();
  }

  render() {
    return (
      <TextField
        fullWidth
        key={this.props.label}
        id={this.props.id}
        name={this.props.name}
        type={this.state.isPasswordVisible ? 'text' : 'password'}
        value={this.props.value}
        className={
          !this.props.styleInfo
            ? 'input-password'
            : `input-password ${this.props.styleInfo}`
        }
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        variant="outlined"
        margin="normal"
        autoComplete="password"
        error={this.props.error}
        helperText={this.props.helperText}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.isPasswordVisible ? (
                  <VisibilityOffTwoToneIcon />
                ) : (
                  <VisibilityTwoToneIcon />
                )}
              </IconButton>
            </InputAdornment>
          )
        }}
        label={this.props.label}
      />
    );
  }
}

export default InputPassword;
