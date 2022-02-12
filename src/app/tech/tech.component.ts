import { Component, OnInit, Input } from '@angular/core';
import TECHNOLOGIES, { Tech } from '../data/technologies';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tech',
  template: `
    <section id="skills" class="skills" [ngClass]="{'animate-bars': inViewPort}">
      <div class="techs-container">
        <h2 class="section-title">
          &lt;technologies I love working with <span class="slash">/</span>&gt;
        </h2>

        <div class="filter-buttons">
          View:
          <a (click)="filter('all')"    [ngClass]="{'selected': currentView === 'all'}"   class="button">All</a>
          <a (click)="filter('js')"     [ngClass]="{'selected': currentView === 'js'}"    class="button">JS</a>
          <a (click)="filter('css')"    [ngClass]="{'selected': currentView === 'css'}"   class="button">CSS</a>
          <a (click)="filter('db')"     [ngClass]="{'selected': currentView === 'db'}"    class="button">DB</a>
          <a (click)="filter('other')"  [ngClass]="{'selected': currentView === 'other'}" class="button">Other</a>
        </div>

        <div class="techs">
          <ng-container *ngFor="let tech of technologies">
            <div class="card">
              <div class="tech">
                <div class="progress-bar" [ngStyle]="{'transform': 'rotate(' + ( 180 * (tech.level / 100) ) + 'deg)'}">
                  <div class="progress-label" [ngStyle]="{'transform': 'rotate(-' + ( 180 * (tech.level / 100) ) + 'deg)'}">{{tech.level}}%</div>
                </div>
                <div class="progress-mask"></div>
                <div class="tech-logo" [ngStyle]="{'background-image': 'url('+ tech.logoURL +')'}"></div>
              </div>
              <h3 class="tech-h3">
                {{ tech.title }}
                <fa-icon [tooltip]="tech.description" style="font-size: 12px; color: yellow;" [icon]="faQuestionCircle"></fa-icon>
              </h3>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  @Input() inViewPort: boolean = false;

  currentView: string = 'all';
  technologies: Tech[] = [];
  faQuestionCircle:any = faQuestionCircle;

  constructor() {
    this.technologies = [...TECHNOLOGIES];
  }

  filter(type: string): void {
    this.currentView = type;
    if (type === 'all') {
      this.technologies = [...TECHNOLOGIES];
    } else {
      this.technologies = TECHNOLOGIES.filter( (tech) => tech.type === type);
    }
  }

  ngOnInit(): void {
  }

}
