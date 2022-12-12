import {Component, Input} from '@angular/core';
import { Recipe } from '../tasks';
import {ChangeDetectionStrategy} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";


/** @title Checkboxes with reactive forms */
@Component({
  selector: 'liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ListeComponent {
  @Input() recipe !: Recipe;
  @Input() mode !: string;


  ngOnInit(): void {}

  ngOnChanges(): void {
    this.updateAllComplete();
  }

  allComplete: boolean = false;
  percentage: number = 0;

  
  updatePercentage() {
    if (this.recipe.tasks == null) {
      return;
    }
    this.percentage = this.recipe.tasks.filter(t => t.completed).length / this.recipe.tasks.length;
  }

  updateAllComplete() {
    this.allComplete = this.recipe.tasks != null && this.recipe.tasks.every(t => t.completed);
    this.recipe.completed = this.allComplete;
    this.updatePercentage();
  }

  someComplete(): boolean {
    this.updatePercentage();
    if (this.recipe.tasks == null) {
      return false;
    }
    return this.recipe.tasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.updatePercentage();
    this.allComplete = completed;
    this.recipe.completed = completed;
    if (this.recipe.tasks == null) {
      return;
    }
    this.recipe.tasks.forEach(t => (t.completed = completed));
  }

}
