import React from 'react';
import update from 'immutability-helper';
import base from './../../base';

import './StatsTracker.scss';

import GameForm from '../GameForm/GameForm';
import StatsOverview from '../StatsOverview/StatsOverview';

class StatsTracker extends React.Component {

  constructor() {
    super();

    // Bind functions
    this.addGame.bind(this);

    this.calculatePointStatistics.bind(this);
    this.calculateFreeThrowStatistics.bind(this);
    this.calculateFoulStatistics.bind(this);

    // Set initial state
    this.state = {
      games: [],
      individual: [],
      team: []
    };
  }

  componentWillMount() {
    this.gamesRef = base.syncState('games', {
      context: this,
      state: 'games',
      asArray: true,
      then() {
        this.calculatePointStatistics();
        this.calculateFreeThrowStatistics();
        this.calculateFoulStatistics();
      }
    });

    this.individualRef = base.syncState('individual', {
      context: this,
      state: 'individual',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.gamesRef);
    base.removeBinding(this.individualRef);
  }

  addGame(data) {
    console.log(data);
  }

  // Functions to calculate individual statistics
  calculatePointStatistics() {
    // set variables used in function
    let totalPoints = 0;
    let index = 0;

    this.setState((prevState, props) => {
      // loop over all the games and save all of the points in the corresponding variable
      for (let game of this.state.games) {
        index++;
        totalPoints += game.points;
      }

      // return a new updated state
      return update(prevState, {
        individual: {
          $push: [
            {description: 'total points', value: totalPoints},
            {description: 'average points', value: totalPoints / index}
          ]
        }
      });
    });
  }

  calculateFreeThrowStatistics() {
    // set variables used in function
    let totalAttempts = 0;
    let totalMakes = 0;
    let index = 0;

    this.setState((prevState, props) => {
      // loop over all the games and save all the fta/ftm's in the corresponding variables
      for (let game of this.state.games) {
        index++;
        totalAttempts += game.fta;
        totalMakes += game.ftm;
      }

      // return a new updated state
      return update(prevState, {
        individual: {
          $push: [
            {description: 'total free throws made', value: totalMakes},
            {description: 'total free throws attempted', value: totalAttempts},
            {description: 'free throw percentage', value: ((100 / totalAttempts) * totalMakes).toFixed(2)}
          ]
        }
      });
    });
  }

  calculateFoulStatistics() {
    // set variables used in function
    let totalFouls = 0;
    let index = 0;

    this.setState((prevState, props) => {
      // loop over all the games and save all the fouls in the corresponding variable
      for (let game of this.state.games) {
        index++;
        totalFouls += game.fouls;
      }

      // return a new updated state
      return update(prevState, {
        individual: {
          $push: [
            {description: 'total fouls', value: totalFouls},
            {description: 'average fouls', value: totalFouls / index}
          ]
        }
      });
    });
  }

  render() {
    return(
      <div styleName="StatsTracker">
        <GameForm addGame={this.addGame} />
        <StatsOverview games={this.state.games} individual={this.state.individual} />
      </div>
    );
  }

}

export default StatsTracker;
