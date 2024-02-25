import { Component, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-top-menu',
  templateUrl: './page-with-top-menu.html'
})

export class PageTopMenu implements OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appSidebarNone = true;
    this.appSettings.appTopMenu = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-top-menu/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarNone = false;
    this.appSettings.appTopMenu = false;
  }
}
