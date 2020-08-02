import React, { Component } from 'react';

import {Grid, Paper,TextField, Container} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {InputText,ButtonA,} from '../../../../shared/components/form/index';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';



export default class CreateVolunteer extends Component {
 constructor(props){
     super(props);
     this.state={
         name: '',
         lastName: '',
         ci: '',
         email: '',
         phoneNumber: '',
         birthday: '',
         schooling: '',
         scholarshipName: '',
         scholar: false,
         descriptionOutstandingExperience: '',
         placeOutstandingExperience: '',
         durationOutstandingExperience: '',
         descriptionVolunteerExperience: '',
         placeVolunteerExperience: '',
         durationVolunteerExperience: '',
        //  isTheCreateVolunteerSuccessful: false,
     }
     
 }
 syncChanges(value,property){
     let state ={};
     state[property]=value;
     this.setState(state);
 }
 submitForm = ()=>{
    console.log(this.state);
 }
 
  
  render() {
    
    return (
        
        <Container   maxWidth="sm"  style={{  minHeight: '100vh' }}  >
        <Paper  elevation={1} variant="outlined" style={{marginTop: '20%'}} >
        <Container maxWidth="xl" >
        <h3> Completa los datos para registrar un nuevo voluntario</h3>
          <form>
        
            <Grid container spacing={1}  >
              <Grid item xs={6} >
                    <InputText
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'name')}}
                        id="name"
                        label="Nombre"
                        type="name"
                        value={this.state.name}/>
              </Grid>
              <Grid item xs={6} >

                    <InputText 
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'lastName')}}
                        id="lastName"
                        label="Apellido"
                        type="lastName" 
                        value={this.state.lastName}/>
                    </Grid>
              <Grid item xs={3} >

                    <InputText
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'ci')}} 
                        id="ci" 
                        label="CI"
                        type="ci" 
                        value={this.state.ci}/>
                    </Grid>
              
              <Grid item xs={3} >

                    <InputText 
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'phoneNumber')}}
                        id="phoneNumber" 
                        label="Celular"
                        type="phoneNumber"
                        value={this.state.phoneNumber}/>
                    </Grid>
                <Grid item xs={6} > 
                
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        inputVariant = "outlined"
                        id="birthday"
                        label="Fecha de nacimiento"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: "100%"}}></KeyboardDatePicker>
                       </MuiPickersUtilsProvider>
                    </Grid>
              <Grid item xs={6} >

                    <InputText 
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'email')}}
                        id="email" 
                        label="Email"
                        type="email" 
                        value={this.state.email}/>
                    </Grid>
                <Grid item xs={6} >

                    <InputText
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'schooling')}} 
                        id="schooling"
                        label="Estudio"
                        type="schooling" 
                        value={this.state.schooling}/>
                    </Grid>
              <Grid item xs={4} >
                    <FormControlLabel
                    control={
                    <Checkbox
                        value={this.state.scholar}
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'scholar')}}
                        name="scholar"
                        color="primary"
                    />
                    }
                    label="Becario"
                />
                  
                    </Grid>
              <Grid item xs={8} >

                    <InputText
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'scholarshipName')}} 
                        id="scholarshipName" 
                        label="Nombre de la beca"
                        type="scholarshipName" 
                        value={this.state.scholarshipName}/>
                    </Grid>
              
              
              
               <Grid item xs={12} >
                      <h4> Experiencia sobresaliente</h4>

                            <TextField
                            onChange={(ev)=>{this.syncChanges(ev.target.value,'descriptionOutstandingExperience')}}
                            id="descriptionOutstandingExperience"  
                            label="Cuéntanos alguna experiencia sobresaliente"
                            type="descriptionOutstandingExperience" 
                            value={this.state.descriptionOutstandingExperience}
                            multiline
                            variant="outlined"
                            rows={4}
                            rowsMax={8}
                            style={{width: "100%"}}
                          />
                        </Grid>
                <Grid item xs={6} >

                            <InputText 
                                onChange={(ev)=>{this.syncChanges(ev.target.value,'placeOutstandingExperience')}}
                                id="placeOutstandingExperience"  
                                label="Lugar"
                                type="placeOutstandingExperience" 
                                value={this.state.placeOutstandingExperience}/>
                            </Grid>
                    <Grid item xs={6} >

                            <InputText 
                                onChange={(ev)=>{this.syncChanges(ev.target.value,'durationOutstandingExperience')}}
                                id="durationOutstandingExperience"  
                                label="Duración"
                                type="durationOutstandingExperience" 
                                value={this.state.durationOutstandingExperience}/>
                            </Grid>
                            
                    <Grid item xs={12} >
                       <h4>Experiencia de voluntariado</h4>
                    
                            <TextField
                            onChange={(ev)=>{this.syncChanges(ev.target.value,'descriptionVolunteerExperience')}}
                            id="descriptionVolunteerExperience"  
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
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'placeVolunteerExperience')}}
                        id="placeVolunteerExperience"  
                        label="Lugar"
                        type="placeVolunteerExperience" 
                        value={this.state.placeVolunteerExperience}/>
                    </Grid>
                    <Grid item xs={6} >

                    <InputText 
                        onChange={(ev)=>{this.syncChanges(ev.target.value,'durationVolunteerExperience')}}
                        id="durationVolunteerExperience"  
                        label="Duración"
                        type="durationVolunteerExperience" 
                        value={this.state.durationVolunteerExperience}/>
                    </Grid>
              
              <br />
              <br />
        <Grid item xs={12}>
        <ButtonA
            onClick={this.submitForm}
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
    );
  }
  
}