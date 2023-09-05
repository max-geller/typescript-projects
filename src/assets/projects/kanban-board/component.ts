/* Import Angular Components, HTML, Styles Here */


@Component({
  template: ``,

  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent {
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
