import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

// import components
import StatsTracker from './StatsTracker/StatsTracker';
import GameDetail from './GameDetail/GameDetail';

const GameDetailPage = (props) => {
  return(
    <GameDetail test="test" {...props} />
  );
};

const Routes = () => {
  return(
    <div>
      <ul>
        <li><Link to="/">StatsTracker</Link></li>
        <li><Link to="/game/sick">Game</Link></li>
      </ul>

      <Route exact path="/" component={StatsTracker}/>
      <Route path="/game/:id" render={GameDetailPage} />
    </div>
  );
};

export default Routes;
