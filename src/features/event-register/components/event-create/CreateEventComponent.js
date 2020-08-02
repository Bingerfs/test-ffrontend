import React, { Component } from 'react';

import {Grid, Paper, TextField, Container} from '@material-ui/core';


import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { ButtonA, InputText } from '../../../../shared/components/form';

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameActivity: '',
      nameManager: '',
      description: '',

    }

  }
  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }
  submitForm = () => {
    console.log(this.state);
  }



  render() {
    return (
     
      <Container   maxWidth="sm"  style={{  minHeight: '100vh' }}  >
        <Paper  elevation={1} variant="outlined" style={{marginTop: '20%'}} >
        <Container maxWidth="xl" >
        <h3> Completa los datos para registrar una nueva actividad</h3>
          <form>
            <Grid container spacing={3}  >
              <Grid item xs={6} >

                <InputText
                  onChange={(ev) => { this.syncChanges(ev.target.value, 'nameActivity') }}
                  id="nameActivity"
                  label="Nombre de la actividad"
                  type="nameActivity"
                  value={this.state.nameActivity} />
              </Grid>
              <Grid item xs={6} >

                <InputText
                  onChange={(ev) => { this.syncChanges(ev.target.value, 'nameManager') }}
                  id="nameManager"
                  label="Nombre del encargado"
                  type="nameManager"
                  value={this.state.nameManager} />
              </Grid>
              <Grid item xs={12}>
                
                <TextField
                            onChange={(ev) => { this.syncChanges(ev.target.value, 'description') }}
                            id="description"
                            label="Descripción"
                            type="description"
                            value={this.state.description}
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
                  onClick={this.submitForm}
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

      </Container >
    );
  }
}