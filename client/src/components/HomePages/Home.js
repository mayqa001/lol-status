import lolIcon from "./lolIcon.png";
import { Link } from "react-router-dom";
const Home = ({ getAll,input,setInput}) => {
  return (
    <form className="serach-style">
      <h3>
        <img src={lolIcon} alt="lolIcon" width="50px" height="50px" />
        League of legends Stats
      </h3>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Summoner" onChange={event => setInput(event.target.value)}/>
        <Link className="btn btn-success" type="button" to={"/summoner"} onClick={() => {getAll(input);}}>
          Search
        </Link>
      </div>
    </form>
  );
};

export default Home;
