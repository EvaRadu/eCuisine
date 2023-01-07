import { TemplateBindingParseResult } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { TabletComponent } from './tablet/tablet.component';
import { TeamComponent } from './team/team.component';
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

    routes.push({ path: 'tablet/myProfile' , component : TeamComponent } )  // on crée une route en mode tablet pour l'équipe

    for(let i=0; i<chefs["chefs"].length; i++) {  // Pour chaque chef, on crée une route en mode tablet
      console.log('tablet/' + chefs["chefs"][i]["name"].toLowerCase());
      routes.push({ path: 'tablet/myProfile/chef' + chefs["chefs"][i]["id"], component: TabletComponent })
      //console.log(chefs["chefs"][i]["name"])
    }
  }


 }

