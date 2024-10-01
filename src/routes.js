import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './components/Board/Board';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/board/:id" component={Board} />
      <Route path="/" exact component={Board} />
    </Switch>
  </Router>
);

export default Routes;
