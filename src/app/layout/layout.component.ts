import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentSection: string = 'intro';
  sectionColorClass: string = 'dark-section';
  darkSections: string[] = [
    'intro',
    'skills',
    'contact'
  ]

  constructor() { }

  ngOnInit(): void {}

  	/**
	 *	Sets the current section that's in the browser's viewport
	 */
	onSectionChange(sectionId: string) {
		this.currentSection = sectionId;
    this.sectionColorClass = this.darkSections.includes(this.currentSection) ? 'dark-section' : 'light-section';
    console.log("🚀 ~ file: layout.component.ts ~ line 21 ~ LayoutComponent ~ onSectionChange ~ this.currentSection", this.currentSection)
	}

  scrollTo(target: string) {
    console.log("🚀 ~ file: layout.component.ts ~ line 25 ~ LayoutComponent ~ scrollTo ~ target", target)
    document.querySelector('#' + target)!.scrollIntoView();
  }

}
