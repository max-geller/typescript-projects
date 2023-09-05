import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GiphyService {
  public apiKey = "1ZwDyBifMFkPxjFQGbVB0u5o1lBNNgXr";

  constructor(public http: HttpClient) {}

  randomConfusedGif() {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}&tag=confused, what, funny, wtf, reaction&rating=g`
    );
  }

}
