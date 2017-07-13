const NBA = require('nba');

module.exports = {

  getPlayerStats: (request, response) => {
    const player = request.query.playerName;
    const playerInfo = NBA.findPlayer(player);


    NBA.stats.playerInfo({ PlayerID: playerInfo.playerId })
     .then((results) => {
       console.log('player stats: ', results);
       response.send(results);
     });
  },

  getPlayerShots: (request, response) => {
    console.log(request.query);
    const player = request.query.playerName;
    const season = request.query.season;
    const playerInfo = NBA.findPlayer(player);

    NBA.stats.shots({ Season: season, PlayerID: playerInfo.playerId })
      .then((results) => {
        response.send(results.shot_Chart_Detail);
      });
  },
};
