import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PROJECTS_LIST } from "./../../data/projects.data";
import { MatTableDataSource } from "@angular/material/table";

export interface logData {
  date: Date;
  duration: number;
  type: string;
  notes: string;
}

const INITIAL_DATA: logData[] = [
  {
    date: new Date("2023-09-04"),
    duration: 25,
    type: "Work",
    notes: "First Pomodoro",
  },
];

@Component({
  templateUrl: "./pomodoro.component.html",
  styleUrls: ["./pomodoro.component.css"],
})
export class PomodoroComponent implements OnInit {
  // Set Markdown and Code Variables
  info!: string;
  details!: string;
  component!: string;
  template!: string;
  styles!: string;

  displayedColumns: string[] = ["date", "duration", "type", "notes"];
  dataSource = INITIAL_DATA;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    const projectData = PROJECTS_LIST.find(
      (project) => project.link.slice(1) === route
    );

    // Set the local variables from PROJECTS_LIST
    if (projectData && "details" in projectData.files[0]) {
      this.info = projectData.files[0].info;
      this.details = projectData.files[0].details;
      this.component = projectData.files[0].component;
      this.template = projectData.files[0].template;
      this.styles = projectData.files[0].styles;
    }
  }
}
