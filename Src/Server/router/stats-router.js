const express = require('express');
const Controller = require('.././stats-controller');

const app = express.Router();

app.get('/player', Controller.getPlayerStats);
app.get('/shots', Controller.getPlayerShots);

module.exports = app;
