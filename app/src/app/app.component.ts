import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import { Task } from './task';
import * as recipesJson from "./recipes.json";
import * as chefsJson from "./chefs.json";
import {Recipe} from "./recipe"; 
import { Chef } from "./chef";
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ecuisine';

  constructor(private socketService: SocketService){}

  ngOnInit(): void {
 
    this.socketService.fetchTasks();

    this.socketService.onFetchTasks().subscribe((data: any) => {
      console.log("fetch datas")
      console.log(data);
      let theTasks = JSON.parse(JSON.stringify(data));
      theTasks.forEach(t => {
        tasks.push(t as Task);
      })
    });
  }
}   

export let chefs : Chef[] = JSON.parse(JSON.stringify(chefsJson)).chefs;
export let recipes: Recipe[]= JSON.parse(JSON.stringify(recipesJson)).recipes;
export let tasks : Task[] = [];
 