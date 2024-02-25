import { Component, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-mega-menu',
  templateUrl: './page-with-mega-menu.html'
})

export class PageMegaMenu implements OnDestroy {
  code: any;

  constructor(public appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appHeaderMegaMenu = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/page-with-mega-menu/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }

  ngOnDestroy() {
    this.appSettings.appHeaderMegaMenu = false;
  }
}
