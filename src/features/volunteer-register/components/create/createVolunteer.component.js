import React, { Component } from 'react';

import {
    Grid, Paper, Container
  } from '@material-ui/core';
  
  import {
    InputText,
    ButtonA,
  } from '../../../../shared/components/form/index';
  


export default class CreateVolunteer extends Component {
 constructor(props){
     super(props);
     this.state={
         name: '',
         lastName: '',
         ci: '',
         email: '',
         phone: '',
         scholarshipName: '',
         schooling: '',
         experience: '',
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
<Paper elevation={1} variant="outlined">
<Grid container spacing={2} justify="center" alignItems="center">    
<Grid item xs={6} >
<Grid item xs container direction="column" spacing={2}>
  <Paper elevation={1} variant="outlined">
   <Container maxWidth="xl">
      <form>
        <InputText
            onChange={(ev)=>{this.syncChanges(ev.target.value,'name')}}
            id="name"
            label="Nombre"
            type="name"
            value={this.state.name}/>
        <InputText 
            onChange={(ev)=>{this.syncChanges(ev.target.value,'lastName')}}
            id="lastName"
            label="Apellido"
            type="lastName" 
            value={this.state.lastName}/>
        <InputText
            onChange={(ev)=>{this.syncChanges(ev.target.value,'ci')}} 
            id="ci" 
            label="CI"
            type="ci" 
            value={this.state.ci}/>
        <InputText 
            onChange={(ev)=>{this.syncChanges(ev.target.value,'email')}}
            id="email" 
            label="Email"
            type="email" 
            value={this.state.email}/>
        <InputText 
            onChange={(ev)=>{this.syncChanges(ev.target.value,'phone')}}
            id="phone" 
            label="Celular"
            type="phone"
            value={this.state.phone}/>
        <InputText
            onChange={(ev)=>{this.syncChanges(ev.target.value,'scholarshipName')}} 
            id="scholarshipName" 
            label="Nombre de la beca"
            type="scholarshipName" 
            value={this.state.scholarshipName}/>
        <InputText
            onChange={(ev)=>{this.syncChanges(ev.target.value,'schooling')}} 
            id="schooling"
            label="Estudio"
            type="schooling" 
            value={this.state.schooling}/>
        <InputText 
            onChange={(ev)=>{this.syncChanges(ev.target.value,'experience')}}
            id="experience"  
            label="Experiencia"
            type="experience" 
            value={this.state.experience}/>
       <br />
      <br />
        <ButtonA
            onClick={this.submitForm}
            id="register"
            name="register"
            type="submit"
            content="Registrar"/>

     {/* {this.state.isTheCreateVolunteerSuccessful && <Redirect to='/home' />} */}
      </form>
      <br />
      <br />
 </Container>
</Paper>
</Grid>
</Grid>
</Grid>
</Paper>
    );
  }
}