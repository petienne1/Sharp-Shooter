import React from 'react';
import YearItem from './yearItem.jsx'

class Select extends React.Component {

  constructor(props) {
    super(props)
    console.log('years in Select is:', props.seasons)
    this.state = {};

    console.log('props is Select are: ', props);

   }
    
  // componentWillMount() {
  //
  // }
  render() {
    const personId = this.props.personId;
   return (
      <div className="select-container">
      <h1>Seasons</h1>
      <ul>
      <div>
      {
        this.props.seasons.map(function(season, i) {
          return <YearItem key={i} year={season} personId={personId} />
        })
      }
      </div>

      </ul>
    </div>
    )
  }
}

export default Select;
