import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: 'tablet', component: TabletComponent },
  { path: 'tv', component: TvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
