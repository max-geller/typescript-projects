import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <markdown clipboard lineNumbers [src]="info"></markdown>

    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>

    <markdown clipboard lineNumbers [src]="overview"></markdown>
    <markdown clipboard lineNumbers [src]="code"></markdown>
  `,
  styleUrls: ["./analog-clock.component.css"],
})
export class AnalogClockComponent implements OnInit {
  // Load Markdown and Code files
  info = "assets/projects/analog-clock/info.md";
  overview = "assets/projects/analog-clock/overview.md";
  code = "assets/projects/analog-clock/code.ts";

  // App-Specific Variables
  hourHand = document.querySelector(".hour-hand");
  minuteHand = document.querySelector(".minute-hand");
  secondHand = document.querySelector(".second-hand");

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
}
