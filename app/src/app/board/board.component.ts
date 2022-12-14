import { Component, HostListener, Input, Output, ViewChild, OnInit} from '@angular/core';
import { tasks , recipes, chefs} from '../app.component'
import { SocketService } from '../services/socket.service';
import {modeUser, Task} from '../task';
import {borneInferieurRed, borneInferieurYellow} from '../task';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  @Input() clusterize = true;
  breakpoint = this.getCols();
  @Input() notCluster = "Commande"
  @Input() notEmptyCard = true;
  borne = 0;
  borneSuperieur = borneInferieurYellow;
  tasks = tasks;
  @Input() profile !: string;
  //@Input() tasks;
  id !: number;
  @Input() mode !: string;


constructor(private socketService: SocketService){

}



  ngOnInit(): void {
    this.id = Number(this.profile);
    if(!this.notEmptyCard) {
      this.breakpoint = 5;
    }
  };

  calculRowHeight() {
    if(this.mode == 'tv' && this.notEmptyCard) {
      return "270px"
    }
    if(modeUser == 'novice') {
      return "1:1"
    }
    if(!this.notEmptyCard) {
      return "30px"
    }
    else {
      return "200px"
    }
  }

  notClusterize(task: Task) {
    if (task.pinned && this.notEmptyCard) {
      return true;
    }
    if (task.pinned && !this.notEmptyCard) {
      return false;
    }
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
      this.borne = borneInferieurRed;
      this.borneSuperieur = Number.MAX_VALUE;
    } else if(typeCluster == "Green") {
      this.borne = 0;
      this.borneSuperieur = borneInferieurYellow;
    } else if (typeCluster == "Yellow") {
      this.borne = borneInferieurYellow;
      this.borneSuperieur = borneInferieurRed;
    }
    else if( typeCluster == "Grey"){
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
    let id = this.profile;
    tasks.forEach(function(task) {
      if(task.endTime != undefined && (task.chef.id == Number(id))) {
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
    let id = this.profile;
    tasks.forEach(function(task) {
      if(task.endTime != undefined && task.destroy == false && !task.pinned && (task.chef.id == Number(id))) {
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

export let board : BoardComponent = this;
