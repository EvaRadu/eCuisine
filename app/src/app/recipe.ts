export class Recipe{
    id : number; //id de la recette
    name: string; //nom de la recette
    preparationTime: number; //temps de préparation de la recette
    stepList: string[]; //liste des tâches de la recette

    constructor(jsonStr: string){
        let jsonObj = JSON.parse(jsonStr);
        this.id = jsonObj.id;
        this.name = jsonObj.name;
        this.preparationTime = jsonObj.preparationTime;
        this.stepList = jsonObj.stepList;
    }
}
