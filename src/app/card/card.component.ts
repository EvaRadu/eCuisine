import { Component, Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { modeUser } from '../task';
import { Recipe } from '../recipe';
import { recipes, tasks, chefs } from '../app.component';



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

  getEndOfRecipe() : any {
    var t = new Date(this.dateTime);
    t.setSeconds(t.getSeconds() + this.recipe.time);
    return t;
  }

  intervalColor = setInterval(this.getColor, 10000);

  getColor() {
    console.log(Math.abs(this.getEndOfRecipe() - Date.now()));
    if (this.recipe.pressingNumber != undefined) {
      if ( Math.abs(this.getEndOfRecipe() - Date.now()) < 5000) {
        return "red"
      } else if (( Math.abs(this.getEndOfRecipe() - Date.now()) > 5000) &&  Math.abs(this.getEndOfRecipe() - Date.now()) < 10000) {
        return "yellow"
      } else {
      return "green"
      }
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
