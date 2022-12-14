  export class Chef {
    id!: number;  //identifiant chaf
    name!: string;  // name of the chef
    level!: string; // expert or novice
    genre!: string; // homme ou femme
    url!: string; // pour avatar


    constructor(jsonStr: string) {
      let jsonObj = JSON.parse(jsonStr);
      this.id = jsonObj.id;
      this.name = jsonObj.name;
      this.level = jsonObj.level;
      this.genre = jsonObj.genre;
      this.url = jsonObj.url;
    }
  }