import React from 'react';
import { render } from 'react-dom';
import Search from './Components/search.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
