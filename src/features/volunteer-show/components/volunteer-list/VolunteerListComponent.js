import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableContainer, Paper, TableHead, Table, TableBody, Grid, Container, TextField, IconButton, InputBase, SvgIcon, Fab, Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add'
import getVolunteers from '../../../event-show/services/VolunteersService';



class VolunteerList extends Component{

    constructor(props){
        super(props);
        this.state = {
            volunteers: null,
            searchString: ""
        }
        this.state.volunteers = getVolunteers();
    }



    onSearchInputChange = (event) =>{
        var temp = [];
        temp = getVolunteers();
        temp = temp.filter((current)=>{
            console.log(current.name);
            return current.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.setState({searchString: event.target.value, scholars: temp});
    }


    render(){
        const rows = this.state.volunteers.map((volunteer)=>{
            return (
                <TableRow key={volunteer.id}>
                    <TableCell component="th" scope="row">{volunteer.name}</TableCell>
                    <TableCell>{volunteer.age}</TableCell>
                    <TableCell>{volunteer.scholarship}</TableCell>
                    <TableCell>{volunteer.hours}</TableCell>
                    <TableCell>
                        <a href="#edit">Editar</a> | <a href="#borrar">Borrar</a> | <a href="#view">Ver mas</a>
                    </TableCell>
                </TableRow>
            );
        });

        return(
            <Container>
                <Box display="flex" >
                    <Box>
                        <TextField label="Buscar" type="search" variant="outlined" component={Paper} onChange = {this.onSearchInputChange} id="searchInput"/>
                    </Box>
                    <Box position="relative" left="75%">
                        <Fab color="primary" component={Paper}>
                            <Add></Add>
                        </Fab>
                    </Box>
                </Box>
                <br></br>
                <br></br>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Edad</TableCell>
                                <TableCell>Beca</TableCell>
                                <TableCell>Horas</TableCell>
                                <TableCell>Opciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        );
    }
}

export default VolunteerList;