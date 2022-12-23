import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  //{ path: 'tablet', component: TabletComponent },
  { path: 'tv', component: TvComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {

    let chefs = require("./chefs.json");  // on récupère le fichier json des chefs

    for(let i=0; i<chefs["chefs"].length; i++) {  // Pour chaque chef, on crée une route en mode tablet
      console.log('tablet/' + chefs["chefs"][i]["name"].toLowerCase());
      routes.push({ path: 'tablet/' + chefs["chefs"][i]["name"].toLowerCase(), component: TabletComponent })
      //console.log(chefs["chefs"][i]["name"])
    }
  }


 }

