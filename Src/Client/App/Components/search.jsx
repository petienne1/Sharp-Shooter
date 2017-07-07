import React from 'react';
// import { render } from 'react-dom';

class Search extends React.Component {

  // getInitialState: function() {
  //   return {searchTerm:"", searchUrl:""};
  // }
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}

export default Search;
