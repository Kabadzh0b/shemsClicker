import classes from "./Upgrade.module.css";
import {Upgrade} from "./Upgrade";
import {useDispatch} from "react-redux";

const UPGRADES = [];
for(let i = 0; i < 10; i++){
    UPGRADES.push(new Upgrade(100 + 10**i, 5, "cursors"));
}
export const CursorUpgrades = () => {

    const dispatch = useDispatch();
    let upgrade = UPGRADES[0];

    return(
        <div className={classes.upgrade} onClick={() => {
            upgrade.buyUpgrade(dispatch);
            UPGRADES.shift();
        }}>
            Upgrade
            Effect: {upgrade.effectString}
            cost: {upgrade.cost}
        </div>
    )
}