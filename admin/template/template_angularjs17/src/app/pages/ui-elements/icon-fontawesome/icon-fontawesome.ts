import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-icon-fontawesome',
  templateUrl: './icon-fontawesome.html'
})

export class UIIconFontAwesomePage implements OnInit {
	model = 1;
	
	code1: any;
	code2: any;
	code3: any;
	code4: any;
	code5: any;
	code6: any;
	code7: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-icon-fontawesome/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/ui-icon-fontawesome/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/ui-icon-fontawesome/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  	this.http.get('assets/data/ui-icon-fontawesome/code-4.json', { responseType: 'text' }).subscribe(data => { this.code4 = data; });
  	this.http.get('assets/data/ui-icon-fontawesome/code-5.json', { responseType: 'text' }).subscribe(data => { this.code5 = data; });
  	this.http.get('assets/data/ui-icon-fontawesome/code-6.json', { responseType: 'text' }).subscribe(data => { this.code6 = data; });
  	this.http.get('assets/data/ui-icon-fontawesome/code-7.json', { responseType: 'text' }).subscribe(data => { this.code7 = data; });
  }
}
