import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Task } from '../task';
import { chefs, recipes, tasks } from '../app.component'
import { coerceStringArray } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(public socket: Socket) {
   }

  //emit event
  fetchTasks(){
    this.socket.emit('fetchTasks');
  }

  // listen event
  onFetchTasks(){
    return this.socket.fromEvent('fetchedTasks');
  }


  updateTasks(){
    console.log("update task socket");
    this.socket.emit('udpateTasks',JSON.parse(JSON.stringify(tasks)));
  }

}
