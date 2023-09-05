import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PROJECTS_LIST } from "../../data/projects";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input() sidenav!: MatSidenav;

  projects = PROJECTS_LIST;
  constructor(public router: Router, private sidenavMethod: MatSidenav) {}

  route(project: any) {
    if (project.status === "complete") {
      this.router.navigate([project.link]);
      this.sidenavMethod.close();

    }
  }

}
