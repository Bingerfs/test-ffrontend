
import logo from './logo.svg';
import './App.css';
import VolunteerList from './features/volunteer-show/components/volunteer-list/VolunteerListComponent'
import EventList from './features/event-show/components/event-list/EventListComponent'
import React, { Component } from "react";
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';
import AppRoutes from './app.routes';
import VolunteerDescription from './features/volunteer-show/components/volunteer-description/VolunteerDescriptionComponent';
import VolunteerAddEvent from './features/volunteer-show/components/volunteer-description/VolunteerAddEventComponent';
import VolunteerEventsList from './features/volunteer-show/components/volunteer-description/VolunteerEventsComponent';
import CreateEvent from './features/event-register/components/event-create/CreateEventComponent';
import CreateVolunteer from './features/volunteer-register/components/create/createVolunteer.component';
import Login from './features/user-register/components/login/login.component'

function App() {
  return (
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
   </StylesProvider>
  );
}

export default App; 
