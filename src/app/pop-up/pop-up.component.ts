import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { cilThumbDown } from '@coreui/icons';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  name: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data) { 
    this.name = data.name;
  }

}
