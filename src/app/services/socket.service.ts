import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  //emit event
  fetchTasks(){
    this.socket.emit('fetchTasks');
  }

  // listen event
  onFetchTasks(){
    return this.socket.fromEvent('fetchTasks');
  }

}
