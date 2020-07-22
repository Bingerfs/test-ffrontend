import React from 'react';
import logo from './logo.svg';
import './App.css';
import VolunteerList from './features/volunteer-show/components/volunteer-list/VolunteerListComponent'
import EventList from './features/event-show/components/event-list/EventListComponent'

function App() {
  return (
    <div>
      <EventList></EventList>
    </div>
  );
}

export default App;
