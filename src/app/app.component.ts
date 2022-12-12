import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import { Task } from './task';
import * as recipesJson from "./recipes.json";
import * as chefsJson from "./chefs.json";
import {Recipe} from "./recipe"; 
import { Chef } from "./chef";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ecuisine';

  ngOnInit(): void {
    console.log(chefs);

    for (let i=0; i<9; i++){
      tasks.push(new Task(i,"",false, "primary", recipes[i%3], chefs[i%4]));
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

export let chefs = <Chef[]>JSON.parse(JSON.stringify(chefsJson));
export let recipes = <Recipe[]>JSON.parse(JSON.stringify(recipesJson));
export let tasks = [];