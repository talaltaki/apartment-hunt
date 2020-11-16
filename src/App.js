import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/MainDashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import LoginMain from './Components/LoginMain/LoginMain';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <LoginMain />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
