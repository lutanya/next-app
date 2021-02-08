import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
    <Navigation Router={BrowserRouter} store={store} />,
  document.getElementById('root'),
);