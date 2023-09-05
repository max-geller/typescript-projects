import { Component, OnInit } from "@angular/core";
import { PROJECTS_LIST } from "./../../data/projects.data";
import { ActivatedRoute } from "@angular/router";
import { GiphyService } from "src/app/projects/not-found/giphy.service";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  // Set Project Variables
  info!: string;
  details!: string;
  component!: string;
  template!: string;
  styles!: string;

  randomGifData: any = [];
  gifUrl: string = "";
  constructor(private route: ActivatedRoute, public service: GiphyService) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    const projectData = PROJECTS_LIST.find(
      (project) => project.link.slice(1) === route
    );
    // Set the local variables
    if (projectData && "details" in projectData.files[0]) {
      this.info = projectData.files[0].info;
      this.details = projectData.files[0].details;
      this.component = projectData.files[0].component;
      this.template = projectData.files[0].template;
      this.styles = projectData.files[0].styles;
    }
    this.service.randomConfusedGif().subscribe((data) => {
      this.randomGifData = data;
      this.gifUrl = this.randomGifData.data.images.original.url;
    });
  }
}
