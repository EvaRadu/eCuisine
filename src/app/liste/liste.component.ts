import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent {
  task: Task = {
    name: 'Pâtes au pesto',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Faire cuire les pâtes al dente', completed: false, color: 'accent'},
      {name: "Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", completed: false, color: 'accent'},
      {name: "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", completed: false, color: 'accent'},
      {name: "Rajoutez les fromage râpés, assaisonner et mélangez.", completed: false, color: 'accent'},
      {name: "Egouttez les pâtes, méxlangez-les au pesto et servez.", completed: false, color: 'accent'},
    ],
  };

  ngOnInit(): void {}



  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
