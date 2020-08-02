import React, { Component } from 'react';

import {Grid, Paper,TextField, Container} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {InputText,ButtonA,} from '../../../../shared/components/form/index';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Formik } from 'formik';
import userService from '../../../user-register/services/user.service';



export default class CreateVolunteer extends Component {
 constructor(props){
     super(props);
     this.state={
            volunteerData: {
                name: '',
                lastname: '',
                ci: '',
                email: '',
                phoneNumber: '',
                birthday: '',
                schooling: '',
                scholarship: '',
                scholar: false,
                descriptionOutstandingExperience: '',
                placeOutstandingExperience: '',
                durationOutstandingExperience: '',
                descriptionVolunteerExperience: '',
                placeVolunteerExperience: '',
                durationVolunteerExperience: '',
         }
        //  isTheCreateVolunteerSuccessful: false,
     }
     
 }
 syncChanges(value,property){
     let state ={};
     state[property]=value;
     this.setState(state);
 }
 submitCreateVolunteer(values){
     console.log(values);
     userService.createVolunteer(values);
     this.props.history.push("/volunteers");

 }
 
  
  render() {
    console.log(this.state);
    return (
        <Formik
        initialValues = {this.state.volunteerData}
        onSubmit = {(values)=> this.submitCreateVolunteer(values)}
        render ={({
            values, errors, handleChange, handleBlur, touched, handleSubmit, setFieldValue
        })=>(
        <Container   maxWidth="sm"  style={{  minHeight: '100vh' }}  >
        <Paper  elevation={1} variant="outlined" style={{marginTop: '20%'}} >
        <Container maxWidth="xl" >
        <h3> Completa los datos para registrar un nuevo voluntario</h3>
          <form onSubmit={handleSubmit}>
        
            <Grid container spacing={1}  >
              <Grid item xs={6} >
                    <InputText
                        onChange={handleChange}
                        id="name"
                        name="name"
                        label="Nombre"
                        type="name"
                        value={values.name}/>
              </Grid>
              <Grid item xs={6} >

                    <InputText 
                        onChange={handleChange}
                        id="lastname"
                        name="lastname"
                        label="Apellido"
                        type="lastname" 
                        value={values.lastname}/>
                    </Grid>
              <Grid item xs={3} >

                    <InputText
                        onChange={handleChange} 
                        id="ci" 
                        name="ci" 
                        label="CI"
                        type="ci" 
                        value={values.ci}/>
                    </Grid>
              
              <Grid item xs={3} >

                    <InputText 
                        onChange={handleChange}
                        id="phoneNumber" 
                        name="phoneNumber" 
                        label="Celular"
                        type="phoneNumber"
                        value={values.phoneNumber}/>
                    </Grid>
                <Grid item xs={6} > 
                
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        inputVariant = "outlined"
                        id="birthday"
                        inputValue={values.birthday}
                        onChange={(date, value)=>setFieldValue("birthday", value)}
                        name="birthday"
                        label="Fecha de nacimiento"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: "100%"}}></KeyboardDatePicker>
                       </MuiPickersUtilsProvider>
                    </Grid>
              <Grid item xs={6} >

                    <InputText 
                        onChange={handleChange}
                        id="email" 
                        name="email" 
                        label="Email"
                        type="email" 
                        value={values.email}/>
                    </Grid>
                <Grid item xs={6} >

                    <InputText
                        onChange={handleChange} 
                        id="schooling"
                        name="schooling"
                        label="Estudio"
                        type="schooling" 
                        value={values.schooling}/>
                    </Grid>
              <Grid item xs={4} >
                    <FormControlLabel
                    control={
                    <Checkbox
                        value={values.scholar}
                        onChange={handleChange}
                        name="scholar"
                        id="scholar"
                        color="primary"
                    />
                    }
                    label="Becario"
                />
                  
                    </Grid>
              <Grid item xs={8} >

                    <InputText
                        onChange={handleChange} 
                        id="scholarship" 
                        name="scholarship" 
                        label="Nombre de la beca"
                        type="scholarshipName" 
                        value={values.scholarship}/>
                    </Grid>
              
              
              
               <Grid item xs={12} >
                      <h4> Experiencia sobresaliente</h4>

                            <TextField
                            onChange={handleChange}
                            id="descriptionOutstandingExperience" 
                            name="descriptionOutstandingExperience"  
                            label="Cuéntanos alguna experiencia sobresaliente"
                            type="descriptionOutstandingExperience" 
                            value={values.descriptionOutstandingExperience}
                            multiline
                            variant="outlined"
                            rows={4}
                            rowsMax={8}
                            style={{width: "100%"}}
                          />
                        </Grid>
                <Grid item xs={6} >

                            <InputText 
                                onChange={handleChange}
                                id="placeOutstandingExperience" 
                                name="placeOutstandingExperience"  
                                label="Lugar"
                                type="placeOutstandingExperience" 
                                value={this.state.placeOutstandingExperience}/>
                            </Grid>
                    <Grid item xs={6} >

                            <InputText 
                                onChange={handleChange}
                                id="durationOutstandingExperience" 
                                name="durationOutstandingExperience"  
                                label="Duración"
                                type="durationOutstandingExperience" 
                                value={this.state.durationOutstandingExperience}/>
                            </Grid>
                            
                    <Grid item xs={12} >
                       <h4>Experiencia de voluntariado</h4>
                    
                            <TextField
                            onChange={handleChange}
                            id="descriptionVolunteerExperience"  
                            name="descriptionVolunteerExperience"  
                            label="Cuéntanos tu experiencia de voluntariado"
                            type="descriptionVolunteerExperience" 
                            value={this.state.descriptionVolunteerExperience}
                            multiline
                            variant="outlined"
                            rows={4}
                            rowsMax={8}
                            style={{width: "100%"}}
                          />                

                        </Grid>
                <Grid item xs={6} >

                    <InputText 
                        onChange={handleChange}
                        id="placeVolunteerExperience" 
                        name="placeVolunteerExperience"  
                        label="Lugar"
                        type="placeVolunteerExperience" 
                        value={this.state.placeVolunteerExperience}/>
                    </Grid>
                    <Grid item xs={6} >

                    <InputText 
                        onChange={handleChange}
                        id="durationVolunteerExperience"
                        name="durationVolunteerExperience"  
                        label="Duración"
                        type="durationVolunteerExperience" 
                        value={this.state.durationVolunteerExperience}/>
                    </Grid>
              
              <br />
              <br />
        <Grid item xs={12}>
        <ButtonA
            id="register"
            name="register"
            type="submit"
            content="Registrar"/>

     {/* {this.state.isTheCreateVolunteerSuccessful && <Redirect to='/home' />} */}
     </Grid>
     </Grid>
      <br />
      <br />
      </form>
          </Container>
          <br />
          <br />
        </Paper >

      </Container >
    )
  } />);
}}
