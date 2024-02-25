import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'menu-stock',
  templateUrl: './menu-stock.html'
})

export class PosMenuStockPage implements OnDestroy, OnInit {
  time = '00:00';
  posMobileSidebarToggled = false;

  handleStartTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var a = (h > 12) ? h - 12 : h;
		var b = (m < 10) ? "0" + m : m;
		var c = (h > 11) ? 'pm' : 'am';

		this.time = a + ":" + b + c;
		setTimeout(this.handleStartTime, 500);
	}

	togglePosMobileSidebar() {
	  this.posMobileSidebarToggled = !this.posMobileSidebarToggled;
	}

  constructor(public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
    this.appSettings.appContentFullHeight = true;
  }
  
  ngOnInit() {
    this.handleStartTime();
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.appSettings.appContentFullHeight = false;
  }
}
