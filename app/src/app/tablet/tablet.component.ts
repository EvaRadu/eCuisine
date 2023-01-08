import {Component, HostListener, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { tasks, recipes } from '../app.component';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})


export class TabletComponent implements OnInit {
  title = 'ecuisine';
  @Input() profile !: string;
  clusterizeBis = false;
  notClusterBis = ""
  isCluster = false;
  borne = 0
  borneSuperieur = 10000

  checkScrollbar() {
    //const hasHorizontalScrollbar = window.innerWidth < document.body.scrollWidth;
    if(this.numberNotFinish() > this.getCols() * 2 && (this.numberOfType("Red") > 0 || this.numberOfType("Yellow") > 0)) {
      this.clusterizeBis = true;
      //if(this.isCluster == false) {
      this.notClusterBis = this.numberOfType("Red") > 0 ? "Red" : "Yellow"
      //}
      this.isCluster = true;
    } else {
      this.clusterizeBis = false;
      this.notClusterBis = ""
      this.isCluster = false;
    }
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

  numberNotFinish() {
    let nb = 0;
    let id = this.profile;  
    tasks.forEach(function(task) {
      if(task.endTime != undefined) {
        if(!task.completed && (task.chef.id == Number(id))) {
          nb += 1;
        }
      }
    })
    return nb;
  }

  numberOfType(typeCluster: string) {
    this.determineBorne(typeCluster)
    let borneInferieur = this.borne;
    let borneSuperieur = this.borneSuperieur;
    let id = this.profile;  
    let nb = 0;
    tasks.forEach(function(task) {
      if(task.endTime != undefined && task.destroy == false && !task.pinned && (task.chef.id == Number(id))) {
        if(Math.abs(task.endTime - Date.now()) >= borneInferieur && Math.abs(task.endTime - Date.now()) < borneSuperieur) {
          nb += 1;
        }
      }
      else if(task.completed == true && borneInferieur == -1) { // commandes déjà terminées
        nb += 1;
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


  constructor(private router: Router ) {
  }

  ngOnInit() {
    var table = this.router.url.split("/");
    this.profile = table[table.length-1];
    console.log(this.profile);
    setInterval(() => {
      this.checkScrollbar()
    }, 1000);
  }

}

