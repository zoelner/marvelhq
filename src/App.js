import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import history from './services/history';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}
