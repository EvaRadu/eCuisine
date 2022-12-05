import {Component, HostListener, OnInit} from '@angular/core';
import {Task, recipes} from '../recipes';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})


export class TvComponent implements OnInit {
  title = 'ecuisine';
  tasks = recipes;

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (recipes.length))
      console.log(index)
      this.tasks[index].pressingNumber = Math.random() * 100;
    }, 1000);
  }
}