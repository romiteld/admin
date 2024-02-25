import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-right-sidebar',
  templateUrl: './page-with-right-sidebar.html'
})

export class PageSidebarRight implements OnInit, OnDestroy {
  code: any;
  
  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarEnd = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-right-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarEnd = false;
  }
}
