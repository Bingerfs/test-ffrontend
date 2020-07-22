import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableContainer, Paper, TableHead, Table, TableBody, Grid, Container, TextField, IconButton, InputBase, SvgIcon, Fab, Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add'
import getEvents from '../services/EventsService';



class EventList extends Component{

    constructor(props){
        super(props);
        this.state = {
            events: null,
            searchString: ""
        }
        this.state.events = getEvents();
    }



    onSearchInputChange = (event) =>{
        var temp = [];
        temp = getEvents();
        temp = temp.filter((current)=>{
            console.log(current.name);
            return current.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.setState({searchString: event.target.value, events: temp});
    }


    render(){
        const rows = this.state.events.map((event)=>{
            return (
                <TableRow key={event.id}>
                    <TableCell component="th" scope="row">{event.name}</TableCell>
                    <TableCell>{event.description}</TableCell>
                    <TableCell>
                        <a href="#edit">Editar</a> | <a href="#borrar">Borrar</a>
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
                                <TableCell>Descripcion</TableCell>
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

export default EventList;