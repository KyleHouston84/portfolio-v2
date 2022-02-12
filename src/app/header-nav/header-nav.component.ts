import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-nav',
  template: `
    <header class="header" [ngClass]="{'dark-section': darkSections.includes(currentSection)}">
      <nav class="main-nav">
        <input type="checkbox" name="menuButton" id="menuButton" [(ngModel)]="moblieNavVisible">
        <label for="menuButton" class="spinner-spin">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>

        <ul class="navigation-menu">
          <li id="nav-intro"      [ngClass]="{'active': currentSection === 'intro'}">     <div (click)="navTo('intro')" class="dot">      <span>Intro</span>      </div></li>
          <li id="nav-about"      [ngClass]="{'active': currentSection === 'about'}">     <div (click)="navTo('about')" class="dot">      <span>About Me</span>   </div></li>
          <li id="nav-skills"     [ngClass]="{'active': currentSection === 'skills'}">    <div (click)="navTo('skills')" class="dot">     <span>Skills</span>     </div></li>
          <li id="nav-portfolio"  [ngClass]="{'active': currentSection === 'portfolio'}"> <div (click)="navTo('portfolio')" class="dot">  <span>Portfolio</span>  </div></li>
          <li id="nav-contact"    [ngClass]="{'active': currentSection === 'contact'}">   <div (click)="navTo('contact')" class="dot">    <span>Contact Me</span> </div></li>
        </ul>
      </nav>
    </header>`,
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  
  @Input() currentSection: string = 'intro';
  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

  moblieNavVisible: boolean = false;
  darkSections: string[] = [
    'intro',
    'skills',
    'contact'
  ]

  constructor() { }

  navTo(target: string): void {
    this.scrollTo.emit(target);
    this.moblieNavVisible = false;
  }

  ngOnInit(): void {
  }

}
