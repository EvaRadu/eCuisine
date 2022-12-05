import {ThemePalette} from '@angular/material/core';

  export class Task {
    id : number;
    name: string;
    completed: boolean;
    pressingNumber ?: number;
    color: ThemePalette;
    subtasks?: Task[];

    constructor(id: number, name: string, completed: boolean, color: ThemePalette, subtasks?: Task[]) {
      this.id = id;
      this.name = name;
      this.completed = completed;
      this.color = color;
      this.subtasks = subtasks;
      this.pressingNumber = 70;
    }
  }

  export const tasks : Task[]= [
    new Task(0,'Pâtes au pesto',false,'primary', [
      new Task(0,'Faire cuire les pâtes al dente',false,'accent'),
      new Task(1,"Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", false, 'accent'),
      new Task(2, "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", false, 'accent'),
      new Task(3, "Rajoutez les fromage râpés, assaisonner et mélangez.", false, 'accent'),
      new Task(4, "Egouttez les pâtes, méxlangez-les au pesto et servez.", false, 'accent'),
    ]),
    new Task(1,'Salade César', false, 'primary', [
      new Task(0,'Lavez la salade.',false, 'accent'),
      new Task(1,"Faîtes cuire le poulet.", false, 'accent'),
      new Task(2,"Mélangez.", false, 'accent'),
    ]),
    new Task(2, 'Fondant au chocolat', false, 'primary', [
      new Task(0, 'Faîtes fondre le chocolat.', false, 'accent'),
      new Task(1, "Enfournez le tout.", false, 'accent'),
      new Task(2, "Ajoutez une de la chantilly.", false, 'accent')
    ]),
    new Task(0,'Pâtes au pesto',false,'primary', [
      new Task(0,'Faire cuire les pâtes al dente',false,'accent'),
      new Task(1,"Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", false, 'accent'),
      new Task(2, "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", false, 'accent'),
      new Task(3, "Rajoutez les fromage râpés, assaisonner et mélangez.", false, 'accent'),
      new Task(4, "Egouttez les pâtes, méxlangez-les au pesto et servez.", false, 'accent'),
    ]),
    new Task(1,'Salade César', false, 'primary', [
      new Task(0,'Lavez la salade.',false, 'accent'),
      new Task(1,"Faîtes cuire le poulet.", false, 'accent'),
      new Task(2,"Mélangez.", false, 'accent'),
    ]),
    new Task(2, 'Fondant au chocolat', false, 'primary', [
      new Task(0, 'Faîtes fondre le chocolat.', false, 'accent'),
      new Task(1, "Enfournez le tout.", false, 'accent'),
      new Task(2, "Ajoutez une de la chantilly.", false, 'accent')
    ])
  ];


