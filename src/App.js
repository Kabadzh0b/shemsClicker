import './App.css';
import {useState} from "react";
import shems from "./shems.jpg";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="flexBox">
        <div className="flexLeft">a</div>
        <div className="flexCentral">
            <h1>{value}</h1>
            <img className="shemsClick" src={shems} alt = "shems" onClick={()=>setValue(value+1)}></img>
        </div>
        <div className="flexRight">a</div>
    </div>
  );
}

export default App;
