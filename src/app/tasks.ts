import {ThemePalette} from '@angular/material/core';

  export class Task {
    id : number;
    name: string;
    orderTime: number;
    preparationTime: number;
    endTime: number;
    completed: boolean;
    pressingNumber ?: number;
    color: ThemePalette;
    subtasks?: Task[];

    constructor(id: number, name: string, completed: boolean, color: ThemePalette, subtasks?: Task[]) {
      this.id = id;
      this.name = recipe.name;
      this.completed = completed;
      this.color = color;
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
  export const tasks : Task[]= [];

