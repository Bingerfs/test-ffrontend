import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableContainer, Paper, TableHead, Table, TableBody, Grid, Container, TextField, IconButton, InputBase, SvgIcon, Fab, Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add'
import UserService from '../../../user-register/services/user.service'



class VolunteerEventsList extends Component{

    constructor(props){
        super(props);
        this.state = {
            events: [],
            searchString: ""
        }

    }

    componentDidMount(){
        UserService.searchVolunteerEvents(this.props.match.params.id, this.state.searchString).then((res)=>{
            const eventsList = res.data;
            this.setState({
                events: eventsList
            });
        });
    }



    onSearchInputChange = (event) =>{
        const value = event.target.value;
        UserService.searchVolunteerEvents(this.props.match.params.id, value).then((res)=>{
            this.setState({searchString: value, events: res.data});
        });
    }


    render(){
        const rows = this.state.events.map((volunteerEvent)=>{
            return (
                <TableRow key={volunteerEvent.id}>
                    <TableCell component="th" scope="row">{volunteerEvent.event.name}</TableCell>
                    <TableCell>{volunteerEvent.event.description}</TableCell>
                    <TableCell>{volunteerEvent.hours}</TableCell>
                    <TableCell>{volunteerEvent.startingDate}</TableCell>
                    <TableCell>{volunteerEvent.endingDate}</TableCell>
                </TableRow>
            );
        });

        return(
            <Container>
                <Box display="flex" flex="1" flexDirection="row" justifyContent="space-between"> 
                    <Box>
                        <TextField label="Buscar" type="search" variant="outlined" component={Paper} onChange = {this.onSearchInputChange} id="searchInput"/>
                    </Box>
                    
                </Box>
                <br></br>
                <br></br>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Actividad</TableCell>
                                <TableCell>Descripcion</TableCell>
                                <TableCell>Horas</TableCell>
                                <TableCell>Fecha inicio</TableCell>
                                <TableCell>Fecha fin</TableCell>
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

export default VolunteerEventsList;