import { Component } from "@angular/core";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})

export class NavbarComponent {
  faGitHub = faGithub;

  openGitInNewTab() {
    window.open('https://github.com/max-geller/typescript-projects', '_blank');
  }
}
