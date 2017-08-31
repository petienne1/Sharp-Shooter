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
    console.log('in get playershots request.query is: ',request.query);
    const player = request.query.player;
    const season = request.query.season;
    const playerInfo = NBA.findPlayer(player);

    NBA.stats.shots({ Season: season, PlayerID: playerInfo.playerId })
      .then((results) => {
        response.send(results.shot_Chart_Detail);
      });
    // response.send('test')
  },
  getShots: (request, response) => {
    console.log('request.body: ', request.body)
    NBA.stats.shots({ PlayerID: request.body.PlayerID, Season: request.body.Season, GameID: Number(request.body.GameID),})
    .then((res) => {
      // console.log(request.body.GameID)
      // res.shot_Chart_Detail.forEach((shot) => {
      //   if (shot.gameId === '0021601131') {
      //     console.log(true)
      //   }
      // })
      // console.log('looped')
      console.log(res.shot_Chart_Detail)
      response.send('GotShots')
    })
  },
  getSeasons: (request, response) => {
    console.log('request.data in getSeasons is:' , request.body.ID)
    const queryString = `http://stats.nba.com/stats/playercareerstats?LeagueID=00&PerMode=PerGame&PlayerID=${request.body.ID}`;
    axios.get(queryString)
      .then((results) => {
        // console.log(results.data.resultSets[0])
        response.send(results.data.resultSets[0].rowSet)
      })
  },
  getGames: (request, response) => {
    // console.log(request.body)
    const queryString = `http://stats.nba.com/stats/playergamelog/?PlayerID=${request.body.personId}&Season=${request.body.Season}&SeasonType=Regular Season`;
    axios.get(queryString)
    .then((results) => {
      // console.log(results.data.resultSets[0].rowSet)
      response.send(results.data.resultSets[0].rowSet);
    })
  }
};

