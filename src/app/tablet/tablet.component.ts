import {Component, HostListener, OnInit} from '@angular/core';
import {Task, recipes} from '../task';
import { tasks } from '../app.component';
@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})


export class TabletComponent implements OnInit {
  title = 'ecuisine';

  ngOnInit() {
    console.log()
    setInterval(() => {
      let index = Math.floor(Math.random() * (recipes.length))

      console.log(index)
      tasks[index].pressingNumber = Math.random() * 100;
    }, 1000);
  }

}

