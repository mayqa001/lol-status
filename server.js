const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const routes = require('./routes');

//const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// sequelize.sync({force:false}).then(() => {
//     console.log("sercer called");
// ;})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})


app.get('/', async(req, res) => {
    res.json({
      message: 'hello world'
    })
  })
  
