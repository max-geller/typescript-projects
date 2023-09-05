import { Component, Input, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  @Input() sidenav!: MatSidenav;

  
  faGitHub = faGithub;
  faBars = faBars;

  openGitInNewTab() {
    window.open("https://github.com/max-geller/typescript-projects", "_blank");
  }
  
  expandSidenav() {
    this.sidenav.open();
  }
  closeSidenav() {
    this.sidenav.close();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
