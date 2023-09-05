import {
  Component,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PROJECTS_LIST } from "./../../data/projects.data";

@Component({
  templateUrl: "./analog-clock.component.html",
  styleUrls: ["./analog-clock.component.css"],
})
export class AnalogClockComponent implements OnInit, AfterViewInit {
  // Set Markdown and Code Variables
  info!: string;
  details!: string;
  component!: string;
  template!: string;
  styles!: string;

  @ViewChild("secondHand", { static: true }) secondHand!: ElementRef;
  @ViewChild("minuteHand", { static: true }) minuteHand!: ElementRef;
  @ViewChild("hourHand", { static: true }) hourHand!: ElementRef;

  minuteArray = Array(60).fill(0);
  hourArray = Array(12).fill(0);

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}
  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    const projectData = PROJECTS_LIST.find(
      (project) => project.link.slice(1) === route
    );

    // Set the local variables from PROJECTS_LIST
    if (projectData && "details" in projectData.files[0]) {
      this.info = projectData.files[0].info;
      this.details = projectData.files[0].details;
      this.component = projectData.files[0].component;
      this.template = projectData.files[0].template;
      this.styles = projectData.files[0].styles;
    }
  }

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
