export class Investment{
    num = 0;
    baseCost;
    cost;
    dispatchType;
    farmingValue;
    baseFarmingTime;
    farmingTime;
    interval;
    farmingPerSec = 0;

    constructor(baseCost, dispatchType, farmingValue, farmingTime) {
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.dispatchType = dispatchType;
        this.farmingValue = farmingValue;
        this.baseFarmingTime = farmingTime;
    }
    addItem(dispatch){
        this.num++;
        dispatch({type:this.dispatchType, payload:this.num})
        dispatch({type:"REMOVE_MONEY", payload:this.cost });
        this.cost = this.baseCost + (this.baseCost * 0.2 * this.num);
    }
    initInterval(dispatch){
        if(this.interval){
            clearInterval(this.interval);
        }
        this.farmingTime = this.baseFarmingTime/this.num;
        this.farmingPerSec = this.farmingValue/this.farmingTime * 1000;
        this.interval = setInterval(()=>{
            dispatch({type:"ADD_MONEY", payload:this.farmingValue})
        },this.farmingTime);
    }
}