import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-tabs-accordions',
  templateUrl: './tabs-accordions.html'
})

export class UITabsAccordionsPage implements OnInit {
	code1: any;
	code2: any;
	code3: any;

  constructor( private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-tabs-accordions/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/ui-tabs-accordions/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/ui-tabs-accordions/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  }
}
