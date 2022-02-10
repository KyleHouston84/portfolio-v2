import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  template: `
    <section id="about" class="about sm">
      <h1 class="about-h1">&lt;about me <span class="slash">/</span>&gt;</h1>
      <article class="introduction">
        <div class="headshot"></div>

        <div class="pitch">
          <div class="my-title">
            <div class="work-title">WEB APPLICATION DEVELOPER</div>
            <div class="location">SHERWOOD, OR</div>
          </div>

          <p>
            The last {{experience}} years I have been creating web sites and developing intuitive, performant, and powerful enterprise 
            web applications (as well as picking up some freelance work along the way). 
          </p>

          <p  class="mobile-optional">
            I excel in transforming a design into living web components and interactions. I fill the gaps between
            the breakpoints and design additional components following the look and feel of the original design.
            I love working collaboratively with designers and other developers to make engaging and beautiful web applications.
          </p>
          <a class="button" href="https://drive.google.com/open?id=0ByNa4iGTcKzqWThTY0dZaU1xTFE" target="_blank">Download my resume</a>
        </div>
      </article>
    </section>`,
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  experience: number = 0;
  portfolioLink: string = 'https://drive.google.com/open?id=0ByNa4iGTcKzqWThTY0dZaU1xTFE';

  constructor() {
    this.experience = new Date().getFullYear() - 2015;
  }

  ngOnInit(): void {
  }

}
