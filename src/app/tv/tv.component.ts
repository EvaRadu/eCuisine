import {Component, HostListener, OnInit} from '@angular/core';
import {Task, tasks} from '../tasks';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})


export class TvComponent implements OnInit {
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
