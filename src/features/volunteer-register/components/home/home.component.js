import React, { Suspense, Component } from 'react';
import {  Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';

import VolunteerList from '../../../volunteer-show/components/volunteer-list/VolunteerListComponent';
import EventList from '../../../event-show/components/event-list/EventListComponent';
import Navbar from '../../../../shared/components/navbar/navbar.component';
import VolunteerDescription from '../../../volunteer-show/components/volunteer-description/VolunteerDescriptionComponent';
import VolunteerAddEvent from '../../../volunteer-show/components/volunteer-description/VolunteerAddEventComponent';
import VolunteerEventsList from '../../../volunteer-show/components/volunteer-description/VolunteerEventsComponent';

import CreateVolunteer from '../../../volunteer-register/components/create/createVolunteer.component';
import CreateEvent from '../../../event-register/components/event-create/CreateEventComponent';
import PrivateRoute from '../../../../shared/components/private-route.component';


export default class Home extends Component {
 
  render() {
    return (
      <Router>
        <Navbar></Navbar>
      {/* {isLogin ? ( ): (<Login></Login>   )} */}
      <Switch>
        <Suspense fallback={<h1>Cargando...</h1>}>
          <PrivateRoute path="/createVolunteer" component={CreateVolunteer} />
          <PrivateRoute path="/createEvent" component={CreateEvent} />
          <PrivateRoute path="/volunteers" component={VolunteerList} />
          <PrivateRoute path= "/events" component={EventList} />
          <PrivateRoute path= "/volunteer/:id" component={VolunteerDescription} />
          <PrivateRoute path= "/volunteer/addEvent/:id" component={VolunteerAddEvent} />
          <PrivateRoute path= "/volunteer/:id/events" component={VolunteerEventsList} />
        </Suspense>
      </Switch>
    </Router>    );
  }
}
