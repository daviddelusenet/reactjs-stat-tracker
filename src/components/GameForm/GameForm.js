import React from 'react';
import './GameForm.scss';

class GameForm extends React.Component {

  constructor() {
    super();

    // Bind functions
  }

  componentWillMount() {}

  componentWillUnmount() {}

  handleSubmit(e) {
    e.preventDefault();

    const formData = {};

    formData.season = this.season.value;
    formData.date = this.season.date;
    formData.homeTeam = this.season.homeTeam;
    formData.awayTeam = this.season.awayTeam;
    formData.homeTeamScore = this.season.homeTeamScore;
    formData.awayTeamScore = this.season.awayTeamScore;
    formData.freeThrowsAttempted = this.season.freeThrowsAttempted;
    formData.freeThrowsMade = this.season.freeThrowsMade;
    formData.twoPointersMade = this.season.twoPointersMade;
    formData.threePointersMade = this.season.threePointersMade;
    formData.totalPoints = this.season.totalPoints;
    formData.foulsCommitted = this.season.foulsCommitted;

    this.props.addGame(formData);
  }

  render() {
    return(
      <form styleName="GameForm" ref={(form) => this.form = form} onSubmit={(e) => this.handleSubmit(e)}>
        <select styleName="GameForm__select" ref={(season) => this.season = season} defaultValue="placeholder">
          <option value="placeholder" disabled>Select season</option>
          <option value="2016/2017">2016/2017</option>
          <option value="2017/2018">2017/2018</option>
        </select>
        <input styleName="GameForm__input" type="text" ref={(date) => this.date = date} placeholder="Date" />
        <input styleName="GameForm__input" type="text" ref={(homeTeam) => this.homeTeam = homeTeam} placeholder="Home team" />
        <input styleName="GameForm__input" type="text" ref={(awayTeam) => this.awayTeam = awayTeam} placeholder="Away team" />
        <input styleName="GameForm__input" type="text" ref={(homeTeamScore) => this.homeTeamScore = homeTeamScore} placeholder="Home team score" />
        <input styleName="GameForm__input" type="text" ref={(awayTeamScore) => this.awayTeamScore = awayTeamScore} placeholder="Away team score" />
        <input styleName="GameForm__input" type="text" ref={(freeThrowsAttempted) => this.freeThrowsAttempted = freeThrowsAttempted} placeholder="Free throws attempted" />
        <input styleName="GameForm__input" type="text" ref={(freeThrowsMade) => this.freeThrowsMade = freeThrowsMade} placeholder="Free throws made" />
        <input styleName="GameForm__input" type="text" ref={(twoPointersMade) => this.twoPointersMade = twoPointersMade} placeholder="Two pointers made" />
        <input styleName="GameForm__input" type="text" ref={(threePointersMade) => this.threePointersMade = threePointersMade} placeholder="Three pointers made" />
        <input styleName="GameForm__input" type="text" ref={(totalPoints) => this.totalPoints = totalPoints} placeholder="Total points" />
        <input styleName="GameForm__input" type="text" ref={(foulsCommitted) => this.foulsCommitted = foulsCommitted} placeholder="Fouls committed" />
        <input styleName="GameForm__submit" type="submit" value="Add game" />
      </form>
    );
  }

}

export default GameForm;
