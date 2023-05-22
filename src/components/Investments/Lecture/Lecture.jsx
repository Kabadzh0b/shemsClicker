import classes from '../Investment.module.css';
import lectureLogo from './lecture.png'
import {Investment} from "../Investment";
import {useDispatch} from "react-redux";
const CursorObj = new Investment(1000, "ADD_LECTURES", 500, 100000);
export const Lecture = () =>{
    const dispatch = useDispatch();

    const addLecture = () => {
        CursorObj.addItem(dispatch);
        CursorObj.initInterval(dispatch);
    }

    return(
        <div className={classes.investment} onClick={addLecture}>
            Lectures
            <img className={classes.investmentLogo} src={lectureLogo} alt="cursor img" />
            {CursorObj.farmingPerSec.toFixed(1)}per sec
            cost: {CursorObj.cost}
        </div>
    )
}