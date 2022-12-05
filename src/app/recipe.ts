
export class Recipe{
    id: number;
    name: string;
    preparationTime: number;
    stepList: string[];

    constructor(jsonStr: string){
        let jsonObj = JSON.parse(jsonStr);
        this.id = jsonObj.id;
        this.name = jsonObj.name;
        this.preparationTime = jsonObj.preparationTime;
        this.stepList = jsonObj.stepList;
    }
}
