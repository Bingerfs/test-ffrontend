import React, { Component } from 'react';
import { Modal, Button, Box, Paper, Card, Container, CardMedia, Typography, CardActions } from '@material-ui/core';
import ButtonA from '../../../../shared/components/form/button/button'
import { useParams } from 'react-router-dom';
import userService from '../../../user-register/services/user.service';

class VolunteerDescription extends Component{

    constructor(props){
        super(props);
        this.state={
            volunteer: {},
            open: false
        }
    }

    componentDidMount(){
        let {id} = this.props.match.params;
        console.log(id);
        userService.searchVolunteerById(id).then((res)=>{
            const volunteerData= res.data;
            this.setState({volunteer: volunteerData});
            console.log(this.state.volunteer);
        });
    }

   

    render(){
        return(
            <Container style={{
                width: "50%"
            }}>
                <Card>
                    <Box display="flex" flexDirection="row">
                        <Container style={{
                            display: "flex",
                            flex: 1   
                        }} >
                        <Box display="flex" flex="1" flexDirection="column">
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.state.volunteer.name} {this.state.volunteer.lastname}
                            </Typography>
                            <Typography variant="body2" color ="textSecondary">
                                Fecha de nacimiento: {this.state.volunteer.birthday}
                            </Typography>
                            <Typography variant="body2" color ="textSecondary">
                                CI: {this.state.volunteer.ci}
                            </Typography>
                            <Typography variant="body2" color ="textSecondary">
                                Celular: {this.state.volunteer.phoneNumber}
                            </Typography>
                            <Typography variant="body2" color ="textSecondary">
                                Beca: {this.state.volunteer.scholarship}
                            </Typography>
                            <Typography variant="body2" color ="textSecondary">
                                Descripcion: {this.state.volunteer.description}
                            </Typography>
                        </Box>
                        </Container>
                        <Box display="flex" flex="1" flexDirection="column">
                            <Box display="flex" flex="1" justifyContent="center">
                                <img src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png" width="70%"></img>
                            </Box>
                            <Box display="flex" flex="3" flexDirection="column">
                                <Typography variant="body2" color ="textSecondary">ACTIVIDADES:</Typography>
                                <CardActions>
                                    <ButtonA content="Agregar"></ButtonA>
                                    <ButtonA content="Ver"></ButtonA>
                                </CardActions>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Container>
        );
    }


}

export default VolunteerDescription;