import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div>
        Made with <span class="slash"><fa-icon [icon]="faHeart" size="1x" ></fa-icon></span> in Sherwood, OR by Kyle Houston
      </div>
      <span class="logo small"></span>
      <div class="note">
        Copyright (c) {{year}} Copyright Holder All Rights Reserved.
      </div>
    </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = 0;
  faHeart:any = faHeart;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
