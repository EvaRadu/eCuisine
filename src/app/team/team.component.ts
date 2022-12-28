import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { chefs } from '../app.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  
  chefs = chefs;

  constructor(private router: Router) { }

  redirection(url: string) {
    this.router.navigateByUrl("tablet/myProfile/"+url);
  }

}
