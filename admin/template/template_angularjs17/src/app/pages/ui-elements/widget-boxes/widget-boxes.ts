import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-widget-boxes',
  templateUrl: './widget-boxes.html'
})

export class UIWidgetBoxesPage implements OnInit {
	model = 1;
	
	code1: any;
	code2: any;
	code3: any;
	code4: any;
	code5: any;
	code6: any;
	code7: any;
	code8: any;
	code9: any;
	code10: any;
	code11: any;
	code12: any;
	code13: any;
	code14: any;
	code15: any;
	code16: any;
	code17: any;
	code18: any;
	code19: any;
	code20: any;
	code21: any;
	code22: any;
	code23: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-widget-boxes/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-4.json', { responseType: 'text' }).subscribe(data => { this.code4 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-5.json', { responseType: 'text' }).subscribe(data => { this.code5 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-6.json', { responseType: 'text' }).subscribe(data => { this.code6 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-7.json', { responseType: 'text' }).subscribe(data => { this.code7 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-8.json', { responseType: 'text' }).subscribe(data => { this.code8 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-9.json', { responseType: 'text' }).subscribe(data => { this.code9 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-10.json', { responseType: 'text' }).subscribe(data => { this.code10 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-11.json', { responseType: 'text' }).subscribe(data => { this.code11 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-12.json', { responseType: 'text' }).subscribe(data => { this.code12 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-13.json', { responseType: 'text' }).subscribe(data => { this.code13 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-14.json', { responseType: 'text' }).subscribe(data => { this.code14 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-15.json', { responseType: 'text' }).subscribe(data => { this.code15 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-16.json', { responseType: 'text' }).subscribe(data => { this.code16 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-17.json', { responseType: 'text' }).subscribe(data => { this.code17 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-18.json', { responseType: 'text' }).subscribe(data => { this.code18 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-19.json', { responseType: 'text' }).subscribe(data => { this.code19 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-20.json', { responseType: 'text' }).subscribe(data => { this.code20 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-21.json', { responseType: 'text' }).subscribe(data => { this.code21 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-22.json', { responseType: 'text' }).subscribe(data => { this.code22 = data; });
  	this.http.get('assets/data/ui-widget-boxes/code-23.json', { responseType: 'text' }).subscribe(data => { this.code23 = data; });
  }
}
