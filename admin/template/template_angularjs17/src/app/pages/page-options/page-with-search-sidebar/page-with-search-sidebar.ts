import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-search-sidebar',
  templateUrl: './page-with-search-sidebar.html'
})

export class PageSidebarSearch implements OnInit, OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarSearch = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-search-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarSearch = false;
  }
}

