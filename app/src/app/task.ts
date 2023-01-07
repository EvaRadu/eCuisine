import {ThemePalette} from '@angular/material/core';
import { Chef } from './chef';
import {Recipe} from "./recipe"; 
import { Subtask } from './subtask';


export class Task {
    id : number;  // id de la task
    name: string;  // name of the task
    orderTime: number;  // timestamp when the command was order
    endTime: number;  // orderTime + preparationTime
    completed: boolean; // completion of the order
    color: ThemePalette;  // color af the order (calculate with endTime and date.now)
    recipe : Recipe;  // recipe of the order
    chef: Chef;  // chef assign to the order
    subtasks: Subtask[];
    destroy: boolean = false; 
    completedTime: number; // heure à laquelle la commande est terminée

    constructor(id: number, name: string, completed: boolean, color: ThemePalette, recipe: Recipe, chef: Chef) {
      this.recipe = recipe;
      this.id = id;
      this.name = name;
      this.orderTime = Date.now();
      this.endTime = this.orderTime+this.recipe.preparationTime;
      this.completed = false;
      this.color = color;
      this.chef = chef;
      this.subtasks = new Array();
      for (let i=0; i<recipe.stepList.length; i++){
        this.subtasks.push(new Subtask(false, recipe.stepList[i]));
      }
      this.completedTime = 0;
    }

  }

export let modeUser = 'novice';

export function changeType(newType: string) {
  modeUser = newType;
}