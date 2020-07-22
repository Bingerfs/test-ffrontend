import React, { Suspense } from 'react';
import {  Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './features/user-register/components/login/login.component'

import Home from './features/volunteer-register/components/home/home.component'

import CreateVolunteer from './features/volunteer-register/components/create/createVolunteer.component'

const AppRoutes = () => (
  <Router>
    <Switch>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Route exact strict path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/createVolunteer" component={CreateVolunteer} />

      </Suspense>
    </Switch>
  </Router>
);

export default AppRoutes;
