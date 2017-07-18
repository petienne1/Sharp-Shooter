import React from 'react';
// import { render } from 'react-dom';


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ searchTerm: event.target.value });
  // }

  handleChange(event) {
  event.preventDefault();
  let searchTerm = event.target.value;
  //console.log('+++ handleSubmit data => ', data);
  //console.log('addQuestion', this.props.addQuestion);
  let playerListURL = "localhost:3000/players";
  axios.get(playerListURL)
    .then((returnedPlayerList: []) => {
    return this.setState({
      questionsLoaded: true,
      returnedPlayerList: returnedPlayerList.data
    })
  }
);
}

  handleKeyUp(event) {
    if (event.key === 'Enter' && this.state.searchTerm !== '') {
      const searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${this.apiKey}`;
      this.setState({ searchUrl });
    }
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-info">
          <h1 className="app-name">Sharp Shooter</h1>
          <form className="form-group">
            <input
              className="header-input"
              onKeyUp={this.handleKeyUp}
              onChange={this.handleChange}
              type="search"
              placeholder="Search for a player..."
              value={this.state.searchTerm}
            />
            <ul className="list-inline intro-buttons">
              <li>
                <a className="btn btn-default btn-lg">
                  <span className="button-name">Search</span></a>
              </li>
              <li>
                <a className="btn btn-default btn-lg">
                  <span className="button-name">Advanced</span></a>
              </li>
              <li>
                <a className="btn btn-default btn-lg">
                  <span className="button-name">Compare</span></a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
