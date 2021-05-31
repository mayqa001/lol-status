const router = require("express").Router();

const axios = require("axios");
let summonerInfo = {};
let matchs = [];
let numberOfMatch = 5;

async function getAccountInfo(name) {
  const url = `${process.env.RIOT_OCI_URL}summoner/v4/summoners/by-name/${name}?api_key=${process.env.RIOT_KEY}`;
  let accountInfo = await axios.get(url);
  const { puuid, id, profileIconId, summonerLevel } = accountInfo.data;
  summonerInfo["puuid"] = puuid;
  summonerInfo["id"] = id;
  summonerInfo["profileIcon"] = `${process.env.ICON_URL}${profileIconId}.png`;
  summonerInfo["summonerLevel"] = summonerLevel;
}

async function getRank(encryptedId) {
  //console.log(encryptedId);
  //"https://oc1.api.riotgames.com/lol/league/v4/entries/by-summoner/LDEUVXzK3SsAhCp_KhQJ6b7i7REXCmBEMn_PQ3--hFRx?api_key=RGAPI-b1064186-ecf7-4a4b-bbc0-b28262a61532";
  const url = `${process.env.RIOT_OCI_URL}league/v4/entries/by-summoner/${encryptedId}?api_key=${process.env.RIOT_KEY}`;
  let rankData = await axios.get(url);
  var { queueType, tier, rank, summonerName, wins, losses, hotStreak } =
    rankData.data[0];
  summonerInfo["tier"] = tier;
  summonerInfo["rank"] = rank;
  summonerInfo["wins"] = wins;
  summonerInfo["losses"] = losses;
  summonerInfo["queueType"] = queueType;
  summonerInfo["hotStreak"] = hotStreak;
  summonerInfo["summonerName"] = summonerName;
  summonerInfo["winRate"] = ((wins / (wins + losses)) * 100).toFixed(1);
}

async function getMatchIDs(puuid) {
  //https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/L4uVWtiDW6cY4Spouf2fRIueLg4JTD5mD8VAX9U9LREwmWriwd-kUhvw2Sp7JPG-2snVwYCF1yPdwQ/ids?start=0&count=20&api_key=RGAPI-b1064186-ecf7-4a4b-bbc0-b28262a61532
  const url = `${process.env.RIOT_AMC_URL}match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${numberOfMatch}&api_key=${process.env.RIOT_KEY}`;
  var matchIDs = await axios.get(url);
  return matchIDs.data;
}

async function getMatchs(matchID) {
  //https://americas.api.riotgames.com/lol/match/v5/matches/OC1_447460538?api_key=RGAPI-b1064186-ecf7-4a4b-bbc0-b28262a61532
  const url = `${process.env.RIOT_AMC_URL}match/v5/matches/${matchID}?api_key=${process.env.RIOT_KEY}`;
  let match = await axios.get(url);
  const { gameMode } = match.data.info;
  const {
    assists,
    championId,
    championName,
    deaths,
    kills,
    lane,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
  } = match.data.info.participants[0];
  let matchJson = {};
  matchJson["gameMode"] = gameMode;
  matchJson["assists"] = assists;
  matchJson["championId"] = championId;
  matchJson["championIcon"] = ` https://cdn.communitydragon.org/11.11.1/champion/${championName}/square`;
  matchJson["championName"] = championName;
  matchJson["deaths"] = deaths;
  matchJson["kills"] = kills;
  matchJson["lane"] = lane;

  matchJson["item0"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item0}.png`;
  matchJson["item1"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item1}.png`;
  matchJson["item2"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item2}.png`;
  matchJson["item3"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item3}.png`;
  matchJson["item4"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item4}.png`;
  matchJson["item5"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item5}.png`;
  matchJson["item6"] = `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/${item6}.png`;
  return matchJson;
}

router.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    //console.log(name);
    await getAccountInfo(name);
    await getRank(summonerInfo.id);
    res.status(200).json(summonerInfo);
    summonerInfo={};
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/matchs/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(summonerInfo.puuid);
    await getAccountInfo(name);
    let matchIDs = await getMatchIDs(summonerInfo.puuid);
    //console.log(matchIDs);
    for(let i = 0; i < numberOfMatch; i++){
        let match = await getMatchs(matchIDs[i]);
        matchs.push(match);
    }
    //console.log(matchs);
    res.status(200).json(matchs);
    matchs = [];
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
