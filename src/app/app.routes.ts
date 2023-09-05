import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PROJECTS_LIST } from "./shared/data/projects";
import { IntroComponent } from "./intro/intro.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";
import { KanbanBoardComponent } from "./projects/kanban-board/kanban-board.component";
import { WeatherWidgetComponent } from "./projects/weather-widget/weather-widget.component";
import { ImageGalleryComponent } from "./projects/image-gallery/image-gallery.component";
import { TicTacToeComponent } from "./projects/tic-tac-toe/tic-tac-toe.component";
import { VoltageDropComponent } from "./projects/voltage-drop/voltage-drop.component";
import { NotFoundComponent } from "./projects/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "intro",
    pathMatch: "full",
  },
  { path: "intro", component: IntroComponent },
  { path: "analog-clock", component: AnalogClockComponent },
  { path: "kanban-board", component: KanbanBoardComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "weather-widget", component: WeatherWidgetComponent },
  { path: "image-gallery", component: ImageGalleryComponent },
  { path: "tic-tac-toe", component: TicTacToeComponent },
  { path: "voltage-drop", component: VoltageDropComponent },
  { path: "pomodoro-clock", redirectTo: "intro" },
  {
    path: "**",
    redirectTo: "/not-found",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
