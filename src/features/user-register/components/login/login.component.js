import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from '../../services/auth.service';

import {
  Grid, Paper, Container, Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {
  InputText,
  ErrorMessage,
  ButtonA,
  InputPassword
} from '../../../../shared/components/form/index';
import { Formik } from 'formik';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import LoginValidations from './login.validations';
import styles from './login.css';
import { blue } from "@material-ui/core/colors";



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      loginFields: {
        password: '',
        username: ''
      },
      loading: false,
      message: "",
      isTheLoginSuccessful: false,
      isSubmitting: false,
      isTheLoginEnded: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  async logIn(username, password) {
    console.log(username,password)
    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();
    console.log(usernameTrimmed,passwordTrimmed)

    this.setState({ isSubmitting: true });
    AuthService.login(username, password).then(
        () => {
          this.setState({ isTheLoginSuccessful: true, isTheLoginEnded: true, isSubmitting: false });

          this.props.history.push("/home");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
  
  }

  render() {
    return (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
     >
      <Formik
        initialValues={this.state.loginFields}
        validationSchema={LoginValidations}
        onSubmit={(values) => {
          this.logIn(values.username, values.password);
        }}
        render={({
          values, errors, handleChange, handleBlur, touched, handleSubmit
        }) => (
          <>

            <Container maxWidth="xs" className={styles.login}>
              <Paper  rounded elevation={1} variant="outlined">
                <Container maxWidth="xl">
                  <Grid container justify="center" alignItems="center">
                    <Avatar
                      sizes="90px"
                      style={{
                        margin: "20px",
                        width: "120px",
                        height: "120px",
                      }}
                      src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C270b08139cdd83c1e9eaab009b230cf9/projects/Mb1161875685a72a3bdbeaaa3b25a1ce41558579849255/images/thumbnails/M69dddebf849aa2e74927eff2f48d3c971584242974440"
                    />
                  </Grid>

                  <form onSubmit={handleSubmit}>
                    <InputText
                      id="username"
                      name="username"
                      styleInfo="login__username-input"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Username"
                      error={errors.username && touched.username}
                    />

                    {errors.username && touched.username && (
                      <ErrorMessage id="username-error" content={errors.username} />
                    )}

                    <InputPassword
                      id="password"
                      name="password"
                      styleInfo="login__password-input"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      error={errors.password && touched.password}
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage id="password-error" content={errors.password} />
                    )}
                    {this.state.isTheLoginEnded && !this.state.isTheLoginSuccessful && (
                      <ErrorMessage
                        id="fail-submit-error"
                        content="Usuario o contraseña incorrectos."
                      />
                    )}
                    <br />
                    <br />
                    <ButtonA
                      id="sign-in"
                      name="sign-in"
                      type="submit"
                      content="Ingresar"
                    />

                    {this.state.isTheLoginSuccessful && <Redirect to='/home' />}
                  </form>
                  <br />
                  <br />
                </Container>
              </Paper>
            </Container>
            
          </>
        )}
      />
      </Grid>

    );
  }
}