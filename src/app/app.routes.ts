import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PROJECTS_LIST } from "./data/projects.data";
import { IntroComponent } from "./intro/intro.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";
import { KanbanBoardComponent } from "./projects/kanban-board/kanban-board.component";
import { WeatherWidgetComponent } from "./projects/weather-widget/weather-widget.component";
import { ImageGalleryComponent } from "./projects/image-gallery/image-gallery.component";
import { TicTacToeComponent } from "./projects/tic-tac-toe/tic-tac-toe.component";
import { VoltageDropComponent } from "./projects/voltage-drop/voltage-drop.component";
import { NotFoundComponent } from "./projects/not-found/not-found.component";
import { PomodoroComponent } from "./projects/pomodoro/pomodoro.component";

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
  { path: "pomodoro", component: PomodoroComponent },
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
