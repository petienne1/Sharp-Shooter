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
    // looks for method and binds it to App component so that this can equal App
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPlayerData = this.loadPlayerData.bind(this);
    // getInitialState
    this.state = {
      playerData: {},
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchTerm);
    const playerObject = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`)
      .then((data) => {
        console.log(data);
        this.setState({ showPlayerProfile: true });
        this.setState({ playerData: playerObject });
        // return this.setState({
        //   returnedPlayerList: returnedPlayerList.data
        // })
      },
  );
  }

  loadPlayerData() {
    const playerObject = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`);
    this.setState({
      playerData: playerObject,
    });
  }

  render() {
    return (
      <div>
        <Search onSubmit={this.props.loadPlayerData} />
      </div>
    );
  }
}

export default App;
