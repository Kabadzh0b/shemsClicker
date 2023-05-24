export class Upgrade{
    bought = false;
    cost;
    effect;
    effectType;
    effectString;

    buyUpgrade = (dispatch) => {
        this.bought = true;
        dispatch({
            type:"REMOVE_MONEY",
            payload:this.cost,
        })
        switch (this.effectType){
            case "cursors":
                dispatch({
                    type:"ADD_BONUS_CURSORS",
                    payload:this.effect,
                })
                break;
            case "pervashs":
                dispatch({
                    type:"ADD_BONUS_PERVASHS",
                    payload:this.effect,
                })
                break;
            case "lectures":
                dispatch({
                    type:"ADD_BONUS_LECTURES",
                    payload:this.effect,
                })
                break;
            default:
                break;
        }
    }

    constructor(cost, effect, type) {
        this.cost = cost;
        this.effect = effect;
        this.effectType = type;
        this.effectString = `${effect}% to ${type}`;
    }
}