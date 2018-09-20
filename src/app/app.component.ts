import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //import interface and set it
  constructor(frameworkConfigService: FrameworkConfigService) {
    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imagefile: 'assets/social-fb-bw.png', alt: 'facebook', link :'https://twitter.com/i/notifications'},
        {imagefile: 'assets/social-google-bw.png', alt: 'facebook', link: 'https://twitter.com/i/notifications'},
       // {imagefile: 'assets/social-twitter-bw.png', alt: 'facebook', link: 'https://twitter.com/i/notifications'}
      ],
      showLanguageSelector: false,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    frameworkConfigService.configure(config)
  }
}
