import { Recipe } from "./recipe";

export class allRecipes{
    id: string;
    recipe: Recipe;

    constructor(jsonStr: Object){
        //let jsonObj = JSON.parse(jsonStr);
        for (let prop in jsonStr) {
            this[prop] = jsonStr[prop];
        }
    }

}