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
}