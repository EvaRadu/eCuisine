import {Component, HostListener, OnInit} from '@angular/core';
import { Task, tasks} from './tasks';
import * as recipesJson from "./recipes.json";
import {Recipe} from "./recipe"; 
import { allRecipes } from './allRecipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecuisine';
  tasks = tasks;
  myRecipes: allRecipes;

    
  ngOnInit(): void {
    this.myRecipes = new allRecipes(recipesJson);
    console.log(this.myRecipes);
    for (let i=0; i<9; i++){
      tasks.push(new Task(0,false, "primary", this.myRecipes[i%3]));
    }
  }



  addOrder(){
    console.log("add order");
  }

  recieveMessage($event){
    console.log($event)
    this.addOrder();
    //tasks.push(new Task(0,false,"primary",))
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

