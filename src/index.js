import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import StatsTracker from './components/StatsTracker/StatsTracker';
import './stylesheets/Stylesheets.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#main')
  );
};

render(StatsTracker);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/StatsTracker/StatsTracker', () => {
    render(StatsTracker)
  });
}
