import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './util/theme';
import AuthProvider from './providers/AuthContext';
import ScrollToTop from './features/general/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <ThemeProvider theme={theme}>
  <Router>
  <Provider store={Store}>
    <ScrollToTop />
    <App />
  </Provider>
  </Router>
  </ThemeProvider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
