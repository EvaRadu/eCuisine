import {Component, HostListener, OnInit} from '@angular/core';
import {Task, tasks} from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'ecuisine';
  tasks = tasks;

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (tasks.length))
      console.log(index)
      this.tasks[index].pressingNumber = Math.random() * 100;
    }, 1000);
  }
}

