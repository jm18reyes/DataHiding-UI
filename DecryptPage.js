import React, { Component } from 'react';
import { AppBar,Toolbar,Typography,TextField,Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';
import PictureCard from './PictureCard';
import Picture1 from './dataWallpaper.jpg';
import Picture2 from './codeGirl.jpg';

const useStyles = makeStyles((theme) => ({
    bar:{
        backgroundColor: '#222e42',
    },
    title:{
        fontFamily:"Orbitron",
        color: '#3ddbbe',
        fontSize:"30px"
    },
    bg:{
        backgroundColor:"#46484d",
        height:"100vh"
    }
}));

export default function DecryptPage() {
    const classes = useStyles();
    return(
        <div className={classes.bg}>
            <Paper elevation={20}>

            
            <Box style={{background: 'linear-gradient(45deg, #a81d59 30%, #9225ba 90%)', height:"11vh"}}>
            <AppBar className={classes.bar}>
                <Toolbar >
                    
                    <Typography variant="h5" className={classes.title}>
                            Data Hiding
                    </Typography>

                </Toolbar>
                
            </AppBar>
            </Box>
            
                

            </Paper>
            <PictureCard name="Picture 1" img={Picture1}></PictureCard>
            <PictureCard name="Picture 2" img={Picture2}></PictureCard>
            
            
        </div>
    );
}
