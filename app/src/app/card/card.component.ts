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

  @Output() onChange = new EventEmitter<any>();

  //intervalColor = setInterval(this.getColor, 10000);
  //intervalDestroy = setInterval(this.destroy, 10000);

  receiveCheckValue(bool) {
    this.task.destroy = bool;
  }

  getColor() {
      var dateSoustraction = this.task.completed ? this.task.completedTime : Date.now();
      if(this.task.completed){
        if (Math.abs(this.task.orderTime - dateSoustraction) < 5000){
          return "Green" // GREEN
        } else if (( Math.abs(this.task.orderTime - dateSoustraction) > 5000) &&  Math.abs(this.task.orderTime - dateSoustraction) < 10000) {
          return "Yellow" // YELLOW
        } else {
        return "Red"  // RED
        }
      }
      else{
      if (Math.abs(this.task.endTime - dateSoustraction) < 5000){
        return "Green" // GREEN
      } else if (( Math.abs(this.task.endTime - dateSoustraction) > 5000) &&  Math.abs(this.task.endTime - dateSoustraction) < 10000) {
        return "Yellow" // YELLOW
      } else {
      return "Red"  // RED
      }
      }
  }

  getContentColor() {
    var dateSoustraction = this.task.completed ? this.task.completedTime : Date.now();
    if(this.task.completed){
      if (Math.abs(this.task.orderTime - dateSoustraction) < 5000){
        return "#50b36b" // GREEN
      } else if (( Math.abs(this.task.orderTime - dateSoustraction) > 5000) &&  Math.abs(this.task.orderTime - dateSoustraction) < 10000) {
        return "#f5d282" // YELLOW
      } else {
      return "#e36a62"  // RED
      }
    }
    else{
    if (Math.abs(this.task.endTime - dateSoustraction) < 5000){
      return "#50b36b" // GREEN
    } else if (( Math.abs(this.task.endTime - dateSoustraction) > 5000) &&  Math.abs(this.task.endTime - dateSoustraction) < 10000) {
      return "#f5d282" // YELLOW
    } else {
    return "#e36a62"  // RED
    }
    }
}

  novice() {
    return modeUser == 'novice';
  }

}
