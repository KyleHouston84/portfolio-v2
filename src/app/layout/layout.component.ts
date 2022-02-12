import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <div class="content-container" 
    scrollSpy 
    [spiedTags]="['APP-TITLE', 'ABOUT-ME', 'TECH', 'PORTFOLIO', 'CONTACT-ME']" 
    (sectionChange)="onSectionChange($event)">
    <header-nav [currentSection]="currentSection" (scrollTo)="scrollTo($event)"></header-nav>
    <app-title id="intro"></app-title>
    <about-me id="about"></about-me>
    <tech id="skills" [inViewPort]="skillsInView"></tech>
    <portfolio id="portfolio"></portfolio>
    <contact-me id="contact"></contact-me>
    <app-footer></app-footer>
  </div>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentSection: string = 'intro';
  sectionColorClass: string = 'dark-section';
  skillsInView: boolean = false;
  constructor() { }

  ngOnInit(): void {}

  	/**
	 *	Sets the current section that's in the browser's viewport
	 */
	onSectionChange(sectionId: string) {
		this.currentSection = sectionId;
    this.skillsInView = this.currentSection === 'skills';
	}

  scrollTo(target: string) {
    document.querySelector('#' + target)!.scrollIntoView();
  }

}
