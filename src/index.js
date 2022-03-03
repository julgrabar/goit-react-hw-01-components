import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    bodyColor: '#eceff1',
  }
}

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);