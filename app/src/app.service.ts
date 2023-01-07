import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    myGlobalVar;
    
    constructor(){
      this.myGlobalVar = "";
      console.log("My global variable is initialized");

    }
    
    setMyGV(val: string){
        this.myGlobalVar = val;
        console.log("My global variable value: " + this.myGlobalVar);
    }
    
    getMyGV(){
      return this.myGlobalVar;
    }
}