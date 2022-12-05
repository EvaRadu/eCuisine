import { Component, Input } from '@angular/core';
import { Task } from '../tasks';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() title !: string;
  @Input() idee !: number;
  @Input() task !: Task;
  @Input() mode !: string;

  getColor() {
    if (this.task.pressingNumber != undefined) {
      if(this.task.pressingNumber < 30) {
        return "green"
      } else if (this.task.pressingNumber < 60) {
        return "yellow"
      }
      return "red"
    }
    return "pink"
  }
}
