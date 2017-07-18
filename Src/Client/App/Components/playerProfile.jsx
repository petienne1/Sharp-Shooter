import React from 'react';

class PlayerProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPlayerProfile: false
    };

  }
}

render () {
  const players = fetch('localhost:3030/players');
                  // .then((response) => {
                  //   return response.json();
                  // })
                  // .then((json) => {
                  //   console.log(json);
                  // });

  const filterPlayers = createFilterPlayers({ players });
  return (

    <h1>Player Profile</h1>
    <h2>{currentPlayer.displayFirstLast}</h2>
    <h4>{"School: " + currentPlayer.school}</h4>
    <h4>{"Drafted: " + currentPlayer.draftYear}</h4>
    <h4>{"Team: " + currentPlayer.teamCity + ' ' + currentPlayer.teamName}</h4>
    <h4>{"Season: " + currentPlayer.seasonExp}</h4>
    <h4>{"Height: " +  currentPlayer.height}</h4>
    <h4>{"Weight: " + currentPlayer.weight}</h4>
    <h4>{"Position: " + currentPlayer.position}</h4>
    <h4>{"Jersey: " + currentPlayer.jersey}</h4>
  );
}

export default PlayerProfile;
