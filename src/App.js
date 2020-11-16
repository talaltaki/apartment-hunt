import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/MainDashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import LoginMain from './Components/LoginMain/LoginMain';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./Components/Login/firebase.config";
import HomeDetails from './Components/HomeDetails/HomeDetails';

firebase.initializeApp(firebaseConfig);


export const AllContext = createContext();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("user");

  return (
    <AllContext.Provider value={[loggedIn, setLoggedIn, name, setName]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/details">
            <HomeDetails />
          </Route>
          <Route path="/login">
            <LoginMain />
          </Route>
        </Switch>
      </BrowserRouter>
    </AllContext.Provider>
  );
}

export default App;
