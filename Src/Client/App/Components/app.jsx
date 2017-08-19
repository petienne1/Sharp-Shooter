import React from 'react';
import axios from 'axios';
import Search from './search.jsx';
import PlayerProfile from './playerProfile.jsx';

class App extends React.Component {
  // In order to reference App component inside of another method
  // The constructor is code that is run when component is created
  constructor(props) {
    // Initialize React component
    super(props);

    this.addPlayer = this.addPlayer.bind(this);
    // getInitialState
    this.state = {
      playerData: {},
    };
    // looks for method and binds it to App component so that this can equal App
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.loadPlayerData = this.loadPlayerData.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.searchTerm);
  //   const playerObject = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`)
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ showPlayerProfile: true });
  //       this.setState({ playerData: data });
  //       // return this.setState({
  //       //   returnedPlayerList: returnedPlayerList.data
  //       // })
  //     },
  //   );
  // }

  addPlayer(player) {
    // Make a Copy of playerData State
    let playerData = { ...this.state.playerData };
    // Add in New Player data
    playerData = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`);
    // Set state
    this.setState({ playerData });
  }

  // loadPlayerData() {
  //   const playerObject = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`);
  //   this.setState({
  //     playerData: playerObject,
  //   });
  // }

  render() {
    return (
      <div>
        <Search addPlayer={this.addPlayer} />
      </div>
    );
  }
}

export default App;
