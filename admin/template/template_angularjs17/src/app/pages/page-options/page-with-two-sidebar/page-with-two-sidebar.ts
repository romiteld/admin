import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-two-sidebar',
  templateUrl: './page-with-two-sidebar.html',
})

export class PageTwoSidebar implements OnInit, OnDestroy {
	code: any;
	
  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarTwo = true;
    this.appSettings.appSidebarEndToggled = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-two-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarTwo = false;
    this.appSettings.appSidebarEndToggled = false;
  }
}
