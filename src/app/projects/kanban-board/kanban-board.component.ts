import { Component } from "@angular/core";

@Component({
  template: ` <markdown clipboard lineNumbers [src]="info"></markdown>
    <div class="project-container" style="height: 400px;">
      <p>Project Container</p>
    </div>
    <markdown clipboard lineNumbers [src]="overview"></markdown>
    <markdown clipboard lineNumbers [src]="code"></markdown>`,

  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent {
  info = "assets/projects/kanban-board/info.md";
  overview = "assets/projects/kanban-board/overview.md";
  code = "assets/projects/kanban-board/code.ts";
}
