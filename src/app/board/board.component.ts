import { Component, HostListener, Input, ViewChild } from '@angular/core';
import {Recipe, recipes} from './../recipes';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {
  recipes = recipes;
  clusterize = true;
  breakpoint = 5;
  notCluster = "Red"
  borne = 60;
  borneSuperieur = 100;


  
  notClusterize(recipe: Recipe) {
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
    if (recipe.pressingNumber != undefined) {
      return recipe.pressingNumber >= this.borne && recipe.pressingNumber < this.borneSuperieur && this.clusterize;
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

  doCluster(typeCluster: String) {
    return this.notCluster != typeCluster
  }


  numberOfGreen() {
    let nbGreen = 0;
    recipes.forEach(function(recipe) {
      if(recipe.pressingNumber != undefined) {
        if(recipe.pressingNumber < 30) {
          nbGreen += 1;
        }
      }
    })
    return nbGreen;
  }

  numberOfRed() {
    let nbRed = 0;
    recipes.forEach(function(recipe) {
      if(recipe.pressingNumber != undefined) {
        if (recipe.pressingNumber < 30) {
          nbRed += 1;
        }
      }
    })
    return nbRed;
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

  numberOfYellow() {
    let nbYellow = 0;
    recipes.forEach(function(recipe) {
      if(recipe.pressingNumber != undefined) {
        if(recipe.pressingNumber >= 30 && recipe.pressingNumber < 60) {
          nbYellow += 1;
        }
      }
    })
    return nbYellow;
  }

}
