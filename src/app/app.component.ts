import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import { Task } from './task';
import * as recipesJson from "./recipes.json";
import * as chefsJson from "./chefs.json";
import {Recipe} from "./recipe"; 
import { Chef } from "./chef";
import { HttpClient } from '@angular/common/http';
import { json } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ecuisine';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/tasks').subscribe((data) =>{
    tasks = JSON.parse(JSON.stringify(data)).datas.tasks;
    console.log(tasks);
    })
  }
}

export let chefs : Chef[] = JSON.parse(JSON.stringify(chefsJson)).chefs;
export let recipes: Recipe[]= JSON.parse(JSON.stringify(recipesJson)).recipes;
export let tasks : Task[] = [];
