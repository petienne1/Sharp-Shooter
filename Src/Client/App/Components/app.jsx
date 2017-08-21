import React from 'react';
import Search from './search.jsx';
import PlayerProfile from './playerProfile.jsx';

class App extends React.Component {
  // In order to reference App component inside of another method
  // The constructor is code that is run when component is created
  constructor(props) {
    // Initialize React component
    super(props);
    // looks for method and binds it to App component so that this can equal App
    this.addPlayer = this.addPlayer.bind(this);
    // getInitialState
    this.state = {};
  }

  addPlayer(playerObject) {
    // Update State with player data
    this.setState({ playerObject });
  }

  render() {
    return (
      <div>
        <Search addPlayer={this.addPlayer} />
        {this.state.playerObject && <PlayerProfile
          playerInfo={this.state.playerObject}
          bananas="bananas"
        />}
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
