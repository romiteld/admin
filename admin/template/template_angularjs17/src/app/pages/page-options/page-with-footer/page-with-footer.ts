import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-with-footer',
  templateUrl: './page-with-footer.html'
})

export class PageFooter {
	code: any;
	
	constructor(private http: HttpClient) {
  }

	ngOnInit() {
  	this.http.get('assets/data/page-with-footer/code-1.json', { responseType: 'text' }).subscribe(data => {
    	this.code = data;
		});
  }
}
