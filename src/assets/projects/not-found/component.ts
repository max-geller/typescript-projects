/* Import Angular Components, HTML, httpClient, and Styles Here */

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  public apiKey = "API_KEY_HERE";
  randomGifData: any = [];
  gifUrl: string = "";
  constructor() {}

  ngOnInit() {
    this.randomConfusedGif().subscribe((data) => {
      this.randomGifData = data;
      this.gifUrl = this.randomGifData.data.images.original.url;
    });
  }

  randomConfusedGif() {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}&tag=confused, what, funny, wtf, reaction&rating=g`
    );
  }
}
