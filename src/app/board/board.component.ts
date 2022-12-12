import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { tasks , recipes, chefs} from '../app.component'
import { Task } from '../task';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  @Input() clusterize = true;
  breakpoint = 5;
  @Input() notCluster = "Red"
  @Input() notEmptyCard = true;
  borne = 60;
  borneSuperieur = 100;
  tasks = tasks;

  @Input() mode !: string;

  notClusterize(task: Task) {
    this.determineBorne(this.notCluster)
    if (task.pressingNumber != undefined) {
      return task.pressingNumber >= this.borne && task.pressingNumber < this.borneSuperieur;
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
    } else if (typeCluster == "Yellow") {
      this.borne = 30;
      this.borneSuperieur = 60;
    } else {
      this.borne = 0;
      this.borneSuperieur = 100;
    }
  }

  onResize(event) {
      this.breakpoint = this.notEmptyCard ? this.getCols() : 5;
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
    this.notCluster = typeCluster
  }

  doCluster(typeCluster: string) {
    return this.notCluster != typeCluster && this.clusterize
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

  determineColAndRow(task : Task) {
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
