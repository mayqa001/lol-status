const { Summoner } = require('../model');

const summonerData = [
    {
      name: 'fake1',
      password: 14.99,
      friend_id: 1,
    },
    {
        name: 'fake2',
        password: 20202,
        friend_id: 2,
    },
  ];
  
  const seedSummoner = () => Summoner.bulkCreate(summonerData);
  
  module.exports = seedSummoner;
  