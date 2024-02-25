import { Component, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
	selector: 'extra-error',
  templateUrl: './extra-error.html'
})

export class ExtraErrorPage implements OnDestroy {
	constructor(public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
	}

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
  }
}
