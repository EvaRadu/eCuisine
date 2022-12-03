import {ThemePalette} from '@angular/material/core';

  export interface Task {
    id : number;
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
  }
  export const tasks : Task[]= [
    {
      id : 0,
      name: 'Pâtes au pesto',
      completed: false,
      color: 'primary',
      subtasks: [
        {id : 0, name: 'Faire cuire les pâtes al dente', completed: false, color: 'accent'},
        {id : 1, name: "Dans un mortier, pilez le basilic avec l'ail et les pignons jusqu'à obtention d'une crème lisse.", completed: false, color: 'accent'},
        {id : 2, name: "Mettez la préparation dans un bol, puis ajouter l'huile peu à peu en fouettant.", completed: false, color: 'accent'},
        {id : 3, name: "Rajoutez les fromage râpés, assaisonner et mélangez.", completed: false, color: 'accent'},
        {id : 4, name: "Egouttez les pâtes, méxlangez-les au pesto et servez.", completed: false, color: 'accent'},
      ],
    },
    {
      id : 1,
      name: 'Salade César',
      completed: false,
      color: 'primary',
      subtasks: [
        {id : 0, name: 'Lavez la salade.', completed: false, color: 'accent'},
        {id : 1,name: "Faîtes cuire le poulet.", completed: false, color: 'accent'},
        {id : 2,name: "Mélangez.", completed: false, color: 'accent'},
      ],
    },
    {
      id : 2,
      name: 'Fondant au chocolat',
      completed: false,
      color: 'primary',
      subtasks: [
        {id : 0, name: 'Faîtes fondre le chocolat.', completed: false, color: 'accent'},
        {id : 1, name: "Enfournez le tout.", completed: false, color: 'accent'},
        {id : 2, name: "Ajoutez une de la chantilly.", completed: false, color: 'accent'},
      ],
    }
    
  ];
  