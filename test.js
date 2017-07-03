const NBA = require('nba');

let curry = NBA.findPlayer('Stephen Curry');
console.log(curry);
console.log('hey');

// NBA.stats.playerShooting('Stephen Curry').then(function(StephCurry){
//   console.log(StephCurry);
// });
//
// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(function(curryResults){
//   console.log(curryResults);
// });

// NBA.stats.assistTracker({ SeasonID: '12009' }).then(function(results){
//   console.log(results);
// });

// NBA.stats.playerShooting(params) -> Promise

NBA.stats.shots({ Location: "" }).then(function(results){
  console.log(results);
});
