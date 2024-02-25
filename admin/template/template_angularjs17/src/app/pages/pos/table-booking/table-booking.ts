import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'table-booking',
  templateUrl: './table-booking.html'
})

export class PosTableBookingPage implements OnDestroy, OnInit {
  time = '00:00';

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
