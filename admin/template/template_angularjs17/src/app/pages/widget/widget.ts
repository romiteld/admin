import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppVariablesService } from '../../service/app-variables.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'widget',
  templateUrl: './widget.html'
})

export class WidgetPage implements OnInit {
  lightMode: boolean = true;
  darkMode: boolean = false;
  lineChartData: any;
  lineChartColor: any;
	appVariables = this.appVariablesService.getAppVariables();
	
  code1: any;
	code2: any;
	code3: any;
	code4: any;
	code5: any;
	code6: any;
	code7: any;
	code8: any;
	code9: any;
	code10: any;
	code11: any;
	
  widgetLightMode() {
    this.lightMode = true;
    this.darkMode = false;
  }
  
  widgetDarkMode() {
    this.darkMode = true;
    this.lightMode = false;
  }
  
  constructor(private http: HttpClient, private appVariablesService: AppVariablesService) {

  }

  ngOnInit() {
  	this.http.get('assets/data/widgets/code-1.json', { responseType: 'text' }).subscribe(data => { this.code1 = data; });
  	this.http.get('assets/data/widgets/code-2.json', { responseType: 'text' }).subscribe(data => { this.code2 = data; });
  	this.http.get('assets/data/widgets/code-3.json', { responseType: 'text' }).subscribe(data => { this.code3 = data; });
  	this.http.get('assets/data/widgets/code-4.json', { responseType: 'text' }).subscribe(data => { this.code4 = data; });
  	this.http.get('assets/data/widgets/code-5.json', { responseType: 'text' }).subscribe(data => { this.code5 = data; });
  	this.http.get('assets/data/widgets/code-6.json', { responseType: 'text' }).subscribe(data => { this.code6 = data; });
  	this.http.get('assets/data/widgets/code-7.json', { responseType: 'text' }).subscribe(data => { this.code7 = data; });
  	this.http.get('assets/data/widgets/code-8.json', { responseType: 'text' }).subscribe(data => { this.code8 = data; });
  	this.http.get('assets/data/widgets/code-9.json', { responseType: 'text' }).subscribe(data => { this.code9 = data; });
  	this.http.get('assets/data/widgets/code-10.json', { responseType: 'text' }).subscribe(data => { this.code10 = data; });
  	this.http.get('assets/data/widgets/code-11.json', { responseType: 'text' }).subscribe(data => { this.code11 = data; });
  	this.lineChartData = [{
			"name":"Congo",
			"series":[{"value":2377,"name":"Thu 15"},{"value":4567,"name":"Sat 17"},{"value":2865,"name":"Mon 19"},{"value":2060,"name":"Wed 21"},{"value":3287,"name":"Fri 23"}]},{"name":"Micronesia","series":[{"value":5234,"name":"Thu 15"},{"value":2876,"name":"Sat 17"},{"value":4297,"name":"Mon 19"},{"value":2558,"name":"Wed 21"},{"value":2371,"name":"Fri 23"}]},{"name":"Malaysia","series":[{"value":2369,"name":"Thu 15"},{"value":5229,"name":"Sat 17"},{"value":3457,"name":"Mon 19"},{"value":4401,"name":"Wed 21"},{"value":2835,"name":"Fri 23"}]},{"name":"Yemen","series":[{"value":2099,"name":"Thu 15"},{"value":4383,"name":"Sat 17"},{"value":6724,"name":"Mon 19"},{"value":2870,"name":"Wed 21"},{"value":5753,"name":"Fri 23"}]},{"name":"Åland Islands","series":[{"value":4907,"name":"Thu 15"},{"value":2428,"name":"Sat 17"},{"value":5384,"name":"Mon 19"},{"value":5966,"name":"Wed 21"},{"value":2605,"name":"Fri 23"}]
		}];
  	this.lineChartColor = { domain: [this.appVariables.color.primary, this.appVariables.color.success, this.appVariables.color.purple, this.appVariables.color.gray500]};
  }
}
