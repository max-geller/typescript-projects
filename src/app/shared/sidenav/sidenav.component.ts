import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS_LIST } from './../data/projects';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SidenavComponent {
  
  // Import projects list from projects.ts
  projects = PROJECTS_LIST;

}
