import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/MainDashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Home/>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
