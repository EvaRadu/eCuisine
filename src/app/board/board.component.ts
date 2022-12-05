import { Component, HostListener, Input, ViewChild } from '@angular/core';
import {Recipe, recipes} from './../recipes';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  @Input() clusterize = true;
  recipes = recipes;
  breakpoint = 5;
  @Input() notCluster = "Red"
  borne = 60;
  borneSuperieur = 100;
  borneSuperieurGreen = 30;
  borneSuperieurYellow = 60;

  notClusterize(recipe: Recipe) {
    this.determineBorne(this.notCluster)
    if (recipe.pressingNumber != undefined) {
      return recipe.pressingNumber >= this.borne && recipe.pressingNumber < this.borneSuperieur;
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
    recipes.forEach(function(recipe) {
      if(recipe.pressingNumber != undefined) {
        if(recipe.pressingNumber >= borneInferieur && recipe.pressingNumber < borneSuperieur) {
          nb += 1;
        }
      }
    })
    return nb;
  }

  determineColAndRow(recipe : Recipe) {
    if(recipe.pressingNumber != undefined) {
      if(this.clusterize && recipe.pressingNumber < 60) {
        return 0
      }
      if(recipe.pressingNumber < 30) {
        return 1
      }
      if(recipe.pressingNumber < 60) {
        return 2
      }
      if(recipe.pressingNumber < 60) {
        return 3
      }
    }
    return 1
  }

}
