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
    this.addSeasons = this.addSeasons.bind(this);
    // getInitialState
    this.state = {};
  }

  addPlayer(playerObject) {
    console.log('playerObject in addPlayer:', playerObject)
    // Update State with player data
    this.setState({ playerObject });
    const years = [];
    const fromYear = playerObject.commonPlayerInfo[0]['fromYear'];
    const toYear = playerObject.commonPlayerInfo[0]['toYear'] - 1;
    for (var i = fromYear; i <= toYear; i++) {
      years.push(i + '-' + (i + 1))
      if (i === toYear) {
        this.setState({ years });
      }
    }
  }

  addShots(playerShots) {
    this.setState({ playerShots });
  }

  addSeasons(seasons) {
    this.setState({ seasons })
  }
  
  render() {
    return (
      <div>
        <Search addPlayer={this.addPlayer} addShots={this.addShots} addSeasons={this.addSeasons}/>
        {this.state.playerShots && <PlayerProfile
          playerInfo={this.state.playerObject}
          shotInfo={this.state.playerShots}
        />}
        {this.state.playerShots && this.state.seasons &&
          <Select playerInfo={this.state.playerObject} shotInfo={this.state.playerShots} seasons={this.state.seasons} personId={this.state.playerObject.commonPlayerInfo[0].personId} />}
      </div>
    );
  }
}

export default App;
