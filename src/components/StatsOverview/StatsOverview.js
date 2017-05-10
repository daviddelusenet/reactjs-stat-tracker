import React from 'react';
import './StatsOverview.scss';

class StatsOverview extends React.Component {

  constructor() {
    super();

    // Bind functions
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <div styleName="StatsOverview">
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
