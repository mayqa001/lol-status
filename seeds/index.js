const seedSummoner = require('./summoner');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedSummoner();  
    process.exit(0);
  };
  
  seedAll();