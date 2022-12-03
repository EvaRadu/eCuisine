import { Component } from '@angular/core';
import { tasks } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecuisine';
  tasks = tasks;
}
