import './App.css';
import shems from "./shems.jpg";
import {useDispatch, useSelector} from "react-redux";
import {Cursor} from "./components/Investments/Cursor/Cursor";
import {Pervash} from "./components/Investments/Pervash/Pervash";
import {Lecture} from "./components/Investments/Lecture/Lecture";
import {Upgrades} from "./components/Upgrades/Upgrades";

function App() {
    const dispatch = useDispatch();
    const money = useSelector(state => state.money);
    const shemsClick = () =>{
        dispatch({type:"ADD_MONEY", payload:1});
    }

    /*TODO:
        public speech
        Node
        GitHub
        youtube
        patreon
     */

  return (
    <div className="flexBox">
        <div className="flexLeft">
            <Cursor></Cursor>
            <Pervash></Pervash>
            <Lecture></Lecture>
        </div>
        <div className="flexCentral">
            <h1>{Math.round(money)}</h1>
            <img className="shemsClick" src={shems} alt = "shems" onClick={shemsClick}></img>
        </div>
        <div className="flexRight">
            <Upgrades></Upgrades>
        </div>
    </div>
  );
}

export default App;
