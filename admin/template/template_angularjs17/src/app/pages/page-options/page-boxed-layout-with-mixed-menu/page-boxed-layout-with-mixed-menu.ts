import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-boxed-layout-mixed-menu',
  templateUrl: './page-boxed-layout-with-mixed-menu.html'
})

export class PageBoxedLayoutMixedMenu implements OnInit, OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
		this.appSettings.appTopMenu = true;
		document.body.className = document.body.className + ' boxed-layout';
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-boxed-layout-with-mixed-menu/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

	ngOnDestroy() {
		this.appSettings.appTopMenu = false;
		document.body.className = document.body.className.replace('boxed-layout', '');
	}
}
