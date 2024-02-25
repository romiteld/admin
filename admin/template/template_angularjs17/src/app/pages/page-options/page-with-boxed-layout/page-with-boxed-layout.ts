import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-boxed-layout',
  templateUrl: './page-with-boxed-layout.html'
})

export class PageBoxedLayout implements OnInit, OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    document.body.className = document.body.className + ' boxed-layout';
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-boxed-layout/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    document.body.className = document.body.className.replace('boxed-layout', '');
  }
}
