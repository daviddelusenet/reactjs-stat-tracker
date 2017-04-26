import React from 'react';
import './StatTracker.scss';

class StatTracker extends React.Component {

  constructor() {
    super();
    console.info("Init Stat Tracker");

    // Bind functions

    // Set initial state
  }

  componentWillMount() {

    //this.ref = base.syncState('/', {
    //  context: this,
    //  state: 'todos',
    //  asArray: true,
    //  then() {
    //    this.setState({
    //      loading: false
    //    });
    //  }
    //});

  }

  componentWillUnmount() {
    //base.removeBinding(this.ref);
  }


  render() {
    return(
      <div styleName="StatTracker">
        <p>hoi</p>
      </div>
    );
  }

}

export default StatTracker;
