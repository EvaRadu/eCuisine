import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarECuisineComponent } from './toolbar-e-cuisine/toolbar-e-cuisine.component';
import { ListeComponent } from './liste/liste.component';
import { CardComponent } from './card/card.component';
import { CardClusterComponent } from './card-cluster/card-cluster.component';
import { BoardComponent } from './board/board.component'; 
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import {MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const config: SocketIoConfig = {
  url: '',
  options: {
    transports: ['websocket']
  }
}
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
    ProgressBarComponent

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
    MatProgressBarModule ,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
