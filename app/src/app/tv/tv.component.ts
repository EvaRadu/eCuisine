import {Component, HostListener, OnInit} from '@angular/core';
import {Task } from '../task';
import { Recipe } from '../recipe';
import { chefs, recipes, tasks } from '../app.component'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})


export class TvComponent implements OnInit {
  title = 'ecuisine';

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
    tasks.forEach(function(task) {
      if(task.endTime != undefined) {
        if(!task.completed) {
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
    let nb = 0;
    tasks.forEach(function(task) {
      if(task.endTime != undefined) {
        if(Math.abs(task.endTime - Date.now()) >= borneInferieur && Math.abs(task.endTime - Date.now()) < borneSuperieur && !task.completed) {
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

  ngOnInit() {
    setInterval(() => {
      this.checkScrollbar()
    }, 1000);
  }
}

