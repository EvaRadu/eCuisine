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

  @Input() typeAffichage !: boolean;



  @Output() checkerEvent = new EventEmitter<boolean>();

  checked: boolean;

  send() {
    console.log("send");
    this.task.completedTime = Date.now();
    setTimeout(()=> {
    this.checkerEvent.emit(this.checked && this.allComplete);
    },250);
  }


  ngOnInit(): void {
    console.log(this.task);
    this.checked = this.task.completed;
  }

  ngOnChanges(): void {
    this.updateAllComplete();
  }

  allComplete: boolean = false;

  percentage: number = 0;


  updatePercentage() {
    if (this.task.subtasks == null) {
      return;
    }
    this.percentage = this.task.subtasks.filter(t => t.completed).length / this.task.subtasks.length;
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.checked = this.allComplete;
    this.task.completed = this.allComplete;
    setTimeout(()=> {
      this.task.destroy = this.task.completed;
      this.updatePercentage();
    },250);
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
