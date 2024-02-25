import { Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'ui-language-icon',
  templateUrl: './language-icon.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './language-icon.css' ]
})

export class UILanguageIconPage implements OnInit, OnDestroy {
  code1: any;

  constructor(private appSettings: AppSettings, private http: HttpClient) {
    this.appSettings.appHeaderLanguageBar = true;
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-language-bar-icon/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  }

  ngOnDestroy() {
    this.appSettings.appHeaderLanguageBar = false;
  }
}
