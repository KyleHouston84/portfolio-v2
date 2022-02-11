import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-nav',
  template: `
    <header class="header" [class]="sectionColorClass">
      <nav class="main-nav">
        <input type="checkbox" name="menuButton" id="menuButton" [(ngModel)]="moblieNavVisible">
        <label for="menuButton" class="spinner-spin">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>

        <ul class="navigation-menu">
          <li id="nav-intro">     <a (click)="navTo('intro')" class="dot">      <span>Intro</span>      </a></li>
          <li id="nav-about">     <a (click)="navTo('about')" class="dot">      <span>About Me</span>   </a></li>
          <li id="nav-skills">    <a (click)="navTo('skills')" class="dot">     <span>Skills</span>     </a></li>
          <li id="nav-portfolio"> <a (click)="navTo('portfolio')" class="dot">  <span>Portfolio</span>  </a></li>
          <li id="nav-contact">   <a (click)="navTo('contact')" class="dot">    <span>Contact Me</span> </a></li>
        </ul>
      </nav>
    </header>`,
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  
  @Input() sectionColorClass: string = 'dark-section';
  @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

  moblieNavVisible: boolean = false;

  constructor() { }

  navTo(target: string): void {
    this.scrollTo.emit(target);
    this.moblieNavVisible = false;
  }

  ngOnInit(): void {
  }

}
