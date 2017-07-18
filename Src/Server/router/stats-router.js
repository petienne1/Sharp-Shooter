const express = require('express');
const Controller = require('.././stats-controller');
const NBA = require('nba');

const app = express.Router();

app.get('/players', (request, response) => {
  // function playerList(input) {
  //   return NBA.searchPlayers(input);
  // }
  // let players = playersList('Ste');
  // console.log(NBA.searchPlayers(''));
  response.send(NBA.searchPlayers(''));
  // return playerList;
});

app.get('/playerstats', Controller.getPlayerStats);
app.get('/shots', Controller.getPlayerShots);

module.exports = app;
