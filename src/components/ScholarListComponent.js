import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableContainer, Paper, TableHead, Table, TableBody, Grid, Container, TextField, IconButton, InputBase, SvgIcon } from '@material-ui/core';
import Search from '@material-ui/icons/Search'
const scholars = [
    {
        id: 0,
        name: "John",
        age: "34",
        scholarship: "Newyork",
        hours: "10"
    },
    {
        id: 1,
        name: "Jim",
        age: "34",
        scholarship: "London",
        hours: "30"
    },
    {
        id: 2,
        name: "Joe",
        age: "34",
        scholarship: "Newyork",
        hours: "5"
    }
]


class ScholarList extends Component{
    constructor(props){
        super(props);
    }

    


    render(){
        const rows = scholars.map((scholar)=>{
            return (
                <TableRow key={scholar.id}>
                    <TableCell component="th" scope="row">{scholar.name}</TableCell>
                    <TableCell>{scholar.age}</TableCell>
                    <TableCell>{scholar.scholarship}</TableCell>
                    <TableCell>{scholar.hours}</TableCell>
                    <TableCell>
                        <a href="#edit">Editar</a> | <a href="#borrar">Borrar</a> | <a href="#view">Ver mas</a>
                    </TableCell>
                </TableRow>
            );
        });

        return(
            <Container>
                <Paper>
                <InputBase placeholder="Buscar"></InputBase>
                <IconButton>
                    <Search></Search>
                </IconButton>
                <TextField label="Outlined" variant="outlined" />
                </Paper>
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

export default ScholarList;