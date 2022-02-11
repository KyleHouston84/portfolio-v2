import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  template: `
    <section id="portfolio" class="work">
      <div class="works-container">
        <h2 class="section-title">
          &lt;sample of projects I've worked on <span class="slash">/</span>&gt;
        </h2>
        <div class="works">
          <!-- <portfolio-work class="portfolio-screen" ng-repeat="work in $ctrl.works" work="work"></portfolio-work> -->
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
