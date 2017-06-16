import React from 'react';
import './GameOverview.scss';

class GameOverview extends React.Component {

  render() {
    return(
      <div styleName="GameOverview">
        <table styleName="GameOverview__table">
          <thead styleName="GameOverview__thead">
            <tr styleName="GameOverview__table-row">
              <th styleName="GameOverview__header-cell">Date</th>
              <th styleName="GameOverview__header-cell">Home</th>
              <th styleName="GameOverview__header-cell">Away</th>
              <th styleName="GameOverview__header-cell">Home Score</th>
              <th styleName="GameOverview__header-cell">Away Score</th>
              <th styleName="GameOverview__header-cell">FTA</th>
              <th styleName="GameOverview__header-cell">FTM</th>
              <th styleName="GameOverview__header-cell">2PTM</th>
              <th styleName="GameOverview__header-cell">3PTM</th>
              <th styleName="GameOverview__header-cell">TP</th>
              <th styleName="GameOverview__header-cell">F</th>
            </tr>
          </thead>
          <tbody styleName="GameOverview__tbody">
            {this.props.games.map((game, key) => {
              return(
                <tr styleName="GameOverview__table-row" key={key}>
                  <td styleName="GameOverview__standard-cell">{game['date']}</td>
                  <td styleName="GameOverview__standard-cell">{game['homeTeam']}</td>
                  <td styleName="GameOverview__standard-cell">{game['awayTeam']}</td>
                  <td styleName="GameOverview__standard-cell">{game['homeTeamScore']}</td>
                  <td styleName="GameOverview__standard-cell">{game['awayTeamScore']}</td>
                  <td styleName="GameOverview__standard-cell">{game['freeThrowsAttempted']}</td>
                  <td styleName="GameOverview__standard-cell">{game['freeThrowsMade']}</td>
                  <td styleName="GameOverview__standard-cell">{game['twoPointersMade']}</td>
                  <td styleName="GameOverview__standard-cell">{game['threePointersMade']}</td>
                  <td styleName="GameOverview__standard-cell">{game['totalPoints']}</td>
                  <td styleName="GameOverview__standard-cell">{game['foulsCommitted']}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default GameOverview;
