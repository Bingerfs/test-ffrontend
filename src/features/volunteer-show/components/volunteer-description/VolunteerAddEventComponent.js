import React, { Component } from 'react';
import { Container, Box, Select, MenuItem, Paper, InputLabel, FormControl, InputBase, Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ButtonA } from '../../../../shared/components/form';
import userService from '../../../user-register/services/user.service';

class VolunteerAddEvent extends Component{
    constructor(props){
        super(props);
        let {id}=this.props.match.params;
        this.state ={
            formValues:{
            volunteerId: id,
            eventId: 0,
            institution: "",
            startingDate: "",
            endingDate: "",
            description: "",
            hours: 0
            },
            events: []
        };
    }

    componentDidMount(){
        userService.searchEvent("").then((res)=>{
            const eventsList = res.data;
            this.setState({events: eventsList});
        });
    }


    submitAddEvent(values){
        userService.addEventToVolunteer(values.startingDate, values.endingDate, values.hours, 
            values.institution, values.description, values.volunteerId, values.eventId);
    }

    render(){
        const eventMenu = this.state.events.map((event)=>{
            return(
                    <MenuItem key={event.id} value={event.id}>{event.name}</MenuItem>
            );
        })
        return (
            <Formik 
        initialValues = {this.state.formValues}
        onSubmit = {(values)=> this.submitAddEvent(values)}
        render ={({
            values, errors, handleChange, handleBlur, touched, handleSubmit, setFieldValue
        })=>(
            <Container component={Paper} style={{width: "60%"}}>
                <form onSubmit={handleSubmit}>
                <br />
                <Box display="flex" flex="1" flexDirection="column">
                    <Box display="flex" flex="1" flexDirection="row" justifyContent="space-between">
                        <FormControl fullWidth>
                            <InputLabel id="eventId-label">Seleccione una actividad</InputLabel>
                            <Select
                            labelId="eventId-label"
                            id="eventId"
                            name="eventId"
                            onChange={handleChange}
                            style={{width: "50%"}}
                            >
                                {eventMenu}
                            </Select>
                        </FormControl>
                        <TextField label="Colegio..." id="institution" name="institution" variant="outlined" onChange={handleChange}></TextField>
                    </Box>
                    <Box display="flex" flex="1" flexDirection="row" alignItems="baseline" justifyContent="space-between">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        inputVariant = "outlined"
                        id="startingDate"
                        name="startingDate"
                        onChange={(date, value) => setFieldValue("startingDate", value)}
                        label="Fecha inicio"
                        inputValue={values.startingDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: "30%"}}></KeyboardDatePicker>
                        <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        inputVariant = "outlined"
                        id="endingDate"
                        name="endingDate"
                        inputValue={values.endingDate}
                        id="date-picker-inline2"
                        onChange={(date, value) => setFieldValue("endingDate", value)}
                        label="Fecha fin"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: "30%"}}></KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                        <TextField label="Horas realizadas" id="hours" name="hours" variant="outlined" type="Number" onChange={handleChange} style={{width: "30%"}}></TextField>
                    </Box>
                    <br />
                    <Box display="flex" flex="1" flexDirection="row" justifyContent="center">
                        <TextField placeholder="Descripcion" id="description" name="description" onChange={handleChange} variant="outlined" multiline rows={6} rowsMax={8} style={{width: "80%"}}></TextField>
                    </Box>
                    <br />
                    <Box alignSelf="center">
                        <ButtonA type="submit" content="Registrar"></ButtonA>
                    </Box>
                    <br />
                </Box>
                </form>
            </Container>
        )} />
        );
    }
}

export default VolunteerAddEvent;