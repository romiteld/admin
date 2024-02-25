import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-fixed-footer',
  templateUrl: './page-with-fixed-footer.html'
})

export class PageFixedFooter implements OnInit, OnDestroy {
  code: any;

  constructor(private elRef:ElementRef, public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'p-0 ';
  	this.elRef.nativeElement.classList.add('d-flex', 'flex-column', 'h-100');
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-fixed-footer/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
  }
}
