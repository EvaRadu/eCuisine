import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarECuisineComponent } from './toolbar-e-cuisine/toolbar-e-cuisine.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListeComponent } from './liste/liste.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CardClusterComponent } from './card-cluster/card-cluster.component';
import { BoardComponent } from './board/board.component'; 
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarECuisineComponent,
    CardComponent,
    ListeComponent,
    CardClusterComponent,
    BoardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    FormsModule, 
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
