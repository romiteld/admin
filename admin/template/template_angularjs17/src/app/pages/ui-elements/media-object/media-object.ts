import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-media-object',
  templateUrl: './media-object.html'
})

export class UIMediaObjectPage implements OnInit {
	code1: any;
	code2: any;
	code3: any;
	code4: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-media-object/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/ui-media-object/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/ui-media-object/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  	this.http.get('assets/data/ui-media-object/code-4.json', { responseType: 'text' }).subscribe(data => { this.code4 = data; });
  }
}
