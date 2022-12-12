import { ThemePalette } from "@angular/material/core";

export class Subtask{
    completed: boolean;
    name: string;
    
    constructor(completed: boolean, name: string){
        this.completed = completed;
        this.name = name;
    }


}