import { Component, OnInit } from '@angular/core';
import WORKS, { Work } from '../data/work-examples';

@Component({
  selector: 'portfolio',
  template: `
    <section id="portfolio" class="work">
      <div class="works-container">
        <h2 class="section-title">
          &lt;sample of projects I've worked on <span class="slash">/</span>&gt;
        </h2>
        <div class="works-container">
          <ng-container *ngFor="let sample of workSamples">
            <div class="preview-card" [ngStyle]="{'background-image': 'url('+ sample.screen +')'}">
              <h3 class="title">{{ sample.title }}</h3>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  workSamples: Work[] = [];

  constructor() {
    this.workSamples = [...WORKS];
  }

  ngOnInit(): void {
  }

}
