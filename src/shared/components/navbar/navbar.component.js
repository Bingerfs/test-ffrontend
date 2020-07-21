import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (

            <AppBar style={{
                marginTop: "20px"
            }} >
                <Toolbar >
                    <Avatar
                        style={{
                            position: "absolute",
                            width: "100px",
                            height: "100px"
                        }}
                        src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C270b08139cdd83c1e9eaab009b230cf9/projects/Mb1161875685a72a3bdbeaaa3b25a1ce41558579849255/images/thumbnails/M69dddebf849aa2e74927eff2f48d3c971584242974440"
                    />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <MenuItem>
                            <p>INICIO</p>
                        </MenuItem>
                        <MenuItem>
                            <p>VOLUNTARIO</p>
                        </MenuItem>
                        <MenuItem>
                            <p>ACTIVIDADES</p>
                        </MenuItem>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                        <MenuItem>
                            <p>CERRAR SESIÓN</p>
                        </MenuItem>
                    </Grid>
                </Toolbar>
            </AppBar>

        );
    }
}

export default Navbar;



