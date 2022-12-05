import {Component, HostListener, OnInit} from '@angular/core';
import { recipes} from './recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'ecuisine';
  recipes = recipes;

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (recipes.length))
      console.log(index)
      this.recipes[index].pressingNumber = Math.random() * 100;
    }, 1000);
  }
}

