import React, { Suspense } from 'react';
import {  Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './features/user-register/components/login/login.component'

import Home from './features/volunteer-register/components/home/home.component'
import VolunteerList from './features/volunteer-show/components/volunteer-list/VolunteerListComponent';
import EventList from './features/event-show/components/event-list/EventListComponent';
import Navbar from './shared/components/navbar/navbar.component';
import VolunteerDescription from './features/volunteer-show/components/volunteer-description/VolunteerDescriptionComponent';

const AppRoutes = () => (
  <Router>
    <Navbar></Navbar>
    <Switch>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Route exact strict path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/volunteers" component={VolunteerList} />
        <Route exact path= "/events" component={EventList} />
        <Route exact path= "/volunteer/:id" component={VolunteerDescription} />
      </Suspense>
    </Switch>
  </Router>
);

export default AppRoutes;
