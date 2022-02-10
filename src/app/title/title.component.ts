import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <section id="intro" class="title">
      <!-- <a class="logo-link">
        <span class="logo"></span>
      </a> -->
      <div class="text">
        <div class="logo"></div>
        <!-- <h2 class="title-h2">Hello, I'm</h2> -->
        <h1 class="title-h1">&lt;Kyle Houston <span class='slash'>/</span>&gt;</h1>
        <div>
          <!-- <img class="title-logo" src="../../inspiration/Logo/logo.png"/> -->
        </div>
        <h2 class="title-h2">web application developer</h2>
      </div>
    </section>`,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
