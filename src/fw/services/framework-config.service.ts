import { Injectable } from '@angular/core';

export interface IconFiles {
  imagefile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakpoint?: number,
  socialIcons?: Array<IconFiles> 

}
@Injectable({
  providedIn: 'root'
})
export class FrameworkConfigService {

  shoeLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();
  // takes values from the app component and replaces the above default values 
  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings);
  }
}
