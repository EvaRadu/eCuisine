import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) { }

  redirectionTV() {
    this.router.navigateByUrl("tv");
  }

  redirectionTablet(){
    this.router.navigateByUrl("tablet/myProfile");
  }
}
