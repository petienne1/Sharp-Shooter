const axios = require('axios');

const NBA = require('nba');


module.exports = {

  getPlayerName: (request, response) => {
    const player = request.query.player;
    response.send(NBA.searchPlayers(player));
  },

  getPlayerStats: (request, response) => {
    const player = request.query.player;
    console.log(request.query);
    const playerInfo = NBA.findPlayer(player);

    console.log(playerInfo);

    NBA.stats.playerInfo({ PlayerID: playerInfo.playerId })
     .then((results) => {
       console.log('player stats: ', results);
       response.send(results);
     });
  },

  getPlayerShots: (request, response) => {
    console.log(request.query);
    const player = request.query.player;
    const season = request.query.season;
    const playerInfo = NBA.findPlayer(player);

    NBA.stats.shots({ Season: season, PlayerID: playerInfo.playerId })
      .then((results) => {
        response.send(results.shot_Chart_Detail);
      });
  },
  getSeasons: (request, response) => {
    // console.log('request.data in getSeasons is:' , request.body.ID)
    const queryString = `http://stats.nba.com/stats/playercareerstats?LeagueID=00&PerMode=PerGame&PlayerID=${request.body.ID}`;
    axios.get(queryString)
      .then((results) => {
        // console.log(results.data.resultSets[0])
        response.send(results.data.resultSets[0].rowSet)
      })
  },
  
};

