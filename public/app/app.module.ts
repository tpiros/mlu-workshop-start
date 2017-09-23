// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { ApplicationComponent } from './components/application/application.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

// Routing
import { Routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Routing,
    FormsModule
  ],
  declarations: [
    ApplicationComponent,
    WelcomePageComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})

export class AppModule { }
