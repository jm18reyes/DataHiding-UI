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
import { makeStyles } from '@material-ui/core/styles';
import Background from './sander.jpg'
import { grey } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor:theme.palette.grey[900],
  },
  title:{
    fontFamily:"Orbitron",
    color: '#3ddbbe',
    fontSize: "50px",
    paddingBottom: "20px",
    

  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  sheet: {
    backgroundColor: '#222e42',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px",
    background: 'linear-gradient(45deg, #a81d59 30%, #9225ba 90%)',
    color:"white"
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} className={classes.sheet}  square>
        <div className={classes.paper}>
          <br>
          </br>
          <br></br>
          <Typography className={classes.title}>
            Data Hiding App
          </Typography>
          <Typography variant="h5" style={{color:"white"}}>
            Sign-in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              placeholder="Username"
              style={{backgroundColor: "white"}}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{backgroundColor: "white"}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}

            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Register Here!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}