import {Component, HostListener, OnInit} from '@angular/core';
import {Task } from '../task';
import { Recipe } from '../recipe';
import { chefs, recipes, tasks } from '../app.component'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})


export class TvComponent implements OnInit {
  title = 'ecuisine';

  ngOnInit() {

  }
}

