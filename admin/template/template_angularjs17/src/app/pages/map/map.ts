import { Component, OnDestroy } from '@angular/core';
import { AppSettings } from '../../service/app-settings.service';

@Component({
    selector: 'map',
    templateUrl: './map.html'
})

export class MapPage implements OnDestroy {
  constructor(public  appSettings: AppSettings) {
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'p-0 position-relative';
  }

  ngOnDestroy() {
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
  }
}
