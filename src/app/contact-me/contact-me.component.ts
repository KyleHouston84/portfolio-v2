import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-me',
  template: `
  <section id="contact" class="contact">
    <!-- <video-load video-source="/assets/video/contact_vid.mp4"></video-load> -->
    <div class="foreground">
      <h1 class="contact-h1">&lt;Let's Talk! <span class="slash">/</span>&gt;</h1>
      <div class="contact-me">
        <p class="contact-text">
          Interested in working with me? Say hi, I'll respond ASAP:
        </p>
        <span class="links">
          <a href="mailto:kyle.houston84@gmail.com" class="email">                              <fa-icon [icon]="faEnvelope" size="2x"></fa-icon></a>
          <a href="https://www.linkedin.com/in/kylehouston84" target="_blank" class="linkedin"> <fa-icon [icon]="faLinkedin" size="2x"></fa-icon></a>
          <a href="https://github.com/KyleHouston84" target="_blank" class="github">            <fa-icon [icon]="faGithub"   size="2x"></fa-icon></a>
        </span>
      </div>
    </div>
  </section>`,
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  faGithub: any = faGithub;
  faLinkedin: any = faLinkedin;
  faEnvelope: any = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
