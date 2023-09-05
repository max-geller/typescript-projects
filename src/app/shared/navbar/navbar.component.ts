import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  faGitHub = faGithub;
  faBars = faBars;
  constructor(private breakpointObserver: BreakpointObserver) {}

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
  ngOnInit() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      this.sidenav.close();
    }
  }
}
