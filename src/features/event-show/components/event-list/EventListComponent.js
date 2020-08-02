import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableContainer, Paper, TableHead, Table, TableBody, Grid, Container, TextField, IconButton, InputBase, SvgIcon, Fab, Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add'
import getEvents from '../../services/EventsService';
import UserService from '../../../user-register/services/user.service'
import { Link } from 'react-router-dom';



class EventList extends Component{

    constructor(props){
        super(props);
        this.state = {
            events: [],
            searchString: ""
        }

    }

    componentDidMount(){
        UserService.searchEvent(this.state.searchString).then((res)=>{
            const eventsList = res.data;
            this.setState({
                events: eventsList
            });
        });
    }



    onSearchInputChange = (event) =>{
        const value = event.target.value;
        UserService.searchEvent(value).then((res)=>{
            this.setState({searchString: value, events: res.data});
        });
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
                <Box display="flex" flex="1" flexDirection="row" justifyContent="space-between"> 
                    <Box>
                        <TextField label="Buscar" type="search" variant="outlined" component={Paper} onChange = {this.onSearchInputChange} id="searchInput"/>
                    </Box>
                    <Box>
                        <Link to="/createEvent">
                        <Fab color="primary" component={Paper}>
                            <Add></Add>
                        </Fab>
                        </Link>
                    </Box>
                </Box>
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