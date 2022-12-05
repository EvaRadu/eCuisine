import { Component, HostListener, Input } from '@angular/core';
import {Task, tasks} from './../tasks';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  @Input() mode !: string;

  tasks = tasks;
  clusterize = true;
  breakpoint = 5;
  notCluster = "Red"
  borne = 60;
  borneSuperieur = 100;
  borneSuperieurGreen = 30;
  borneSuperieurYellow = 60;

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
    this.determineBorne(this.notCluster);
    if (task.pressingNumber != undefined) {
      return task.pressingNumber >= this.borne && task.pressingNumber < this.borneSuperieur && this.clusterize;
    }
    return false;
  }


  determineBorne(typeCluster: string) {
    if(typeCluster == "Red") {
      this.borne = 60;
      this.borneSuperieur = 100;
    } else if(typeCluster == "Green") {
      this.borne = 0;
      this.borneSuperieur = 30;
    } else {
      this.borne = 30;
      this.borneSuperieur = 60;
    }
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

  clickCluster(typeCluster: string) {
    this.notCluster = typeCluster;
  }

  doCluster(typeCluster: string) {
    return this.notCluster != typeCluster
  }


  numberOfType(typeCluster: string) {
    this.determineBorne(typeCluster)
    let borneInferieur = this.borne;
    let borneSuperieur = this.borneSuperieur;
    let nb = 0;
    tasks.forEach(function(task) {
      if(task.pressingNumber != undefined) {
        if(task.pressingNumber >= borneInferieur && task.pressingNumber < borneSuperieur) {
          nb += 1;
        }
      }
    })
    return nb;
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

}
