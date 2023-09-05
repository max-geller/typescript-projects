import { Component } from "@angular/core";

@Component({
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent {
  // Load Markdown and Code files
  info = "assets/projects/kanban-board/info.md";
  details = "assets/projects/kanban-board/details.md";
  component = "assets/projects/kanban-board/component.ts";
  template = "assets/projects/kanban-board/template.html";
  styles = "assets/projects/kanban-board/style.css";

  // Create Initial Kanban Columns
  columns = [
    { id: 1, name: "Pending" },
    { id: 2, name: "In Progress" },
    { id: 3, name: "Complete" },
  ];

  addColumn() {
    const id = this.columns.length + 1;
    this.columns.push({ id, name: `Column ${id}` });
  }

  removeColumn(columnId: number) {
    this.columns = this.columns.filter((column) => column.id !== columnId);
  }
}
