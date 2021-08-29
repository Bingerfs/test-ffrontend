import React, { Component } from 'react';

import {Grid, Paper,TextField, Container, Button,} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {InputText,ButtonA,} from '../../../../shared/components/form/index';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Formik } from 'formik';
import userService from '../../../user-register/services/user.service';
import Add from '@material-ui/icons/Add';

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
                isScholar: false,
                descriptionOutstandingExperience: '',
                placeOutstandingExperience: '',
                durationOutstandingExperience: '',
                descriptionVolunteerExperience: '',
                placeVolunteerExperience: '',
                durationVolunteerExperience: '',
         },
         file: null,
         enabledButton: true
        //  isTheCreateVolunteerSuccessful: false,
     }
     this.handleFile = this.handleFile.bind(this);
     this.uploadFile = this.uploadFile.bind(this);
 }

 componentDidMount() {
     if(this.props.match.params.id) {
         userService.searchVolunteerById(this.props.match.params.id).then(volunteer =>{
             this.setState({ volunteerData: volunteer.data });
         });
     }
 }

 syncChanges(value,property){
     let state ={};
     state[property]=value;
     this.setState(state);
 }

 async submitVolunteer(values) {
     if(this.props.match.params.id) {
        await userService.updateVolunteer(this.props.match.params.id, values);    
     } else {
        await userService.createVolunteer(values);
     }
     this.props.history.push("/volunteers");
 }
 
 async handleFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    if (file !== undefined) {
        this.setState({ 
            file: file,
            enabledButton: false
        });
    }
  }

  async uploadFile(){
    userService.upload(this.state.file).then(res => {
        console.log(res)
        this.props.history.push("/volunteers");
    }).catch(err => {
        alert("Error al cargar el archivo, vuelva a intentarlo y revise el formato.");
    })
  }
  
  render() {
    const { volunteerData } = this.state;
    return (
        <div>
            <div   style={{  textAlign: 'center' }} >
                <input
                    type="file"
                    accept=".xlsx"                
                    onChange={(e) => this.handleFile(e)}
                />      
                <Button  disabled = {this.state.enabledButton} color="primary" size="large" component="label" onClick={this.uploadFile}>
                    <Add />
                        <p variant="subtitle2">
                        SUBIR
                        </p>
                </Button>
            </div>
        <Formik
        enableReinitialize
        initialValues = {volunteerData}
        onSubmit = {(values)=> this.submitVolunteer(values)}
        render ={({
            values, errors, handleChange, handleBlur, touched, handleSubmit, setFieldValue
        })=>(
        <Container   maxWidth="sm"  style={{  minHeight: '100vh' }}  >
        <Paper  elevation={1} variant="outlined" style={{marginTop: '2%'}} >
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
                        checked={ values.isScholar }
                        value={values.isScholar}
                        onChange={handleChange}
                        name="isScholar"
                        id="isScholar"
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
                                value={values.placeOutstandingExperience}/>
                            </Grid>
                    <Grid item xs={6} >

                            <InputText 
                                onChange={handleChange}
                                id="durationOutstandingExperience" 
                                name="durationOutstandingExperience"  
                                label="Duración"
                                type="durationOutstandingExperience" 
                                value={values.durationOutstandingExperience}/>
                            </Grid>
                            
                    <Grid item xs={12} >
                       <h4>Experiencia de voluntariado</h4>
                    
                            <TextField
                            onChange={handleChange}
                            id="descriptionVolunteerExperience"  
                            name="descriptionVolunteerExperience"  
                            label="Cuéntanos tu experiencia de voluntariado"
                            type="descriptionVolunteerExperience" 
                            value={values.descriptionVolunteerExperience}
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
                        value={values.placeVolunteerExperience}/>
                    </Grid>
                    <Grid item xs={6} >

                    <InputText 
                        onChange={handleChange}
                        id="durationVolunteerExperience"
                        name="durationVolunteerExperience"  
                        label="Duración"
                        type="durationVolunteerExperience" 
                        value={values.durationVolunteerExperience}/>
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
  
  } 
  />
 
</div>);
}}
