import { Component } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { tasks, recipes, chefs} from '../app.component';
import { Task } from '../task';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent {

  constructor(private socketService: SocketService){}

  addTask(){

    // prendre un recette au hasard
    let rd = Math.floor(Math.random()*recipes.length)
    let recipe = recipes[rd];
    // prendre un chef au hasard
    let chef = chefs[Math.floor(Math.random()*chefs.length)];

    // créer une tasks a partir de la recette
    let task = new Task(tasks.length+1, recipe.name, false, "primary", recipe, chef);

    // ajouter la tache dans la liste des taches
    tasks.push(task);

    this.socketService.updateTasks();
  }

}
