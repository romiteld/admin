import { Component, OnInit } from '@angular/core';
import { AppVariablesService } from '../../../service/app-variables.service';

@Component({
  selector: 'dashboard-v1',
  templateUrl: './dashboard-v1.html',
})

export class DashboardV1Page implements OnInit {
  appVariables = this.appVariablesService.getAppVariables();
  todolist = [
    { 'title': 'Donec vehicula pretium nisl, id lacinia nisl tincidunt id.', 'checked': true },
    { 'title': 'Duis a ullamcorper massa.' },
    { 'title': 'Phasellus bibendum, odio nec vestibulum ullamcorper.' },
    { 'title': 'Duis pharetra mi sit amet dictum congue.' },
    { 'title': 'Duis pharetra mi sit amet dictum congue.' },
    { 'title': 'Phasellus bibendum, odio nec vestibulum ullamcorper.' },
    { 'title': 'Donec vehicula pretium nisl, id lacinia nisl tincidunt id.' }
  ];
  
  constructor(private appVariablesService: AppVariablesService) {
		this.appVariablesService.variablesReload.subscribe(() => {
			this.appVariables = this.appVariablesService.getAppVariables();
		});
	}

  lineChartData = [{
    "name":"Congo",
    "series":[{"value":2377,"name":"Thu 15"},{"value":4567,"name":"Sat 17"},{"value":2865,"name":"Mon 19"},{"value":2060,"name":"Wed 21"},{"value":3287,"name":"Fri 23"}]},{"name":"Micronesia","series":[{"value":5234,"name":"Thu 15"},{"value":2876,"name":"Sat 17"},{"value":4297,"name":"Mon 19"},{"value":2558,"name":"Wed 21"},{"value":2371,"name":"Fri 23"}]},{"name":"Malaysia","series":[{"value":2369,"name":"Thu 15"},{"value":5229,"name":"Sat 17"},{"value":3457,"name":"Mon 19"},{"value":4401,"name":"Wed 21"},{"value":2835,"name":"Fri 23"}]},{"name":"Yemen","series":[{"value":2099,"name":"Thu 15"},{"value":4383,"name":"Sat 17"},{"value":6724,"name":"Mon 19"},{"value":2870,"name":"Wed 21"},{"value":5753,"name":"Fri 23"}]},{"name":"Åland Islands","series":[{"value":4907,"name":"Thu 15"},{"value":2428,"name":"Sat 17"},{"value":5384,"name":"Mon 19"},{"value":5966,"name":"Wed 21"},{"value":2605,"name":"Fri 23"}]
  }];
  lineChartColor = { domain: [this.appVariables.color.primary, this.appVariables.color.success, this.appVariables.color.purple, this.appVariables.color.gray500] };

  pieChartData = [{"name":"Germany","value":8940000},{"name":"USA","value":5000000},{"name":"France","value":7200000}];
  pieChartColor = { domain: [this.appVariables.color.danger, this.appVariables.color.warning, this.appVariables.color.gray500] };

  ngOnInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
