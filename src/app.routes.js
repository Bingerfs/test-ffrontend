import React, { Suspense } from 'react';
import {  Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './features/user-register/components/login/login.component'

import Home from './features/volunteer-register/components/home/home.component'
import VolunteerList from './features/volunteer-show/components/volunteer-list/VolunteerListComponent';
import EventList from './features/event-show/components/event-list/EventListComponent';
import Navbar from './shared/components/navbar/navbar.component';
import VolunteerDescription from './features/volunteer-show/components/volunteer-description/VolunteerDescriptionComponent';
import VolunteerAddEvent from './features/volunteer-show/components/volunteer-description/VolunteerAddEventComponent';
import VolunteerEventsList from './features/volunteer-show/components/volunteer-description/VolunteerEventsComponent';

import CreateVolunteer from './features/volunteer-register/components/create/createVolunteer.component'
import CreateEvent from './features/event-register/components/event-create/CreateEventComponent';

var currentLocation = window.location.pathname;
console.log(currentLocation);
var isLogin = currentLocation == '/login';

const AppRoutes = () => (
  <>
  
  <Router>
    {isLogin ? (<div></div> ): (<Navbar></Navbar>   )}
   <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Switch>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/createVolunteer" component={CreateVolunteer} />
        <Route exact path= "/createEvent" component={CreateEvent} />
        <Route exact path="/volunteers" component={VolunteerList} />
        <Route exact path= "/events" component={EventList} />
        <Route exact path= "/volunteer/:id" component={VolunteerDescription} />
        <Route exact path= "/volunteer/addEvent/:id" component={VolunteerAddEvent} />
        <Route exact path= "/volunteer/:id/events" component={VolunteerEventsList} />
        <Route exact path='/edit-volunteer/:id' component={ CreateVolunteer } />
        <Route exact path='/edit-event/:id' component={ CreateEvent } />
      </Suspense>
    </Switch>
  </Router>
  </>
);

export default AppRoutes;
