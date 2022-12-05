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
  notCluster = "Red"
  borne = 60;
  borneSuperieur = 100;

  notClusterize(task: Task) {
    if(this.notCluster == "Red") {
      this.borne = 60;
      this.borneSuperieur = 100;
    } else if(this.notCluster == "Green") {
      this.borne = 0;
      this.borneSuperieur = 30;
    } else {
      this.borne = 30;
      this.borneSuperieur = 60;
    }
    if (task.pressingNumber != undefined) {
      if(task.pressingNumber >= this.borne && task.pressingNumber < this.borneSuperieur && this.clusterize) {
        return true;
      }
      return false;
    }
    return false;
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

  clickGreenCluster() {
    this.notCluster = "Green"
  }

  clickYellowCluster() {
    this.notCluster = "Yellow"
  }

  clickRedCluster() {
    this.notCluster = "Red"
  }

  doClusterGreen() {
    return this.notCluster != "Green"
  }
  doClusterRed() {
    return this.notCluster != "Red"
  }
  doClusterYellow() {
    return this.notCluster != "Yellow"
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

  numberOfRed() {
    let nbRed = 0;
    tasks.forEach(function(task) {
      if(task.pressingNumber != undefined) {
        if(task.pressingNumber < 30) {
          nbRed += 1;
        }
      }
    })
    return nbRed;
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
