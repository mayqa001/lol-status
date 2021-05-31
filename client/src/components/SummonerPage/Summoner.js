import MatchHistory from "./MatchHistory";
import bronze from "./rankIcon/Emblem_Bronze.png";
import iron from "./rankIcon/Emblem_Iron.png";
import silver from "./rankIcon/Emblem_Silver.png";
import gold from "./rankIcon/Emblem_Gold.png";
import platinum from "./rankIcon/Emblem_Platinum.png";
import diamond from "./rankIcon/Emblem_Diamond.png";
import grandmaster from "./rankIcon/Emblem_Grandmaster.png";
import master from "./rankIcon/Emblem_Master.png";
import challenger from "./rankIcon/Emblem_Challenger.png";

const Summoner = ({ summoner, matchs}) => {
  function rankIcon(tier) {
    switch (tier) {
      case "BRONZE":
        return <img src={bronze} alt="lolIcon" width="100px" height="100px" />;
      case "IRON":
        return <img src={iron} alt="lolIcon" width="100px" height="100px" />;
      case "SILVER":
        return <img src={silver} alt="lolIcon" width="100px" height="100px" />;;
      case "GOLD":
        return <img src={gold} alt="lolIcon" width="100px" height="100px" />;
      case "PLATINUM":
        return <img src={platinum} alt="lolIcon" width="100px" height="100px" />;
      case "DIAMOND":
        return <img src={diamond} alt="lolIcon" width="100px" height="100px" />;
      case "GRANDMASTER":
        return <img src={grandmaster} alt="lolIcon" width="100px" height="100px" />;
      case "MASTER":
        return <img src={master} alt="lolIcon" width="100px" height="100px" />;
      case "CHALLENGER":
        return <img src={challenger} alt="lolIcon" width="100px" height="100px" />;
      default: break;
    }
  }
  if(matchs === false || matchs === undefined){
    //console.log(macths);
    return (<>loading</>);
  }
  return (
    <div>
        <div className="row" style={{backgroundColor:'gray'}}>
          <div className="col">
            <img src={summoner.profileIcon} width="100px" height="100px" />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h4>Summoner: </h4>
              </div>
              <div className="col">
                <span>{summoner.summonerName} </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Wins: </h4>
              </div>
              <div className="col">
                <span>{summoner.wins} </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h4>Rank: </h4>
              </div>
              <div className="col">
                <span>
                  <div className="row">

                  </div>
                  {summoner.tier} {summoner.rank}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Losses: </h4>
              </div>
              <div className="col">
                <span>{summoner.losses} </span>
              </div>
            </div>
          </div>
          <div className="col">
            {rankIcon(summoner.tier)}
          </div>
        </div>
        <div className="row">
          <h3 style={{backgroundColor:'gray'}}>Match history</h3>
          <MatchHistory  matchHistory={matchs}/>
        </div>
      
    </div>
  );
};

export default Summoner;
