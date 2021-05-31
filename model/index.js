const Friend = require('./friend');
const Summoner = require('./summoner');

Friend.belongsTo(Summoner,{
    foreignKey:'friend_id',
  });
  
  // Categories have many Products
  Summoner.hasMany(Friend,{
    foreignKey:'friend_id',
  });

  module.exports = {
    Friend,
    Summoner
  };
  