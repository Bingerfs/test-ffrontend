import React, { Component } from 'react';

import {Grid, Paper, TextField, Container} from '@material-ui/core';


import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { ButtonA, InputText } from '../../../../shared/components/form';
import userService from '../../../user-register/services/user.service';

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      inCharge: '',
      description: '',

    }

  }
  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }
  submitCrateEvent(values){
      userService.createEvent(values);
  }



  render() {
    return (
        <Formik 
        initialValues = {this.state}
        onSubmit = {(values)=> this.submitCrateEvent(values)}
        render ={({
            values, errors, handleChange, handleBlur, touched, handleSubmit, setFieldValue
        })=>
      (<Container   maxWidth="sm"  style={{  minHeight: '100vh' }}  >
        <Paper  elevation={1} variant="outlined" style={{marginTop: '20%'}} >
        <Container maxWidth="xl" >
        <h3> Completa los datos para registrar una nueva actividad</h3>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}  >
              <Grid item xs={6} >

                <InputText
                  onChange={handleChange}
                  id="name"
                  label="Nombre de la actividad"
                  type="name"
                  value={values.name} />
              </Grid>
              <Grid item xs={6} >

                <InputText
                  onChange={handleChange}
                  id="inCharge"
                  label="Nombre del encargado"
                  type="inCharge"
                  value={values.inCharge} />
              </Grid>
              <Grid item xs={12}>
                
                <TextField
                            onChange={handleChange}
                            id="description"
                            label="Descripción"
                            type="description"
                            value={values.description}
                            multiline
                            variant="outlined"
                            rows={4}
                            rowsMax={8}
                            style={{width: "100%"}}
                          />
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <ButtonA
                  id="register"
                  name="register"
                  type="submit"
                  content="Registrar" />
              </Grid>
              {/* {this.state.isTheCreateVolunteerSuccessful && <Redirect to='/home' />} */}
            </Grid >

          </form>
          </Container>
          <br />
          <br />
        </Paper >

      </Container >)}
      />
    );
  }
}