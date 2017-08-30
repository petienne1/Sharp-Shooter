import React from 'react';
import axios from 'axios';

class GameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loadShots = this.loadShots.bind(this);
  }

  loadShots() {
    axios.post('/stats/shots', {
      PlayerID: this.props.personId,
      gameID: this.props.gameId,
      Season: this.props.season
    })
  }

  render() {
    return (
      <li onClick={this.loadShots}> {this.props.date} - {this.props.matchup}</li>
    );
  }
}


export default GameItem;