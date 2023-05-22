import classes from '../Investment.module.css';
import lectureLogo from './lecture.png'
import {Investment} from "../Investment";
import {useDispatch, useSelector} from "react-redux";
const DEFAULT_SETTINGS = [1000, "ADD_LECTURES", 500, 100000];
const lectureObj = new Investment(...DEFAULT_SETTINGS);
export const Lecture = () =>{
    const dispatch = useDispatch();
    lectureObj.bonus = useSelector(state => state.bonus);
    lectureObj.typeBonus = useSelector(state => state.cursorBonus);

    const addLecture = () => {
        lectureObj.addItem(dispatch);
        lectureObj.initInterval(dispatch);
    }

    return(
        <div className={classes.investment} onClick={addLecture}>
            Lectures
            <img className={classes.investmentLogo} src={lectureLogo} alt="cursor img" />
            {lectureObj.farmingPerSec.toFixed(1)}per sec
            cost: {lectureObj.cost}
        </div>
    )
}