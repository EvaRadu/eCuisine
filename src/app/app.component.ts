import {Component, HostListener, OnInit} from '@angular/core';
import {recipes} from './tasks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (recipes.length))
      recipes[index].pressingNumber = Math.random() * 100;
    }, 1000);
  }


}

