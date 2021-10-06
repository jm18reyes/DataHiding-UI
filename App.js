import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//pages

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import EncryptPage from './pages/EncryptPage';
import DecryptPage from './pages/DecryptPage';
import Homepage from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/encrypt" component={EncryptPage}/>
        <Route exact path="/decrypt" component={DecryptPage}/>
      </Switch>

    </Router>
  );
}


export default App;
