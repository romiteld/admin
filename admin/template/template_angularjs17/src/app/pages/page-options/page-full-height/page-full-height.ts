import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-full-height',
  templateUrl: './page-full-height.html'
})

export class PageFullHeight implements OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'p-0';
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-full-height/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
  }
}
