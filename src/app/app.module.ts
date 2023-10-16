import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './Header/header.component';
import { HeroComponent } from './Hero/hero.component';
import { Card } from './Hero/Card/card.component';
import { Plans } from './Plans/plans.component';
import { Footer } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    HeroComponent,
    Card,
    Plans,
    Footer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
