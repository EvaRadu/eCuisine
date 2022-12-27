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
  borne = 0;
  borneSuperieur = 5000;
  tasks = tasks;

  @Input() mode !: string;

  notClusterize(task: Task) {
    this.determineBorne(this.notCluster)
    if (task.endTime != undefined) {
      return Math.abs(task.endTime - Date.now())  >= this.borne && Math.abs(task.endTime - Date.now()) < this.borneSuperieur;
    }
    return false;
  }


  determineBorne(typeCluster: string) {
    if(typeCluster == "Red") {
      this.borne = 10000;
      this.borneSuperieur = Number.MAX_VALUE;
    } else if(typeCluster == "Green") {
      this.borne = 0;
      this.borneSuperieur = 5000;
    } else if (typeCluster == "Yellow") {
      this.borne = 5000;
      this.borneSuperieur = 10000;
    } else {
      this.borne = 0;
      this.borneSuperieur = Number.MAX_VALUE;
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
      if(task.endTime != undefined) {
        if(Math.abs(task.endTime - Date.now()) >= borneInferieur && Math.abs(task.endTime - Date.now()) < borneSuperieur) {
          nb += 1;
        }
      }
    })
    return nb;
  }

}
