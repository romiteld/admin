import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';
import Tagify from '@yaireo/tagify';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'email-compose',
  templateUrl: './email-compose.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './email-compose.css' ]
})

export class EmailComposePage implements OnInit, OnDestroy {
  editor: Editor;
  html: '';
  subject: string = '';
  cc: boolean;
  bcc: boolean;
  
	showCc() {
		this.cc = true;
		
		var inputElement = document.querySelector('[data-render="cctags"]');
    new Tagify(inputElement);
	}
	
	showBcc() {
		this.bcc = true;
		
		var inputElement = document.querySelector('[data-render="bcctags"]');
    new Tagify(inputElement);
	}

  onTagsChanged(value) { }

  constructor(public appSettings: AppSettings) {
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'p-0';
  }
  
  ngOnInit() {
    this.editor = new Editor();
    this.cc = false;
    this.bcc = false;
    var inputElement = document.querySelector('[data-render="tags"]');
    new Tagify(inputElement);
  }

  ngOnDestroy() {
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
    
    this.editor.destroy();
  }
}
