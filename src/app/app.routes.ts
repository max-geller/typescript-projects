import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { IntroComponent } from "./intro/intro.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";
import { KanbanBoardComponent } from "./projects/kanban-board/kanban-board.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "intro",
    pathMatch: "full",
  },
  { path: "intro", component: IntroComponent },
  { path: "analog-clock", component: AnalogClockComponent },
  { path: "kanban-board", component: KanbanBoardComponent },
  { path: "**", redirectTo: "intro" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
