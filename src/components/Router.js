import React from 'react';
import { BrowserRouter } from 'react-router-dom';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {this.props.routes()}
      </BrowserRouter>
    );
  }
}

export default Router;
