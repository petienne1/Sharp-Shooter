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
    this.state = {};
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

  addPlayer(playerObject) {
    // Make a Copy of playerData State
    // console.log('playerObject in App: ', playerObject.data)
    // let playerData = { ...this.state.playerData };
    // Add in New Player data
    // playerData = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`);
    // Set state
    // console.log(playerData);
    this.setState({ playerObject });
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
        {this.state.playerObject && <PlayerProfile playerInfo={this.state.playerObject} bananas='bananas' />}
      </div>
    );
  }
}

export default App;

// const callback = (response) => {
//   console.log(response)
// }
//
// http.get(url, callback)
// console.log('http is done... kinda')
//
// const promise = axios.get(url)
// promise.then(callback)
