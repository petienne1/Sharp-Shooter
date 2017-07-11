import React from 'react';
// import { render } from 'react-dom';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getInitialState: function () {
        return { searchTerm: "", searchUrl: "" };
      },
    };
  }

  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          type="search"
          placeholder="Search for a player..."
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default Search;
