import { Component } from "@angular/core";



@Component({
  template: ` <markdown clipboard lineNumbers [src]="info"></markdown>
<button (click)="addColumn()">Add Column</button>

<div class="kanban-container" style="height: 400px;">
  <div *ngFor="let column of columns" class="kanban-column">
    {{ column.name }}
    <button (click)="removeColumn(column.id)">X</button>
    <!-- Add task cards here -->
  </div>
</div>
    <markdown clipboard lineNumbers [src]="overview"></markdown>
    <markdown clipboard lineNumbers [src]="code"></markdown>`,

  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent {
  columns = [
    { id: 1, name: 'Pending' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Complete' },
  ];
  info = "assets/projects/kanban-board/info.md";
  overview = "assets/projects/kanban-board/overview.md";
  code = "assets/projects/kanban-board/code.ts";

  addColumn() {
    const id = this.columns.length + 1;
    this.columns.push({ id, name: `Column ${id}` });
  }
  
  removeColumn(columnId: number) {
    this.columns = this.columns.filter(column => column.id !== columnId);
  }
}
