import React from 'react';
import './StatsOverview.scss';

class StatsOverview extends React.Component {

  constructor(props) {
    super(props);

    // Bind functions
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <div styleName="StatsOverview">
        <div styleName="StatsOverview__container">
          <p styleName="StatsOverview__stat">{ this.props.gamesPlayed }</p>
          <p styleName="StatsOverview__stat-description">games played</p>
        </div>

        {this.props.individual.map((stat, key) => {
          return(
            <div styleName="StatsOverview__container" key={key}>
              <p styleName="StatsOverview__stat">{stat['value']}</p>
              <p styleName="StatsOverview__stat-description">{stat['description']}</p>
            </div>
          )
        })}
      </div>
    );
  }

}

export default StatsOverview;
