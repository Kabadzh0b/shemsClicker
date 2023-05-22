import {Upgrade} from "./Upgrade";
import {useDispatch} from "react-redux";
import classes from "./Upgrade.module.css";

const upgrade = new Upgrade(100, 5, "cursors");
export const Upgrades = () =>{
    const dispatch = useDispatch();

    const buyUpgrade = () => {
        upgrade.bought = true;
        dispatch({
            type:"REMOVE_MONEY",
            payload:upgrade.cost,
        })
        dispatch({
            type:"ADD_BONUS_CURSORS",
            payload:upgrade.effect,
        })
    }

    return(
        <div className={classes.upgrade} onClick={buyUpgrade}>
            Upgrade
            Effect: {upgrade.effectString}
            cost: {upgrade.cost}
        </div>
    )
}