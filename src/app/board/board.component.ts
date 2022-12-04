import { Component } from '@angular/core';
import { tasks } from './../tasks';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  tasks = tasks;  
}
