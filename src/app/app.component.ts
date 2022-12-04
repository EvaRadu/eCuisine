import {Component, OnInit} from '@angular/core';
import {Task, tasks} from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ecuisine';
  tasks = tasks;
  clusterize = true;

  notClusterize(task: Task) {
    if (task.pressingNumber != undefined) {
      if(task.pressingNumber < 40 && this.clusterize) {
        return false;
      }
      return true;
    }
    return true;
  }

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (tasks.length))
      console.log(index)
      this.tasks[index].pressingNumber = Math.random() * 100;
    }, 5000);
  }
}

