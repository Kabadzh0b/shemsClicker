import classes from "./Upgrade.module.css";
import {Upgrade} from "./Upgrade";
import {useDispatch} from "react-redux";

const UPGRADES = [];
for(let i = 0; i < 10; i++){
    UPGRADES.push(new Upgrade(1000 + 20**i, 5, "lectures"));
}
export const LectureUpgrades = () => {

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