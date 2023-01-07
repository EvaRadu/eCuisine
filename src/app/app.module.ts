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
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {ProgressBarMode} from '@angular/material/progress-bar';
import {MatProgressBarModule } from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { TeamComponent } from './team/team.component'
import { AvatarModule } from '@coreui/angular';
import { PopUpComponent } from './pop-up/pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarECuisineComponent,
    CardComponent,
    ListeComponent,
    CardClusterComponent,
    BoardComponent,
    TvComponent,
    TabletComponent,
    ProgressBarComponent,
    TeamComponent,
    PopUpComponent
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
    MatGridListModule,
    ScrollingModule,
    MatProgressBarModule,
    MatIconModule,
    AvatarModule,
    MatDialogModule
    ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
