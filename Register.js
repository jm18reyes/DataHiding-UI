import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Background from './dataWallpaper.jpg'
import { grey } from '@material-ui/core/colors';
import zIndex from '@material-ui/core/styles/zIndex';




const useStyles = makeStyles((theme) => ({
  paperStyle:{
    padding: '30px 20px',
    width: 500,
    margin: "20px auto",
    backgroundColor: '#222e42',
    color:"white",
    justifyContent:"center"

  },
  paperStyle2:{
    background: 'linear-gradient(45deg, #a81d59 30%, #9225ba 90%)',
    padding: '3px 3px',
    width: 550,
    height: 520,
    margin: "auto auto",
    color:"white",
    justifyContent:"center"

  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  headerStyle:{
    color: '#3ddbbe',
    margin:2,
  },
  inputField:{
    backgroundColor: "white",
    margin: "8px 2px",
  },
  register:{
    background: 'linear-gradient(45deg, #a81d59 30%, #9225ba 90%)',
    margin:"20px 0px", padding:"10px",
    color:"white",
    fontWeight:"bold"
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <Paper className={classes.paperStyle2}>
      <Paper elevation={20} className={classes.paperStyle}>
        <Grid align="center">
          <h2 className={classes.headerStyle}>Sign Up</h2>
          <Typography variant="h7">Please fill this form.</Typography>
        </Grid>
        <form>
          <TextField fullWidth variant="outlined" placeholder="First Name" className={classes.inputField}></TextField>
          <TextField fullWidth variant="outlined" placeholder="Last Name" className={classes.inputField}></TextField>
          <TextField fullWidth variant="outlined" placeholder="Username" className={classes.inputField}></TextField>
          <TextField fullWidth variant="outlined" placeholder="Password" className={classes.inputField}></TextField>
          <Button fullWidth type="submit" variant="contained" className={classes.register}>Register</Button>
        </form>
        
      </Paper>
      </Paper>
    </div>
  );
}