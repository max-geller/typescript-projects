import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { MarkdownModule } from 'ngx-markdown';


import { IntroComponent } from "./intro/intro.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { TicTacToeComponent } from './projects/tic-tac-toe/tic-tac-toe.component';
import { VoltageDropComponent } from './projects/voltage-drop/voltage-drop.component';
import { KanbanBoardComponent } from './projects/kanban-board/kanban-board.component';
import { ImageGalleryComponent } from './projects/image-gallery/image-gallery.component';
import { WeatherWidgetComponent } from './projects/weather-widget/weather-widget.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnalogClockComponent,
    IntroComponent,
    TicTacToeComponent,
    VoltageDropComponent,
    KanbanBoardComponent,
    ImageGalleryComponent,
    WeatherWidgetComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
