export class Upgrade{
    bought = false;
    cost;
    effect;
    effectType;
    effectString;

    constructor(cost, effect, type) {
        this.cost = cost;
        this.effect = effect;
        this.effectType = type;
        this.effectString = `${effect}% to ${type}`;
    }
}