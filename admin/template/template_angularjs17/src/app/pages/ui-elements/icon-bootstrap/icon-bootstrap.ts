import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-icon-bootstrap',
  templateUrl: './icon-bootstrap.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./icon-bootstrap.css'] 
})

export class UIIconBootstrapPage implements OnInit {
	code1: any;
	
	constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-icon-bootstrap/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
 	}
}
