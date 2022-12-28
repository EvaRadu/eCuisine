import {Component, Input} from '@angular/core';
import { Recipe } from '../recipe';
import {ChangeDetectionStrategy} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import { Task } from '../task'
import { Chef } from '../chef'
import { tasks, recipes, chefs} from '../app.component'
import { Output, EventEmitter } from '@angular/core';



/** @title Checkboxes with reactive forms */
@Component({
  selector: 'liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ListeComponent {
  @Input() task !: Task;
  @Input() mode !: string;


  @Output() checkerEvent = new EventEmitter<boolean>();
  
  send() {
    console.log("send")
    this.checkerEvent.emit(this.checked && this.allComplete);
  }


  ngOnInit(): void {}

  ngOnChanges(): void {
    this.updateAllComplete();
  }

  allComplete: boolean = false;
  checked = false;

  percentage: number = 0;

  
  updatePercentage() {
    if (this.task.subtasks == null) {
      return;
    }
    this.percentage = this.task.subtasks.filter(t => t.completed).length / this.task.subtasks.length;
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.task.completed = this.allComplete;
    this.updatePercentage();
  }

  someComplete(): boolean {
    this.updatePercentage();
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.updatePercentage();
    this.allComplete = completed;
    this.task.completed = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

}
