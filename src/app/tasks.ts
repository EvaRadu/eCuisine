import {ThemePalette} from '@angular/material/core';
import {Chef} from './chef';

  export class Task {
    id : number;
    name: string;
    completed: boolean;
    pressingNumber ?: number;
    chef?: Chef;
    subtasks?: Task[];
    color: ThemePalette;


    constructor(id: number, name: string, completed: boolean, color: ThemePalette,  chef: Chef,  subtasks?: Task[]) {
      this.id = id;
      this.name = name;
      this.completed = completed;
      this.color = color;
      this.chef = chef;
      this.subtasks = subtasks;
      this.pressingNumber = 70;
    }
  }

  export const chefs : Chef[]= [
    new Chef(1, "Mia", "expert"),
    new Chef(2, "Raph", "novice"),
    new Chef(3, "Ju", "expert"),
    new Chef(4, "Eva", "novice"),
  ];




  export const tasks : Task[]= [
    new Task(0,'Pâtes au pesto',false,'primary', chefs[0] , [
      new Task(0,'Faire cuire les pâtes al dente',false, 'accent', chefs[0]),
      new Task(1,"Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", false, 'accent', chefs[0]),
      new Task(2, "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", false, 'accent',chefs[0]),
      new Task(3, "Rajoutez les fromage râpés, assaisonner et mélangez.", false, 'accent',chefs[0]),
      new Task(4, "Egouttez les pâtes, méxlangez-les au pesto et servez.", false, 'accent',chefs[0]),
    ]),
    new Task(1,'Salade César', false, 'primary', chefs[1],  [
      new Task(0,'Lavez la salade.',false, 'accent', chefs[1]),
      new Task(1,"Faîtes cuire le poulet.", false, 'accent', chefs[1]),
      new Task(2,"Mélangez.", false, 'accent', chefs[1]),
    ]),
    new Task(2, 'Fondant au chocolat', false, 'primary', chefs[2], [
      new Task(0, 'Faîtes fondre le chocolat.', false, 'accent', chefs[2]),
      new Task(1, "Enfournez le tout.", false, 'accent', chefs[2]),
      new Task(2, "Ajoutez une de la chantilly.", false, 'accent',chefs[2])
    ]),
    new Task(0,'Pâtes au pesto',false,'primary', chefs[3] ,  [
      new Task(0,'Faire cuire les pâtes al dente',false,'accent', chefs[3]),
      new Task(1,"Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", false, 'accent', chefs[3]),
      new Task(2, "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", false, 'accent', chefs[3]),
      new Task(3, "Rajoutez les fromage râpés, assaisonner et mélangez.", false, 'accent', chefs[3]),
      new Task(4, "Egouttez les pâtes, méxlangez-les au pesto et servez.", false, 'accent', chefs[3]),
    ]),
    new Task(1,'Salade César', false, 'primary', chefs[1] ,  [
      new Task(0,'Lavez la salade.',false, 'accent', chefs[1]),
      new Task(1,"Faîtes cuire le poulet.", false, 'accent', chefs[1]),
      new Task(2,"Mélangez.", false, 'accent', chefs[1]),
    ]),
    new Task(2, 'Fondant au chocolat', false, 'primary', chefs[0], [
      new Task(0, 'Faîtes fondre le chocolat.', false, 'accent', chefs[0]),
      new Task(1, "Enfournez le tout.", false, 'accent', chefs[0]),
      new Task(2, "Ajoutez une de la chantilly.", false, 'accent', chefs[0])
    ])
  ];

