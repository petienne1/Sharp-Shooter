import React from 'react';
import axios from 'axios';
import SweetScroll from 'sweet-scroll';
import PlayerProfile from './playerProfile.jsx';
import App from './playerProfile.jsx';


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchUrl: '',
      showPlayerProfile: false,
      playerData: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
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
    this.props.addPlayer(player);
  }




  // handleKeyUp(event) {
  //   if (event.key === 'Enter' && this.state.searchTerm !== '') {
  //   const searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
  //     this.setState({ searchUrl });
  //   }
  // }

  render() {
    return (
      <div className="header-container">
        <div className="header-info">
          <h1 className="app-name">Sharp Shooter</h1>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <input
              className="header-input"
              onChange={this.handleChange}
              type="search"
              placeholder="Search for a player..."
              value={this.state.searchTerm}
            />
            <ul className="list-inline intro-buttons">
              <li>
                <button
                  type="submit"
                  className="btn btn-default btn-lg"
                  onSubmit={this.loadPlayerData}
                >
                  <span className="button-name">Search</span>
                </button>

              </li>
              <li>
                <button className="btn btn-default btn-lg">
                  <span className="button-name">Advanced</span></button>
              </li>
              <li>
                <button className="btn btn-default btn-lg">
                  <span className="button-name">Compare</span></button>
              </li>
            </ul>
          </form>
        </div>
        <div className="player-profile">{this.state.showPlayerProfile ?
          <PlayerProfile /> : null}</div>
      </div>
    );
  }
}
