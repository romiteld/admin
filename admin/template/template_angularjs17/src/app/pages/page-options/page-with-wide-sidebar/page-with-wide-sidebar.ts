import { Component, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-wide-sidebar',
  templateUrl: './page-with-wide-sidebar.html'
})

export class PageSidebarWide implements OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarWide = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-wide-sidebar/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarWide = false;
  }
}
