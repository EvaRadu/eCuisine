import { Component, Input, EventEmitter, ComponentRef,HostListener, ElementRef , Renderer2, OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { modeUser } from '../task';
import { Task } from '../task';
import { recipes, tasks, chefs } from '../app.component';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent{
  @Input() title !: string;
  @Input() idee !: number;
  @Input() task !: Task;
  @Input() type !: string;
  @Input() mode !: string;
  @Input() notEmptyCard !: boolean;
  dateTime : number =  Date.now();
  checkBoxValue = false;

  @Output() onChange = new EventEmitter<any>();

  //intervalColor = setInterval(this.getColor, 10000);
  //intervalDestroy = setInterval(this.destroy, 10000);

  receiveCheckValue(bool) {
    console.log("received");
    this.checkBoxValue=bool;
    this.task.destroy = bool;
  }

  getColor() {
      if (Math.abs(this.task.endTime - Date.now()) < 5000) {
        return "Green" // GREEN
      } else if (( Math.abs(this.task.endTime - Date.now()) > 5000) &&  Math.abs(this.task.endTime - Date.now()) < 10000) {
        return "Yellow" // YELLOW
      } else {
      return "Red"  // RED
      }
  }

  novice() {
    return modeUser == 'novice';
  }

  destroy() {
    console.log("called destroy");
    console.log(this.task.id);
    console.log(this.task.completed);
    console.log("recipes before : ", recipes);
    for (var i = 0; i < recipes.length; i++) {
      if (this.task.recipe.name === recipes[i].name && this.task.completed) {
        console.log("destroying");
        recipes.splice(i, 1);
        console.log("recipes after : ", recipes);
        return
      }
    }
  }

}
