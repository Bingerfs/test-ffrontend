
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
