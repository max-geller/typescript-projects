import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { IntroComponent } from "./intro/intro.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "intro",
    pathMatch: "full",
  },
  { path: 'posts/post/:article', component: IntroComponent }, 
  { path: "intro", component: IntroComponent },
  { path: "analog-clock", component: AnalogClockComponent },
  { path: "**", redirectTo: "intro" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
