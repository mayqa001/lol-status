const router = require('express').Router();
const summonerRouter = require('./summonerRouter');

router.use('/summoner', summonerRouter);

module.exports = router;