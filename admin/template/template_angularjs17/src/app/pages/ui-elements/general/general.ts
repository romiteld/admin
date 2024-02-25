import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-general',
  templateUrl: './general.html'
})

export class UIGeneralPage implements OnInit {
	code1: any;
	code2: any;
	code3: any;
	code4: any;
	code5: any;
	code6: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-general/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/ui-general/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/ui-general/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  	this.http.get('assets/data/ui-general/code-4.json', { responseType: 'text' }).subscribe(data => { this.code4 = data; });
  	this.http.get('assets/data/ui-general/code-5.json', { responseType: 'text' }).subscribe(data => { this.code5 = data; });
  	this.http.get('assets/data/ui-general/code-6.json', { responseType: 'text' }).subscribe(data => { this.code6 = data; });
  }
}
