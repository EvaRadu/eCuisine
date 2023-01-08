import { TemplateBindingParseResult } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { CommandsComponent } from './commands/commands.component';
import { TabletComponent } from './tablet/tablet.component';
import { TeamComponent } from './team/team.component';
import { TvComponent } from './tv/tv.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'ecuisine', component: MenuComponent },        // Menu pour choisir entre tablet et tv
  { path: 'tv', component: TvComponent },                // Ecran de la télé
  { path: 'commands', component: CommandsComponent},     // Ecran pour rajouter des commandes
  { path: 'tablet/myProfile', component: TeamComponent}  // Menu pour choisir le chef
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {

    let chefs = require("./chefs.json");  // On récupère le fichier json des chefs

    for(let i=0; i<chefs["chefs"].length; i++) {  // Pour chaque chef, on crée une route en mode tablet
      console.log('tablet/' + chefs["chefs"][i]["name"].toLowerCase());
      routes.push({ path: 'tablet/myProfile/' + chefs["chefs"][i]["id"], component: TabletComponent })
    }
  }


 }

