import {
  Component,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from "@angular/core";
@Component({
  template: `
    <markdown clipboard lineNumbers [src]="info"></markdown>
    <div class="project-container">
      <div class="clock">
        <div
          *ngFor="let m of minuteArray; let i = index"
          class="minute-notch"
          [style.transform]="'rotate(' + i * 6 + 'deg) translateY(-50%)'"
        ></div>
        <div
          *ngFor="let h of hourArray; let i = index"
          class="hour-notch"
          [style.transform]="'rotate(' + i * 30 + 'deg) translateY(-50%)'"
        ></div>
        <div class="clock-face">
          <div class="center"></div>
          <div class="hand hour-hand" #hourHand></div>
          <div class="hand minute-hand" #minuteHand></div>
          <div class="hand second-hand" #secondHand></div>
        </div>
      </div>
    </div>
    <markdown clipboard lineNumbers [src]="overview"></markdown>
    <markdown clipboard lineNumbers [src]="code"></markdown>
  `,
  styleUrls: ["./analog-clock.component.css"],
})
export class AnalogClockComponent implements AfterViewInit {
  @ViewChild("secondHand", { static: true }) secondHand!: ElementRef;
  @ViewChild("minuteHand", { static: true }) minuteHand!: ElementRef;
  @ViewChild("hourHand", { static: true }) hourHand!: ElementRef;

  // Load Markdown and Code files
  info = "assets/projects/analog-clock/info.md";
  overview = "assets/projects/analog-clock/overview.md";
  code = "assets/projects/analog-clock/code.ts";

  constructor(private renderer: Renderer2) {}
  setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    this.renderer.setStyle(
      this.secondHand.nativeElement,
      "transform",
      `rotate(${secondsDegrees}deg)`
    );

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    this.renderer.setStyle(
      this.minuteHand.nativeElement,
      "transform",
      `rotate(${minsDegrees}deg)`
    );

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    this.renderer.setStyle(
      this.hourHand.nativeElement,
      "transform",
      `rotate(${hourDegrees}deg)`
    );
  }

  ngAfterViewInit() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }
}
