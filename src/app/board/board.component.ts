import { Component, HostListener } from '@angular/core';
import {Task, tasks} from './../tasks';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  tasks = tasks;
  clusterize = true;
  breakpoint = 5;

  notClusterize(task: Task) {
    if (task.pressingNumber != undefined) {
      if(task.pressingNumber < 60 && this.clusterize) {
        return false;
      }
      return true;
    }
    return true;
  }

  onResize(event) {
    this.breakpoint = this.getCols();
  }

  getCols() {
    if (window.innerWidth < 600) {
      return 1;
    } else if (window.innerWidth >= 600 && window.innerWidth < 960) {
      return 2;
    } else if (window.innerWidth >= 960 && window.innerWidth < 1280) {
      return 3;
    } else if (window.innerWidth >= 1280 && window.innerWidth < 1920) {
      return 4;
    } else {
      return 5;
    }
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
