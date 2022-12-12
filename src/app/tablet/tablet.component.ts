import {Component, HostListener, OnInit} from '@angular/core';
import { tasks, recipes } from '../app.component';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})


export class TabletComponent implements OnInit {
  title = 'ecuisine';

  ngOnInit() {
  
  }

}

