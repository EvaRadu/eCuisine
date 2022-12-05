import {ThemePalette} from '@angular/material/core';
import { Chef } from './chefs';


export class Task {
    id : number;
    content: string;
    completed: boolean;
    color: ThemePalette;

    constructor(id: number, content: string, completed: boolean, color: ThemePalette, subtasks?: Task[]) {
      this.id = id;
      this.content = content;
      this.completed = completed;
      this.color = color;
    }
  }

export let modeUser = 'novice';

export function changeType(newType: string) {
  modeUser = newType;
} 

export class Recipe {
    id : number; //id de la recette
    name: string; //nom de la recette
    time : number; //temps de la recette
    completed: boolean; //la recette est terminée ou non
    pressingNumber ?: number; //urgence de la recette
    chef?: Chef;
    color: ThemePalette;
    tasks : Task[]; //liste des tâches de la recette

    constructor(id: number, time : number, name: string, completed: boolean, color: ThemePalette, chef: Chef, tasks : Task[]) {
      this.id = id;
      this.name = name;
      this.time = time;
      this.completed = completed;
      this.color = color;
      this.tasks = tasks;
      this.pressingNumber = 70;
      this.chef = chef;
    }
  }

  export const chefs : Chef[]= [
    new Chef(1, "Mia", "expert"),
    new Chef(2, "Raph", "novice"),
    new Chef(3, "Ju", "expert"),
    new Chef(4, "Eva", "novice"),
  ];

  export const recipes : Recipe[] = 
  [
    
    new Recipe(0, 10, 'Pâtes au pesto',false,'primary', chefs[0], [
      new Task(0,'Faire cuire les pâtes al dente',false,'accent'),
      new Task(1,"Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", false, 'accent'),
      new Task(2, "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", false, 'accent'),
      new Task(3, "Rajoutez les fromage râpés, assaisonner et mélangez.", false, 'accent'),
      new Task(4, "Egouttez les pâtes, méxlangez-les au pesto et servez.", false, 'accent'),
    ]),
    
    new Recipe(1,15, 'Salade César', false, 'primary', chefs[1], [
      new Task(0,'Lavez la salade.',false, 'accent'),
      new Task(1,"Faîtes cuire le poulet.", false, 'accent'),
      new Task(2,"Mélangez.", false, 'accent'),
    ]),
    
    new Recipe(2, 20, 'Fondant au chocolat', false, 'primary',chefs[2], [
      new Task(0, 'Faîtes fondre le chocolat.', false, 'accent'),
      new Task(1, "Enfournez le tout.", false, 'accent'),
      new Task(2, "Ajoutez une de la chantilly.", false, 'accent')





    ])
];

