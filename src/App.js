import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/MainDashboard/Dashboard/Dashboard';

export const AllContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AllContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </AllContext.Provider>

  );
}

export default App;
