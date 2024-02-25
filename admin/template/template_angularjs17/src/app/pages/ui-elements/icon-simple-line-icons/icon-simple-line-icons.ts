import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-icon-simple-line-icons',
  templateUrl: './icon-simple-line-icons.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './icon-simple-line-icons.css' ]
})

export class UIIconSimpleLineIconsPage implements OnInit {
	code1: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-icon-simple-line-icons/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  }
}
