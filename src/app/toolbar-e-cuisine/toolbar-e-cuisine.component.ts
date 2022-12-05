import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  @Output() messageEvent = new EventEmitter<string>();
  // get the new time every second and put it into the variable dateTime 
  ngOnInit(): void {
    setInterval(() => {this.dateTime = new Date();  
    }, 1000)
  }
  
  sendAddOrder(){
    this.messageEvent.emit("addOrder");
    console.log("add order");
  }

}


