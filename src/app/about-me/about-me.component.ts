import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  template: `
    <section id="about" class="about sm">
      <h2 class="section-title">&lt;about me <span class="slash">/</span>&gt;</h2>
      <article class="introduction">
        <div class="headshot"></div>

        <div class="pitch">
          <div class="my-title">
            <div class="work-title">WEB APPLICATION DEVELOPER</div>
            <div class="location">SHERWOOD, OR</div>
          </div>

          <p>
            For the last {{experience}} years I have been developing intuitive, performant, powerful  
            web applications and web sites professionally. I am passionate about delivering high-quality software throughout the development cycle. 
            Whatever your technology stack comprises of I am able to quickly learn a broad range of skills/technologies to meet requirements.
          </p>

          <p>
            I truely enjoy working collaboratively with other developers and designers to make engaging and beautiful web applications.
            I excel in transforming a design into living web components and interactions, leveraging my creativity to fill the gaps between
            the breakpoints and design additional components following the look and feel of the original design.
          </p>
          <a class="button" href="/assets/pdf/Kyle Houston Resume (web) - 2022.pdf" target="_blank">Download my resume</a>
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
