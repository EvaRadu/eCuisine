import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppService } from 'src/app.service';
import  { changeType } from './../recipes';

//@ViewChild('myToolbar') myToolbar : ElementRef;

@Component({
  selector: 'app-toolbar-e-cuisine',
  templateUrl: './toolbar-e-cuisine.component.html',
  styleUrls: ['./toolbar-e-cuisine.component.scss'],
  providers: [DatePipe]
})

export class ToolbarECuisineComponent implements OnInit {
  dateTime: any;
  constructor(private appService: AppService) { };
  
  
  // get the new time every second and put it into the variable dateTime 
  ngOnInit(): void {
    setInterval(() => {this.dateTime = new Date();  
    }, 1000)
  };

  changeModeUser(val) {
    changeType(val);
  }
  
}
