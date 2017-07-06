const NBA = require('nba');

module.exports = {

  getPlayerStats: (request, response) => {
      let player = request.query.playerName;
      let playerInfo = NBA.findPlayer(player);


      NBA.stats.playerInfo({ PlayerID: playerInfo.playerId })
        .then(function(results) {
          console.log('player stats: ', results);
          response.send(results);
        });
  },

  getPlayerShots: (request, response) => {
    console.log(request.query);
      let player = request.query.playerName;
      let season = request.query.season;
      let playerInfo = NBA.findPlayer(player);

      NBA.stats.shots({ Season: season, PlayerID: playerInfo.playerId })
        .then(function(results) {

          response.send(results.shot_Chart_Detail);
        });
  }
}
