import React from 'react';
import Search from './search.jsx';
import PlayerProfile from './playerProfile.jsx';
import Select from './select.jsx';

class App extends React.Component {
  // In order to reference App component inside of another method
  // The constructor is code that is run when component is created
  constructor(props) {
    // Initialize React component
    super(props);
    // looks for method and binds it to App component so that this can equal App
    this.addPlayer = this.addPlayer.bind(this);
    this.addShots = this.addShots.bind(this);
    // getInitialState
    this.state = {};
  }

  addPlayer(playerObject) {
    // Update State with player data
    this.setState({ playerObject });
  }

  addShots(playerShots) {
    this.setState({ playerShots });
  }

  render() {
    return (
      <div>
        <Search addPlayer={this.addPlayer} addShots={this.addShots} />
        {this.state.playerObject && <PlayerProfile
          playerInfo={this.state.playerObject}
        />}
        {this.state.playerObject &&
        <Select
          playerInfo={this.state.playerObject}
          shotInfo={this.state.playerShots}
        />}
      </div>
    );
  }
}

export default App;
