import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-minified-sidebar',
  templateUrl: './page-with-minified-sidebar.html'
})

export class PageSidebarMinified implements OnDestroy, OnInit {
  code: any;
  
  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarMinified = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-minified-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarMinified = false;
  }
}
