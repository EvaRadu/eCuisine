import { Component, OnInit, ViewChild,EventEmitter, ElementRef, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import  { changeType, Task } from '../task';
import { Recipe } from '../recipe';
import { tasks, recipes, chefs} from '../app.component';
import { SocketService } from '../services/socket.service';
import { Chef } from '../chef';

//@ViewChild('myToolbar') myToolbar : ElementRef;


@Component({
  selector: 'app-toolbar-e-cuisine',
  templateUrl: './toolbar-e-cuisine.component.html',
  styleUrls: ['./toolbar-e-cuisine.component.scss'],
  providers: [DatePipe]
})

export class ToolbarECuisineComponent implements OnInit {
dateTime: any;
toogle = true;
status = 'Enable'

constructor(private socketService: SocketService){}


@Output() messageEvent = new EventEmitter<string>();
  @Input() mode !: string;  // to know if the user is on the tablet or tv mode (to display the left buttons or not)
  @Input() profile !: string; 
  chef !: Chef;

  // get the new time every second and put it into the variable dateTime 
  ngOnInit(): void {
    setInterval(() => {this.dateTime = new Date();  
    }, 1000)
    this.chef = chefs.find(x => x.id == Number(this.profile));
  };

  changeModeUser(val) {
    changeType(val);
  }

  addTask(){

    // prendre un recette au hasard
    let rd = Math.floor(Math.random()*recipes.length)
    let recipe = recipes[rd];
    // prendre un chef au hasard
    let chef = this.chef;//chefs[Math.floor(Math.random()*chefs.length)];

    // créer une tasks a partir de la recette
    let task = new Task(tasks.length+1, recipe.name, false, "primary", recipe, chef);

    // ajouter la tache dans la liste des taches
    tasks.push(task);

    this.socketService.updateTasks();
  }
  
}


