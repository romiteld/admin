import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'extra-messenger-page',
  templateUrl: './extra-messenger-page.html',
  styleUrls: ['./extra-messenger-page.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
  	'class': 'd-flex flex-column flex-1'
  }
})

export class ExtraMessengerPage implements OnDestroy {
	mobileSidebarToggled: boolean = false;
	
	toggleMobileSidebar(): void {
		this.mobileSidebarToggled = !this.mobileSidebarToggled;
	}
	
  constructor(public appSettings: AppSettings) {
    this.appSettings.appSidebarMinified = true;
    this.appSettings.appHeaderInverse = true;
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'p-0 d-flex flex-column';
  }

  ngOnDestroy() {
    this.appSettings.appSidebarMinified = false;
    this.appSettings.appHeaderInverse = false;
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
  }
}
