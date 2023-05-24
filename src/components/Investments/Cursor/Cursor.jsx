import classes from '../Investment.module.css';
import cursorLogo from './cursor.png'
import {Investment} from "../Investment";
import {useDispatch, useSelector} from "react-redux";
const DEFAULT_SETTINGS = [10, "ADD_CURSORS", 0.1, 1000];
export const cursorObj = new Investment(...DEFAULT_SETTINGS);

export const Cursor = () =>{
    const dispatch = useDispatch();
    cursorObj.bonus = useSelector(state => state.bonus);
    cursorObj.typeBonus = useSelector(state => state.cursorBonus);

    const addCursor = () => {
        cursorObj.addItem(dispatch);
        cursorObj.initInterval(dispatch);
    }

    return(
        <div className={classes.investment} onClick={addCursor}>
            Cursors
            <img className={classes.investmentLogo} src={cursorLogo} alt="cursor img" />
            {cursorObj.farmingPerSec.toFixed(1)}per sec
            cost: {cursorObj.cost}
        </div>
    )
}