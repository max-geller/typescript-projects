import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AnalogClockComponent } from "./projects/analog-clock/analog-clock.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { IntroComponent } from "./projects/intro/intro.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnalogClockComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
