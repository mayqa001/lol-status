const router = require('express').Router();
const apiRoutes = require('./riotApi');

router.use('/api', apiRoutes);

module.exports = router;