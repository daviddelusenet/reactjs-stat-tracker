import React from 'react';

class GameDetail extends React.Component {

  render() {
    console.log(this.props);
    return(
      <p>This is a game {this.props.test}</p>
    );
  }

}

export default GameDetail;
