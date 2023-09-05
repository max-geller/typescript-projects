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
    // Get the current route
    const route = this.route.snapshot.url[0].path;

    // Find the project data for the current route
    const projectData = PROJECTS_LIST.find(
      (project) => project.link.slice(1) === route
    );

    // Set the local variables from PROJECTS_LIST
    if (projectData && 'details' in projectData.files[0]) {
      console.log('Info: ' + this.info);
      console.log('Details: ' + this.details);
      console.log('Component: ' + this.component);
      console.log('Template: ' + this.template);
      console.log('Styles: ' + this.styles);
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
