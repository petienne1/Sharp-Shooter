import React from 'react';
// import { render } from 'react-dom';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getInitialState: function () {
        return { searchTerm: '', searchUrl: '' };
      },
    };
  }

  render() {
    return (

      <div className="intro-header">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Sharp Shooter</h1>
                <form>
                  <input
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleChange}
                    type="search"
                    placeholder="Search for player..."
                    value={this.state.searchTerm}
                  />
                  <hr className="intro-divider" />
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
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
