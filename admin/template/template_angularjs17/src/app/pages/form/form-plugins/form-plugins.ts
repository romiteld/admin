import { Component, Injectable, ViewEncapsulation, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Editor } from 'ngx-editor';
import { ColorEvent } from 'ngx-color';
import Tagify from '@yaireo/tagify';

// for ngb datepicker adapter
@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}

@Component({
  selector: 'form-plugins',
  templateUrl: './form-plugins.html',
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './form-plugins.css' ]
})

export class FormPluginsPage implements OnInit, OnDestroy {
  // ngx-editor
  editor: Editor;
  html: '';
  
  // ngbdatepicker
  model1: Date;
  model2: Date;
  get today() {
    return new Date();
  }
  
  // ngx-color
  color;

  // ngbtimepicker
  time = {hour: 13, minute: 30};
  time2;
  meridian = true;
  toggleMeridian() {
    this.meridian = !this.meridian;
  }
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if (value.hour > 13) {
      return {tooLate: true};
    }
    return null;
  });
  
  code1: any;
	code2: any;
	code3: any;
	code4: any;
	code5: any;
	
	constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.editor = new Editor();
    this.color = '#0074ff';
    
    this.http.get('assets/data/form-plugins/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/form-plugins/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/form-plugins/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  	this.http.get('assets/data/form-plugins/code-4.json', { responseType: 'text' }).subscribe(data => { this.code4 = data; });
  	this.http.get('assets/data/form-plugins/code-5.json', { responseType: 'text' }).subscribe(data => { this.code5 = data; });
  }
  
  ngOnDestroy() {
    this.editor.destroy();
  }
  
  ngAfterViewInit() {
  	// tagify
    var inputElement = document.querySelector('[data-render="tags"]');
    new Tagify(inputElement);
  }
  
  handleChange($event: ColorEvent) {
  	this.color = $event.color.hex;
  }
}
