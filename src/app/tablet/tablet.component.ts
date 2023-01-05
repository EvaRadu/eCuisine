import {Component, HostListener, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { tasks, recipes } from '../app.component';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})


export class TabletComponent implements OnInit {
  title = 'ecuisine';
  @Input() profile !: string;

  constructor(private router: Router ) {
  }

  ngOnInit() {
    var table = this.router.url.split("/");
    this.profile = table[table.length-1];
    console.log(this.profile);
  }

}

