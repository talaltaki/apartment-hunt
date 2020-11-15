import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/MainDashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home';

export const userContext = createContext();

function App() {
  const [signedUser, setSignedUser] = useState(userContext);
  return (
    <userContext.Provider value={[]}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
