import { NgModule } from "@angular/core";
import { SecurityContext } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MaterialModule } from "./shared/material/material.module";

// Import ngx-markdown and PrismJS Libraries:
import { MarkdownModule } from "ngx-markdown";
import "prismjs";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";

// Import Shared Components:
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidenavComponent } from "./shared/sidenav/sidenav.component";

// Import Projects:
import { IntroComponent } from "./intro/intro.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";
import { TicTacToeComponent } from "./projects/tic-tac-toe/tic-tac-toe.component";
import { VoltageDropComponent } from "./projects/voltage-drop/voltage-drop.component";
import { KanbanBoardComponent } from "./projects/kanban-board/kanban-board.component";
import { ImageGalleryComponent } from "./projects/image-gallery/image-gallery.component";
import { WeatherWidgetComponent } from "./projects/weather-widget/weather-widget.component";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from "./projects/not-found/not-found.component";

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
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClientModule,
    }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
