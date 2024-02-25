import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-transparent-sidebar',
  templateUrl: './page-with-transparent-sidebar.html'
})

export class PageSidebarTransparent implements OnInit, OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarTransparent = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-transparent-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarTransparent = false;
  }
}
