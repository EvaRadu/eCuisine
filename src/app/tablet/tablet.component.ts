import {Component, HostListener, OnInit} from '@angular/core';
import {Task, recipes} from '../tasks';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})


export class TabletComponent implements OnInit {
  title = 'ecuisine';
  tasks = recipes;

  ngOnInit() {
    setInterval(() => {
      let index = Math.floor(Math.random() * (recipes.length))

      console.log(index)
      this.tasks[index].pressingNumber = Math.random() * 100;
    }, 10000);
  }

}

