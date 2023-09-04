import { ChangeDetectionStrategy, Component } from "@angular/core";
import { PROJECTS_LIST } from "./../data/projects";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  // Import projects list from projects.ts
  projects = PROJECTS_LIST;
  // Create a variable called "disableLink" and set it to false unless projects.status = "complete"
  constructor(public router: Router) {}

  route(project: any) 

  
  {
    if (project.status === "complete") {
      this.router.navigate([project.link]);
    }
  }




}
