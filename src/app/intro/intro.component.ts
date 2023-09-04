import { Component, OnInit } from "@angular/core";

@Component({
  template: `
  <markdown clipboard lineNumbers [src]="markdown"></markdown>
  `,
})
export class IntroComponent {
  markdown = 'assets/projects/intro.md'
}