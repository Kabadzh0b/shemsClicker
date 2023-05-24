import {CursorUpgrades} from "./CursorUpgrades";
import {PervashUpgrades} from "./PervashUpgrades";
import {LectureUpgrades} from "./LectureUpgrades";

export const Upgrades = () =>{

    return(
        <div>
            <CursorUpgrades></CursorUpgrades>
            <PervashUpgrades></PervashUpgrades>
            <LectureUpgrades></LectureUpgrades>
        </div>

    )
}