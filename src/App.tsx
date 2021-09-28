import React from "react";
import "./App.css";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./features/pages/welcome";
import Passwords from "./features/pages/passwords";

function App() {
  return (
    <div className='App'>
      <MemoryRouter>
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/passwords' component={Passwords} />
          <Redirect to='/' />
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
