  export class Chef {
    id!: number;  //identifiant chaf
    name!: string;  // name of the chef
    level!: string; // expert or novice

    constructor(jsonStr: string) {
      let jsonObj = JSON.parse(jsonStr);
      this.id = jsonObj.id;
      this.name = jsonObj.name;
      this.level = jsonObj.level;
    }
  }