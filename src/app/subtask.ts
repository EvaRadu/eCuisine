import { ThemePalette } from "@angular/material/core";

export class subtask{
    completed: boolean;
    color: ThemePalette;
    pressingNumber ?: number;
    name: string;
    constructor(completed: boolean, color: ThemePalette, name: string){
        this.completed = completed;
        this.color = color;
        this.pressingNumber = 70;
        this.name = name;
    }


}