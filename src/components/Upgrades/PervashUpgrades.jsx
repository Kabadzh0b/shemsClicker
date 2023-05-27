import classes from "./Upgrade.module.css";
import {Upgrade} from "./Upgrade";
import {useDispatch} from "react-redux";

const UPGRADES = [];
for(let i = 0; i < 10; i++){
    UPGRADES.push(new Upgrade(1000 + 15**i, 5, "pervashs"));
}
export const PervashUpgrades = () => {

    const dispatch = useDispatch();
    let upgrade = UPGRADES[0];

    return(
        <div className={classes.upgrade} onClick={() => {
            upgrade.buyUpgrade(dispatch);
            UPGRADES.shift();
        }}>
            {upgrade.upgradeString}
        </div>
    )
}