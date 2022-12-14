import { Component, Input, EventEmitter, ComponentRef,HostListener, ElementRef , Renderer2, OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { borneInferieurRed, borneInferieurYellow, modeUser } from '../task';
import { Task } from '../task';
import { recipes, tasks, chefs } from '../app.component';
import {MatIconModule} from '@angular/material/icon'
import { SocketService } from '../services/socket.service';
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
  pinned : boolean = false;

  @Output() onChange = new EventEmitter<any>();

  //intervalColor = setInterval(this.getColor, 10000);
  //intervalDestroy = setInterval(this.destroy, 10000);

  constructor(private socketService: SocketService){

  }

  ngOnChange(): void{
    this.pinned = this.task.pinned;
    if(this.task.completed){
      this.pinned = false;
      this.task.pinned = false;
      this.socketService.updateTasks();

    }
  }

  receiveCheckValue(bool) {
    this.task.destroy = bool;
  }

  pinChecked(){
    if(this.task.completed){
      this.task.pinned = false;
      this.pinned = false;
    }
    else{
      this.task.pinned = !this.task.pinned;
      this.pinned = !this.pinned;
    }
    this.socketService.updateTasks();
  }

  getColor() {
      var dateSoustraction = this.task.completed ? this.task.completedTime : Date.now();
      if(this.task.completed){
        if (Math.abs(this.task.orderTime - dateSoustraction) < borneInferieurYellow){
          return "Green" // GREEN
        } else if (( Math.abs(this.task.orderTime - dateSoustraction) > borneInferieurYellow) &&  Math.abs(this.task.orderTime - dateSoustraction) < borneInferieurRed) {
          return "Yellow" // YELLOW
        } else {
        return "Red"  // RED
        }
      }
      else{
      if (Math.abs(this.task.endTime - dateSoustraction) < borneInferieurYellow){
        return "Green" // GREEN
      } else if (( Math.abs(this.task.endTime - dateSoustraction) > borneInferieurYellow) &&  Math.abs(this.task.endTime - dateSoustraction) < borneInferieurRed) {
        return "Yellow" // YELLOW
      } else {
      return "Red"  // RED
      }
      }
  }

  getContentColor() {
    var dateSoustraction = this.task.completed ? this.task.completedTime : Date.now();
    if(this.task.completed){
      if (Math.abs(this.task.orderTime - dateSoustraction) < borneInferieurYellow){
        return "#50b36b" // GREEN
      } else if (( Math.abs(this.task.orderTime - dateSoustraction) > borneInferieurYellow) &&  Math.abs(this.task.orderTime - dateSoustraction) < borneInferieurRed) {
        return "#f7ec88" // YELLOW
      } else {
      return "#d66e67"  // RED
      }
    }
    else{
    if (Math.abs(this.task.endTime - dateSoustraction) < borneInferieurYellow){
      return "#50b36b" // GREEN
    } else if (( Math.abs(this.task.endTime - dateSoustraction) > borneInferieurYellow) &&  Math.abs(this.task.endTime - dateSoustraction) < borneInferieurRed) {
      return "#f7ec88" // YELLOW
    } else {
    return "#d66e67"  // RED
    }
    }
}

  novice() {
    return modeUser == 'novice';
  }

}
