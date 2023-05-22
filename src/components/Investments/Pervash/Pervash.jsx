import classes from '../Investment.module.css';
import pervashLogo from './pervash.png'
import {Investment} from "../Investment";
import {useDispatch} from "react-redux";

const DEFAULT_SETTINGS = [100, "ADD_PERVASHS", 10, 10000];
const CursorObj = new Investment(...DEFAULT_SETTINGS);
export const Pervash = () =>{
    const dispatch = useDispatch();

    const addPervash = () => {
        CursorObj.addItem(dispatch);
        CursorObj.initInterval(dispatch);
    }

    return(
        <div className={classes.investment} onClick={addPervash}>
            Pervashy
            <img className={classes.investmentLogo} src={pervashLogo} alt="cursor img" />
            {CursorObj.farmingPerSec.toFixed(1)}per sec
            cost: {CursorObj.cost}
        </div>
    )
}