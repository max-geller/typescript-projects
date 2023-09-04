/* Import Angular Components, HTML, Styles Here */

export class AnalogClockComponent implements AfterViewInit {
  @ViewChild("secondHand", { static: true }) secondHand!: ElementRef;
  @ViewChild("minuteHand", { static: true }) minuteHand!: ElementRef;
  @ViewChild("hourHand", { static: true }) hourHand!: ElementRef;

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
