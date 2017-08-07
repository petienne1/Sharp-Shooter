import React from 'react';
import axios from 'axios';
import Search from './search.jsx';
// import PlayerProfile from './playerProfile.jsx';

class App extends React.Component {
  // In order to reference App component inside of another method
  // The constructor is code that is run when component is created
  // Initialize State
  constructor() {
    // creates the React component
    super();
    // looks for method and binds it to App component so that this can equal App
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchTerm);
    axios.get(`/stats/playerstats?player=${this.state.searchTerm}`)
      .then((data) => {
        console.log(data);
        this.setState({ showPlayerProfile: true });
        // return this.setState({
        //   returnedPlayerList: returnedPlayerList.data
        // })
      });
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
