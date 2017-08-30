import React from 'react';
import axios from 'axios';
import GameItem from './gameItem.jsx'

class YearItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loadGames = this.loadGames.bind(this);
  }

  loadGames() {
    axios.post('/stats/games', {
      personId: this.props.personId,
      Season: this.props.year.slice(0, 5) + this.props.year.slice(7),
    })
    .then((data) => {
      this.setState({ games: data });
    });
  }

  render() {
    return (
      <div>
        <li onClick={this.loadGames}>{this.props.year}</li>
        {this.state.games && this.state.games.data.map((game) => {
          return (
            <GameItem
              gameId={game[2]}
              personId={game[1]}
              date={game[3]}
              matchup={game[4]}
              season={this.props.year.slice(0, 5) + this.props.year.slice(7)}
            />);
        })}
      </div>
    );
  }
}


export default YearItem;
