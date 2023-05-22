import classes from '../Investment.module.css';
import cursorLogo from './cursor.png'
import {Investment} from "../Investment";
import {useDispatch} from "react-redux";
const CursorObj = new Investment(10, "ADD_CURSORS", 0.1, 1000);
export const Cursor = () =>{
    const dispatch = useDispatch();

    const addCursor = () => {
        CursorObj.addItem(dispatch);
        CursorObj.initInterval(dispatch);
    }

    return(
        <div className={classes.investment} onClick={addCursor}>
            Cursors
            <img className={classes.investmentLogo} src={cursorLogo} alt="cursor img" />
            {CursorObj.farmingPerSec.toFixed(1)}per sec
            cost: {CursorObj.cost}
        </div>
    )
}