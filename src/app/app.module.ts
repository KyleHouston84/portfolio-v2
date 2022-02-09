import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechComponent } from './tech/tech.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

// Vendor
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TitleComponent,
    AboutMeComponent,
    TechComponent,
    PortfolioComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
