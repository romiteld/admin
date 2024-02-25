import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-social-buttons',
  templateUrl: './social-buttons.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './social-buttons.css' ]
})

export class UISocialButtonsPage implements OnInit {
	code1: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-social-buttons/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  }
}
