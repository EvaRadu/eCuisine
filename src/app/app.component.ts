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

  }
}

export let chefs : Chef[] = JSON.parse(JSON.stringify(chefsJson)).chefs;
export let recipes: Recipe[]= JSON.parse(JSON.stringify(recipesJson)).recipes;
export let tasks : Task[] = [];
