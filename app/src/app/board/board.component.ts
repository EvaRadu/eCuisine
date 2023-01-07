import { Component, HostListener, Input, Output, ViewChild } from '@angular/core';
import { tasks , recipes, chefs} from '../app.component'
import { Task } from '../task';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  @Input() clusterize = true;
  breakpoint = this.getCols();
  @Input() notCluster = "Commande"
  @Input() notEmptyCard = true;
  borne = 0;
  borneSuperieur = 5000;
  tasks = tasks;
  //@Input() tasks;

  @Input() mode !: string;
  //@Input() profile !: string;


  notClusterize(task: Task) {
    this.determineBorne(this.notCluster)
    if (task.destroy == true && this.borne == -1) {
      return true;
    }
    else if (task.endTime != undefined && task.destroy == false) {
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
    } else if( typeCluster == "Grey"){
      this.borne = -1;
      this.borneSuperieur = -1;
    }
      else {
      this.borne = 0;
      this.borneSuperieur = Number.MAX_VALUE;
    }
  }

  onResize(event) {
      this.breakpoint = this.notEmptyCard ? this.getCols() : 5;
  }

  numberNotFinish() {
    let nb = 0;
    tasks.forEach(function(task) {
      if(task.endTime != undefined) {
        if(!task.completed) {
          nb += 1;
        }
      }
    })
    return nb;
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
    return (this.notCluster != typeCluster && this.clusterize && typeCluster != "Commande")
      || (typeCluster === "Grey" && this.notCluster != typeCluster)
      || (typeCluster === "Commande" && this.clusterize == false && this.notCluster === "Grey")
  }

  numberOfType(typeCluster: string) {
    this.determineBorne(typeCluster)
    let borneInferieur = this.borne;
    let borneSuperieur = this.borneSuperieur;
    let nb = 0;
    tasks.forEach(function(task) {
      if(task.endTime != undefined && task.destroy == false) {
        if(Math.abs(task.endTime - Date.now()) >= borneInferieur && Math.abs(task.endTime - Date.now()) < borneSuperieur) {
          nb += 1;
        }
      }
      else if(task.completed == true && borneInferieur == -1) {
        nb += 1;
      }
    })
    return nb;
  }

}
