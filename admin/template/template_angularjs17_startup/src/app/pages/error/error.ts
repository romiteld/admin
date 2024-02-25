import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../service/app-settings.service';

@Component({
	selector: 'error',
  templateUrl: './error.html'
})

export class ErrorPage implements OnDestroy {
	constructor(public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
	}

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
  }
}
