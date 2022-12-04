import { Component } from '@angular/core';
import {Task, tasks} from './../tasks';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
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

  determineColAndRow(task: Task) {
    if(task.pressingNumber != undefined) {
      if(this.clusterize && task.pressingNumber < 60) {
        return 0
      }
      if(task.pressingNumber < 30) {
        return 1
      }
      if(task.pressingNumber < 60) {
        return 2
      }
      if(task.pressingNumber < 60) {
        return 3
      }
    }
    return 1
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

}
