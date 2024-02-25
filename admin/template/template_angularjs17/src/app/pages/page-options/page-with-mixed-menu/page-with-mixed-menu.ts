import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-mixed-menu',
  templateUrl: './page-with-mixed-menu.html'
})

export class PageMixedMenu implements OnInit, OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appTopMenu = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-mixed-menu/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appTopMenu = false;
  }
}
