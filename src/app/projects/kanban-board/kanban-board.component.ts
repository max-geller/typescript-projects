import { Component, OnInit } from "@angular/core";
import { PROJECTS_LIST } from "./../../data/projects.data";
import { ActivatedRoute } from "@angular/router";
@Component({
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent implements OnInit {
  // Load Markdown and Code files
  info!: string;
  details!: string;
  component!: string;
  template!: string;
  styles!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    const projectData = PROJECTS_LIST.find(
      (project) => project.link.slice(1) === route
    );

    // Set the local variables
    if (projectData && 'details' in projectData.files[0]) {
      this.info = projectData.files[0].info;
      this.details = projectData.files[0].details;
      this.component = projectData.files[0].component;
      this.template = projectData.files[0].template;
      this.styles = projectData.files[0].styles;

    }
  }

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
