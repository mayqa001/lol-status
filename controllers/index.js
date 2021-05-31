const router = require('express').Router();
const apiRoutes = require('./api');
const dbRoutes = require('./db');

router.use('/api', apiRoutes);
//router.use('/db', dbRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;