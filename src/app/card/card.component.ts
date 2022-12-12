import { Component, Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { modeUser } from '../task';
import { Task } from '../task';
import { recipes, tasks, chefs } from '../app.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() title !: string;
  @Input() idee !: number;
  @Input() task !: Task;
  @Input() type !: string;
  @Input() mode !: string;
  @Input() notEmptyCard !: boolean;

  @Output() onChange = new EventEmitter<any>();

  intervalColor = setInterval(this.getColor, 10000);

  getColor() {
    console.log(Math.abs(this.task.endTime - this.task.orderTime));
    if (this.task.pressingNumber != undefined) {
      if ( Math.abs(this.task.endTime - this.task.orderTime) < 5000) {
        return "red"
      } else if (( Math.abs(this.task.endTime - this.task.orderTime) > 5000) &&  Math.abs(this.task.endTime - this.task.orderTime) < 10000) {
        return "yellow"
      } else {
      return "green"
      }
    }
    return "pink"
  }

  test() {
    return modeUser == 'novice';
  }

  onClickButton() {
    for (var i = 0; i < tasks.length; i++) {
      if (this.task.id === tasks[i].id && this.task.completed) {
        tasks.splice(i, 1);
        return
      }
    }
  }
}
