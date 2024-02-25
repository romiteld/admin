import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-icon-duotone',
  templateUrl: './icon-duotone.html'
})

export class UIIconDuotonePage  implements OnInit {
	code1: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-icon-duotone/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  }
}
