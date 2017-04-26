import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import StatTracker from './components/StatTracker/StatTracker';
import './stylesheets/Stylesheets.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#main')
  );
};

render(StatTracker);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/StatTracker/StatTracker', () => {
    render(StatTracker)
  });
}
