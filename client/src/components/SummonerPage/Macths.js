const Macths = ({ match }) => {
  console.log("match");

  return (
    <div>
      <div className="row" style={{backgroundColor:'gray'}}>
        <div className="col">
          <img
            src={match.championIcon}
            alt="champIcon"
            width="60px"
            height="60px"
          />
        </div>
        <div className="col">
          <div className="row">
            <h6>GAME MODE: {match.gameMode}</h6>
          </div>
          <div className="row">
            <h6>
              KDA: {match.kills}/{match.deaths}/{match.assists}
            </h6>
          </div>
          <div className="row">
            <h6>LANE: {match.lane}</h6>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              {match.item0 ===
              "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/0.png" ? (
                <div></div>
              ) : (
                <img
                  src={match.item0}
                  alt="itemIcon"
                  width="40px"
                  height="40px"
                />
              )}
            </div>
            <div className="col">
              {match.item1 ===
              "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/0.png" ? (
                <div></div>
              ) : (
                <img
                  src={match.item1}
                  alt="itemIcon"
                  width="40px"
                  height="40px"
                />
              )}
            </div>
            <div className="col">
              {match.item2 ===
              "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/0.png" ? (
                <div></div>
              ) : (
                <img
                  src={match.item2}
                  alt="itemIcon"
                  width="40px"
                  height="40px"
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {match.item3 ===
              "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/0.png" ? (
                <div></div>
              ) : (
                <img
                  src={match.item3}
                  alt="itemIcon"
                  width="40px"
                  height="40px"
                />
              )}
            </div>
            <div className="col">
              {match.item4 ===
              "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/0.png" ? (
                <div></div>
              ) : (
                <img
                  src={match.item4}
                  alt="itemIcon"
                  width="40px"
                  height="40px"
                />
              )}
            </div>
            <div className="col">
              {match.item5 ===
              "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/item/0.png" ? (
                <div></div>
              ) : (
                <img
                  src={match.item5}
                  alt="itemIcon"
                  width="40px"
                  height="40px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macths;
