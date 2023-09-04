// This project includes a basic analog clock written with typescript
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./analog-clock.component.html",
  styles: [
    `
      .clock {
        width: 10rem;
        height: 10rem;
        border: 20px solid white;
        border-radius: 50%;
        margin: 50px auto;
      }

      .code-container {
        padding: 20px;
        flex: 1;
        background-color: #1e1e1e;
        color: white;
      }
    `,
  ],
})
export class AnalogClockComponent implements OnInit {
  markdown = "assets/projects/analog-clock.md";
  hourHand = document.querySelector(".hour-hand");
  minuteHand = document.querySelector(".minute-hand");
  secondHand = document.querySelector(".second-hand");
  title = "Analog Clock";
  code = `constructor() {}

  async setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
  }`;

  constructor() {}

  async setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
  }

  ngOnInit() {
    setInterval(this.setDate, 1000);
  }

  // ngOnInit() {
}
