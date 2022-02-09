import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  template: `
    <section id="skills" class="skills">
      <div class="techs-container">
        <h1 class="techs-h2">
          &lt;Technologies I love working with <span class="slash">/</span>&gt;
        </h1>

        <div class="filter-buttons">
          View:
          <a (click)="filter('all')"   [ngClass]="{'selected': currentView === 'all'}"   class="button">All</a>
          <a (click)="filter('js')"    [ngClass]="{'selected': currentView === 'js'}"    class="button">JS</a>
          <a (click)="filter('css')"   [ngClass]="{'selected': currentView === 'css'}"   class="button">CSS</a>
          <a (click)="filter('other')" [ngClass]="{'selected': currentView === 'other'}" class="button">Other</a>
        </div>

        <div class="techs">
          <!-- <portfolio-tech ng-repeat="tech in $ctrl.techs | filter:currentView" tech="tech" class="card"></portfolio-tech> -->
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  currentView: string = 'all';

  constructor() { }

  filter(type: string): void {
    console.log("🚀 ~ file: tech.component.ts ~ line 35 ~ TechComponent ~ filter ~ type", type)
    this.currentView = type;
  }

  ngOnInit(): void {
  }

}
