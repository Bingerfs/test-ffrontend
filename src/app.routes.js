import React, { Suspense } from 'react';
import {  Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './features/user-register/components/login/login.component'


const AppRoutes = () => (
  <Router>
    <Switch>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Route exact strict path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />

      </Suspense>
    </Switch>
  </Router>
);

export default AppRoutes;
