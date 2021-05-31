import "./App.css";
import Home from "./components/HomePages/Home";
import Summoner from "./components/SummonerPage/Summoner";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
const axios = require("axios");

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  var temp = false;
  var [summonerFromApi, setSummonerFromApi] = useState({});
  var [matchsFromApi, setMatchFromApi] = useState({});

  var [state, setState] = useState(false);
  var [summoner, setSummoner] = useState({});
  var [matchs, setMatch] = useState({});
  var [input, setInput] = useState({});

  useEffect(() => {
    setSummoner(summonerFromApi);
    setMatch(matchsFromApi);
    console.log("state: " + state);
  }, [state, matchsFromApi, input]);

  const getSummoner = async (name) => {
    console.log(name);
    const response = await fetch(`/api/summoner/${name}`, {
      mode: "no-cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setSummonerFromApi((summonerFromApi = data));
    //console.log(summonerFromApi);
  };

  const getMatchs = async (name) => {
    console.log(name);
    var response = await fetch(
      `/api/summoner/matchs/${name}`
    );
    var data = await response.json();
    setMatchFromApi((matchsFromApi = data));
    console.log(matchsFromApi);
    setState((state = true));
    console.log("state from getmatchs: " + state);
  };

  const getAll = async () => {
    console.log(input);
    await getSummoner(input);
    await getMatchs(input);
  };

  return (
    <Router>
      <Navbar />
      <div className="container text-center">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home getAll={getAll} input={input} setInput={setInput} />
            )}
          />
          <Route
            path="/summoner"
            render={() =>
              state === true ? (
                <Summoner summoner={summoner} matchs={matchs} />
              ) : (
                <Loading />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
