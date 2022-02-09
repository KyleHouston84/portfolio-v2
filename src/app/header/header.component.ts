import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="main-nav">
        <input type="checkbox" name="menuButton" id="menuButton">
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
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  navTo(target: string): void {
    console.log("🚀 ~ file: header.component.ts ~ line 31 ~ HeaderComponent ~ navTo ~ target", target);
    // document.querySelector('#' + target)
		// .scrollIntoView();
  }

  ngOnInit(): void {
  }

}
