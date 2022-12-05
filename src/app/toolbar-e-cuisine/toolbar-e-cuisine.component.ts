import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-e-cuisine',
  templateUrl: './toolbar-e-cuisine.component.html',
  styleUrls: ['./toolbar-e-cuisine.component.scss'],
  providers: [DatePipe]
})

export class ToolbarECuisineComponent implements OnInit {
dateTime: any;
  
constructor(private router: Router) { }

  // get the new time every second and put it into the variable dateTime 
  ngOnInit(): void {
    setInterval(() => {this.dateTime = new Date();  
    }, 1000)
  }

  
  /*
  Si on veut afficher le bouton Tablette - Tv 

  modeTablette(){
    this.router.navigateByUrl('tablet');
  }
  */
  
}
