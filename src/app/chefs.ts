import {ThemePalette} from '@angular/material/core';

  export class Chef {
    id!: number;
    name!: string;
    level!: string;


    constructor(id: number, name: string, level: string) {
        this.id = id;
        this.name = name;
        this.level = level;
    }
  }
