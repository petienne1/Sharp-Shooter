const express = require('express');
const Controller = require('.././stats-controller');
const NBA = require('nba');

const app = express.Router();

app.get('/players', (request, response) => {
  const player = request.query.player;
  response.send(NBA.searchPlayers(player));
});
// app.get('players', Controller.getPlayerName);
app.get('/playerstats', Controller.getPlayerStats);
app.get('/shots', Controller.getPlayerShots);

module.exports = app;
