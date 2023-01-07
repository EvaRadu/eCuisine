import { Component, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { cilThumbDown } from '@coreui/icons';
import { Chef } from '../chef';




@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnDestroy {

  test !: boolean;
  chef : Chef;
  name : string;
  constructor(@Inject(MAT_DIALOG_DATA) public data) { 
    this.chef = data.chef;
  }

  ngOnDestroy(): void {
    console.log("destroy");
    console.log(this.test);
    console.log(this.chef.genre);
  }

}
