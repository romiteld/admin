import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-without-sidebar',
  templateUrl: './page-without-sidebar.html'
})

export class PageWithoutSidebar implements OnInit, OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarNone = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-without-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarNone = false;
  }
}
