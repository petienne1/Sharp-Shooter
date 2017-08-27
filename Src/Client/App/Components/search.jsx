import React from 'react';
import axios from 'axios';
import SweetScroll from 'sweet-scroll';
import Scroll from 'react-scroll';
import PlayerProfile from './playerProfile.jsx';
import App from './playerProfile.jsx';
import Select from './select.jsx';


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchUrl: '',
      showPlayerProfile: false,
      showSelect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.images = ['../../Style/images/shooters/allen.jpg', '../../Style/images/shooters/birdshot.jpg', '../../Style/images/shooters/jordanfinalshot.jpg', '../../Style/images/shooters/curry.jpg', '../../Style/images/shooters/durant.jpg'];
    this.randomImg = this.images[Math.floor(Math.random() * this.images.length)];
    this.divStyle = { backgroundImage: 'url(' + this.randomImg + ')' };
    this.findSeasons = this.findSeasons.bind(this);
    this.sweetScroll = this.sweetScroll.bind(this);
  }

  findSeasons(start, end) {
      const arr = [];
      for (var i = start; i < end; i++) {
        arr.push(i + '-' + (i+1))
      }
      this.props.addSeasons(arr)
    }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchTerm);
    const playerObject = axios.get(`/stats/playerstats?player=${this.state.searchTerm}`);
    const playerShots = axios.get(`/stats/shots?player=${this.state.searchTerm}`);
    playerObject.then((response) => {
      console.log('response in Player Object is: ', response)
      this.props.addPlayer(response.data);
      this.findSeasons(response.data.commonPlayerInfo[0].fromYear, response.data.commonPlayerInfo[0].toYear)
      // axios.post('/stats/seasons', {
      //   ID: response.data.commonPlayerInfo[0].personId,
      // })
      // .then((data) => {
      //   console.log('hello?!!')
      //   // console.log('data in Seasons is:', data)
      //   const seasons = data.data.slice().map(function(season) {
      //     return season.slice(0, 4)
      //   })
      //   console.log(seasons)
      //   this.props.addSeasons(seasons);
      // })
    })
  playerShots.then((response) => {
      this.props.addShots(response.data);
    })
  .then((res) => {
    this.setState({searchTerm: ''});
  })
}

  // sweetScroll() {
  //   console.log('scrolling down');
  //   const height = this.props.windowHeight - 62;
  //   console.log([0, this.props.windowHeight - 62]);
  //   sweetScroll.to(height, 0);
  // }
  componentDidMount() {
    this.sweetScroll = new SweetScroll();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.showPlayerProfile) {
      this.sweetScroll.toElement(document.getElementById('player-profile'));
    }
  }

  // handleKeyUp(event) {
  //   if (event.key === 'Enter' && this.state.searchTerm !== '') {
  //   const searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
  //     this.setState({ searchUrl });
  //   }
  // }

  render() {
    return (
      <div className="main-container" style={this.divStyle}>
        <div className="input-wrapper">
          {/* <div className="header-info"> */}
          <h1 className="app-name">Sharp Shooter</h1>
          <form
            className="form-group"
            onSubmit={this.handleSubmit}
          >
            <input
              className="input-field"
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
                  onSubmit={this.loadPlayerData && this.sweetScroll}
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
          {/* </div> */}
        </div>
        <div className="player-profile">{this.state.showPlayerProfile ?
          <PlayerProfile /> : null}</div>
      </div>
    );
  }
}
