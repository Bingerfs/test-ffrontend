import React, { Component } from "react";
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';
import AppRoutes from './app.routes';

 
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
