import { Component, OnInit } from '@angular/core';
import WORKS, { Work } from '../data/work-examples';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { ModalService } from '../modal/modal.service';

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
            <div class="preview-card" [ngStyle]="{'background-image': 'url('+ sample.screen +')'}" (click)="openModal(sample)">
              <h3 class="title">{{ sample.title }}</h3>
            </div>
          </ng-container>
        </div>
      </div>
    </section>

    <kh-modal id="portfolioModal" (onClose)="resetModalData()">

      <div class="portfolio-modal-content">
        <div class="screenshot" [ngStyle]="{'background-image': 'url(' + modalData.screen + ')'}"></div>
        <div class="text-container">
          <div class="portfolio-title">
            <h2>{{ modalData.title }}</h2>
          </div>

          <div class="description" [innerHtml]="modalData.description"></div>

          <div class="links">
            <a [href]="modalData.url" target="_blank" *ngIf="modalData.url">
              <fa-icon [icon]="faLink" size="lg"></fa-icon>
              <span class="link-text">{{ modalData.url }}</span>
            </a>
            <a [href]="modalData.repo" target="_blank" *ngIf="modalData.repo">
              <fa-icon [icon]="faGithub" size="lg"></fa-icon>
              <span class="link-text">{{ modalData.repo }}</span>
            </a>
          </div>

          <div class="">
            <h2>Technologies used</h2>
          </div>
          <div class="tech-icons" *ngIf="modalData.technologies.length > 0">
            <div class="tech-used" *ngFor="let tech of modalData.technologies">
              <span class="icon" [ngClass]="{'contain-background': containBgIcons.includes(tech.name)}" [ngStyle]="{'background-image': 'url(' + tech.icon + ')'}"></span>
              <span class="name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

    </kh-modal>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public workSamples: Work[] = [];
  public modalData: Work = {key: '', title: '', description: '', screen: '', technologies: []};
  public containBgIcons: string[] = ['Saffire SPARK CMS', 'YouTube API', 'Google Maps API', 'Firebase'];

  public faLink: any = faLink;
  public faGithub: any = faGithub;


  constructor( private modalService: ModalService ) {
    this.workSamples = [...WORKS];
  }

  openModal(sample: Work): void {
    console.log("🚀 ~ file: portfolio.component.ts ~ line 34 ~ PortfolioComponent ~ openModal ~ sample", sample); 
    this.modalData = sample;
    this.modalService.open('portfolioModal');
  }

  resetModalData(): void {
    this.modalData = {key: '', title: '', description: '', screen: '', technologies: []};
  }

  ngOnInit(): void {
  }

}
