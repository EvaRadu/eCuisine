import { Component, OnInit, ViewChild,EventEmitter, ElementRef, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import  { changeType } from './../tasks';

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

@Output() messageEvent = new EventEmitter<string>();
  @Input() mode!: string;  // to know if the user is on the tablet or tv mode (to display the left buttons or not)



  // get the new time every second and put it into the variable dateTime 
  ngOnInit(): void {
    setInterval(() => {this.dateTime = new Date();  
    }, 1000)
  };

  changeModeUser(val) {
    changeType(val);
  }
  
}


