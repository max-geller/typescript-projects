import { Component, OnDestroy, OnInit } from "@angular/core";
import { GiphyService } from "src/app/projects/not-found/giphy.service";


@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  info = "assets/projects/not-found/info.md";
  overview = "assets/projects/not-found/overview.md";
  code = "assets/projects/not-found/code.ts";
  html = "assets/projects/not-found/html.html";
  css = "assets/projects/not-found/css.css";
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
