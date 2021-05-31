import Matchs from "./Macths";

const MatchHistory = ({ matchHistory}) => {
  return (
    <div>
      {matchHistory.map((data,i) => 
        //console.log(data);
        <Matchs key={i} match={data} style={{backgroundColor:'gray'}}/>
      )}

    </div>
  );
};

export default MatchHistory;
