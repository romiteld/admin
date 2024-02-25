import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-modal-notification',
  templateUrl: './modal-notification.html'
})

export class UIModalNotificationPage implements OnInit {
	code1: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
  	this.http.get('assets/data/ui-modal-notification/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  }
}
