const router = require("express").Router();
const { Friend, Summoner} = require("../../model");

router.get("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const frinds = await Summoner.findAll({
      include: [
        {
          model: Friend,
        },
      ]
    });
    res.send(frinds);
  } catch (error) {
    res.send(error);
  }
});