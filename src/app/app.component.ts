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
      if(task.pressingNumber < 60 && this.clusterize) {
        return false;
      }
      return true;
    }
    return true;
  }

  numberOfGreen() {
    let nbGreen = 0;
    tasks.forEach(function(task) {
      if(task.pressingNumber != undefined) {
        if(task.pressingNumber < 30) {
          nbGreen += 1;
        }
      }
    })
    return nbGreen;
  }

  numberOfYellow() {
    let nbYellow = 0;
    tasks.forEach(function(task) {
      if(task.pressingNumber != undefined) {
        if(task.pressingNumber >= 30 && task.pressingNumber < 60) {
          nbYellow += 1;
        }
      }
    })
    return nbYellow;
  }

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (tasks.length))
      console.log(index)
      this.tasks[index].pressingNumber = Math.random() * 100;
    }, 1000);
  }
}

