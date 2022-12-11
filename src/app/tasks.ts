import {ThemePalette} from '@angular/material/core';
import { Chef } from './chefs';


export class Task {
    id : number;
    name: string;
    orderTime: number;
    preparationTime: number;
    endTime: number;
    completed: boolean;
    pressingNumber ?: number;
    content: string;
    color: ThemePalette;
    subtasks?: Task[];

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
  export const tasks : Task[]= [];

