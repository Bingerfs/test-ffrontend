import React, { Component } from 'react';
import { Container, Box, Select, MenuItem, Paper, InputLabel, FormControl, InputBase, Button, TextField } from '@material-ui/core';
import { Form } from 'formik';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ButtonA } from '../../../../shared/components/form';

class VolunteerAddEvent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container component={Paper} style={{width: "60%"}}>
                <FormControl fullWidth>
                <br />
                <Box display="flex" flex="1" flexDirection="column">
                    <Box display="flex" flex="1" flexDirection="row" justifyContent="space-between">
                        <TextField label="Seleccione una actividad" variant="outlined" style={{width: "50%"}}></TextField>
                        <TextField label="Colegio..." variant="outlined"></TextField>
                    </Box>
                    <Box display="flex" flex="1" flexDirection="row" alignItems="baseline" justifyContent="space-between">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        inputVariant = "outlined"
                        id="date-picker-inline"
                        label="Fecha inicio"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: "30%"}}></KeyboardDatePicker>
                        <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        inputVariant = "outlined"
                        id="date-picker-inline"
                        label="Fecha fin"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: "30%"}}></KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                        <TextField label="Horas realizadas" variant="outlined" style={{width: "30%"}}></TextField>
                    </Box>
                    <br />
                    <Box display="flex" flex="1" flexDirection="row" justifyContent="center">
                        <TextField placeholder="Descripcion" variant="outlined" multiline rows={6} rowsMax={8} style={{width: "80%"}}></TextField>
                    </Box>
                    <br />
                    <Box alignSelf="center">
                        <ButtonA content="Registrar"></ButtonA>
                    </Box>
                    <br />
                </Box>
                </FormControl>
            </Container>
        );
    }
}

export default VolunteerAddEvent;