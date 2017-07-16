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

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleKeyUp(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
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
