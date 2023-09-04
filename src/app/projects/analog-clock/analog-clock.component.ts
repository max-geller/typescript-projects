// This project includes a basic analog clock written with typescript
import { Component, OnInit } from "@angular/core";

@Component({
  template: `
  <div class="container">Analog Clock</div>
    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .clock {
        width: 30rem;
        height: 30rem;
        border: 20px solid white;
        border-radius: 50%;
        margin: 50px auto;
      }
    `,
  ],
})
export class AnalogClockComponent implements OnInit {
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
