import { Component, Input, EventEmitter } from '@angular/core';
import {Recipe, recipes} from '../tasks';
import { Output } from '@angular/core';
import { modeUser } from '../tasks';



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
  @Input() notEmptyCard !: boolean;
  dateTime : number =  Date.now();

  @Output() onChange = new EventEmitter<any>();

  getEndOfRecipe() {
    var t = new Date(this.dateTime);
    t.setSeconds(t.getSeconds() + this.recipe.time);
    return t;
  }
  getColor() {
    if (this.recipe.pressingNumber != undefined) {
      if (this.recipe.pressingNumber < 30) {
        return "green"
      } else if (this.recipe.pressingNumber < 60) {
        return "yellow"
      }
      return "red"
    }
    return "pink"
  }

  test() {
    return modeUser == 'novice';
  }

  onClickButton() {
    for (var i = 0; i < recipes.length; i++) {
      if (this.recipe.id === recipes[i].id && this.recipe.completed) {
        recipes.splice(i, 1);
        return
      }
    }
  }
}
