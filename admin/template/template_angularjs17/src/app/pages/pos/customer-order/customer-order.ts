import { Component, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'customer-order',
  templateUrl: './customer-order.html'
})

export class PosCustomerOrderPage implements OnDestroy {
  posMobileSidebarToggled = false;
  
	togglePosMobileSidebar() {
	  this.posMobileSidebarToggled = !this.posMobileSidebarToggled;
	}

  constructor(public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
    this.appSettings.appContentFullHeight = true;
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.appSettings.appContentFullHeight = false;
  }
}
