import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './stylesheets/Stylesheets.scss';

import Router from './components/Router';
import Routes from './components/Routes';

const renderApp = (appRoutes) => {
  ReactDOM.render(
    <AppContainer>
      <Router routes={appRoutes} />
    </AppContainer>,
    document.querySelector('#main')
  );
};

renderApp(Routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Routes', () => {
    const newRoutes = require('./components/Routes').default;
    renderApp(newRoutes);
  });
}
