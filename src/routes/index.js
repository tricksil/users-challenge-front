import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '~/pages/SignIn';

import Route from './Route';

import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Event from '~/pages/Event';

// import { Container } from './styles';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/events" component={Event} isPrivate />
    </Switch>
  );
}

export default Routes;
