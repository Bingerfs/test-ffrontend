import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableContainer, Paper, TableHead, Table, TableBody, Grid, Container, TextField, IconButton, InputBase, SvgIcon, Fab, Box } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { parse, formatDistanceToNowStrict } from 'date-fns';
import { es } from 'date-fns/locale';
import UserService from '../../../user-register/services/user.service';
import { Link } from 'react-router-dom';



class VolunteerList extends Component{

    constructor(props){
        super(props);
        this.state = {
            volunteers: [],
            searchString: ""
        }
    }

    componentDidMount(){
        UserService.searchVolunteer(this.state.searchString).then((res)=>{
            const volunteersList = res.data;
            this.setState({volunteers: volunteersList});
            
        });
    }



    onSearchInputChange = (event) =>{
        const value = event.target.value;
        UserService.searchVolunteer(value).then((res)=>{
            this.setState({searchString: value, volunteers: res.data});
        });
    }

    onDeleteButtonClick = (id) => {
        UserService.deleteVolunteerById(id).then(res => {
            let updatedList = this.state.volunteers;
            updatedList = updatedList.filter(volunteer => volunteer.id !== id);
            this.setState({ volunteers: updatedList });
        });
    }


    render(){
        const rows = this.state.volunteers.map((volunteer)=>{
            const birthdayDate = parse(volunteer.birthday, 'dd/MM/yyyy', new Date());
            return (
                <TableRow key={volunteer.id}>
                    <TableCell component="th" scope="row">{volunteer.name} {volunteer.lastname}</TableCell>
                    <TableCell>{ formatDistanceToNowStrict(birthdayDate, { locale: es }) }</TableCell>
                    <TableCell>{volunteer.scholarship}</TableCell>
                    <TableCell>{volunteer.hours}</TableCell>
                    <TableCell>
                        <a href={`/edit-volunteer/${volunteer.id}`}>Editar</a> | <a onClick={ () => this.onDeleteButtonClick(volunteer.id) } href="#delete">Borrar</a> | <a href={"/volunteer/"+volunteer.id}>Ver mas</a>
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
                        <Link to="/createVolunteer">
                        <Fab color="primary" component={Paper}>
                            <Add></Add>
                        </Fab>
                        </Link>
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