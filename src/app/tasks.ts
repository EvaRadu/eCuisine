import {ThemePalette} from '@angular/material/core';
import { Recipe } from './recipe';
import { subtask } from './subtask';

  export class Task {
    id : number;
    name: string;
    orderTime: number;
    preparationTime: number;
    endTime: number;
    completed: boolean;
    color: ThemePalette;
    pressingNumber: number;
    subtasks: subtask[];

    constructor(id: number, completed: boolean, color: ThemePalette, recipe: Recipe) {
      this.id = id;
      this.name = recipe.name;
      this.completed = completed;
      this.color = color;
      this.subtasks = [];
      for (const s in recipe.stepList){
        if (recipe.stepList[s] != undefined){
          this.subtasks.push(new subtask(false, color, recipe.stepList[s]));
        }
      }
      this.orderTime = Date.now();
      this.preparationTime = recipe.preparationTime; 
      this.endTime = this.orderTime+this.preparationTime;
      this.pressingNumber = 70;
    }
  }

  export const tasks : Task[]= [];


