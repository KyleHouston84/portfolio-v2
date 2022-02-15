// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { TitleComponent } from './title/title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechComponent } from './tech/tech.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';

import { ModalModule } from './modal/index';

// Directives
import { ScrollSpyDirective, TooltipDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderNavComponent,
    TitleComponent,
    AboutMeComponent,
    TechComponent,
    PortfolioComponent,
    ContactMeComponent,
    FooterComponent,
    ScrollSpyDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
