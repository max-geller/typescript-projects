import { Component, OnDestroy, OnInit } from "@angular/core";
import { GiphyService } from "src/app/projects/not-found/giphy.service";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  // Load Markdown and Code files
  info = "assets/projects/not-found/info.md";
  details = "assets/projects/not-found/overview.md";
  component = "assets/projects/not-found/code.ts";
  template = "assets/projects/not-found/html.html";
  styles = "assets/projects/not-found/css.css";

  randomGifData: any = [];
  gifUrl: string = "";
  constructor(public service: GiphyService) {}

  ngOnInit() {
    this.service.randomConfusedGif().subscribe((data) => {
      this.randomGifData = data;
      this.gifUrl = this.randomGifData.data.images.original.url;
    });
  }
}
