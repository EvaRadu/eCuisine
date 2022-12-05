import { Component, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes';
import { Output } from '@angular/core';
import { modeUser } from '../recipes';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() title !: string;
  @Input() idee !: number;
  @Input() recipe !: Recipe;
  @Input() type !: string;
  @Input() mode !: string;


  @Output() onChange = new EventEmitter<any>();


  getColor() {
    if (this.recipe.pressingNumber != undefined) {
      if(this.recipe.pressingNumber < 30) {
        return "green"
      } else if (this.recipe.pressingNumber < 60) {
        return "yellow"
      }
      return "red"
    }
    return "pink"
  }

  test() {
  return  modeUser=='novice';
 }
}
