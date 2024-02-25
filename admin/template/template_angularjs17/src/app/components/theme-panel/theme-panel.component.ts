import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AppVariablesService } from '../../service/app-variables.service';
import { AppSettings } from '../../service/app-settings.service';

declare var bootstrap: any;

@Component({
  selector: 'theme-panel',
  templateUrl: './theme-panel.component.html'
})

export class ThemePanelComponent implements OnInit {
	@Output() appDarkModeChanged = new EventEmitter<boolean>();
	@Output() appThemeChanged = new EventEmitter<boolean>();
	appVariables = this.appVariablesService.getAppVariables();
	
	constructor(public appSettings: AppSettings, private appVariablesService: AppVariablesService) { }
	
	active: boolean = false;
	appThemeDarkModeCheckbox: boolean = false;
	appHeaderFixedCheckbox: boolean = true;
	appHeaderInverseCheckbox: boolean = false;
	appSidebarFixedCheckbox: boolean = true;
	appSidebarGridCheckbox: boolean = false;
	appGradientEnabledCheckbox: boolean = false;
	
	selectedTheme = 'teal';
	themes = ['red','pink','orange','yellow','lime','green','teal','cyan','blue','purple','indigo','gray-500'];
	
	toggleThemePanel() {
		if (localStorage) {
			localStorage['appThemePanelActive'] = !this.active;
		}
		this.active = !this.active;
	}
	
	ngOnInit() {
		var elm = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		
		for (var i = 0; i < elm.length; i++) {
			new bootstrap.Tooltip(elm[i]);
		}
		if (localStorage) {
			if (localStorage['appThemePanelActive']) {
				this.active = (localStorage['appThemePanelActive'] == 'true') ? true : false;
			}
			if (localStorage['appTheme']) {
				this.toggleTheme(localStorage['appTheme']);
			}
			if (localStorage['appDarkMode'] && localStorage['appDarkMode'] === 'true') {
				this.appThemeDarkModeCheckbox = true;
				this.appDarkModeChanged.emit(true);
			}
			if (localStorage['appHeaderFixed'] && localStorage['appHeaderFixed'] !== 'true') {
				this.appHeaderFixedCheckbox = false;
			}
			if (localStorage['appHeaderInverse'] && localStorage['appHeaderInverse'] === 'true') {
				this.appHeaderInverseCheckbox = true;
			}
			if (localStorage['appSidebarFixed'] && localStorage['appSidebarFixed'] !== 'true') {
				this.appSidebarFixedCheckbox = false;
			}
			if (localStorage['appSidebarGrid'] && localStorage['appSidebarGrid'] === 'true') {
				this.appSidebarGridCheckbox = true;
			}
			if (localStorage['appGradientEnabled'] && localStorage['appGradientEnabled'] === 'true') {
				this.appGradientEnabledCheckbox = true;
			}
		}
	}
	
	toggleTheme(theme) {
		this.appSettings.appTheme = theme;
		this.selectedTheme = theme;
		this.appThemeChanged.emit(true);
		if (localStorage) {
			localStorage['appTheme'] = theme;
		}
	}
	
	toggleDarkMode(e) {
		this.appSettings.appDarkMode = e.srcElement.checked;
		this.appDarkModeChanged.emit(true);
		if (localStorage) {
			localStorage['appDarkMode'] = e.srcElement.checked;
		}
	}
	
	toggleHeaderFixed(e) {
		this.appSettings.appHeaderFixed = e.srcElement.checked;
		
		if (localStorage) {
			localStorage['appHeaderFixed'] = e.srcElement.checked;
		}
		if (!e.srcElement.checked && this.appSettings.appSidebarFixed === true) {
			alert('Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar.');
			this.appSettings.appSidebarFixed = false;
			this.appSidebarFixedCheckbox = false;
			if (localStorage) {
				localStorage['appSidebarFixed'] = false;
			}
		}
	}
	
	toggleHeaderInverse(e) {
		this.appSettings.appHeaderInverse = e.srcElement.checked;
		if (localStorage) {
			localStorage['appHeaderInverse'] = e.srcElement.checked;
		}
	}
	
	toggleSidebarFixed(e) {
		this.appSettings.appSidebarFixed = e.srcElement.checked;
		
		if (localStorage) {
			localStorage['appSidebarFixed'] = e.srcElement.checked;
		}
		if (e.srcElement.checked && this.appSettings.appHeaderFixed !== true) {
			alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
			this.appSettings.appHeaderFixed = true;
			this.appHeaderFixedCheckbox = true;
			if (localStorage) {
				localStorage['appHeaderFixed'] = true;
			}
		}
	}
	
	toggleSidebarGrid(e) {
		this.appSettings.appSidebarGrid = e.srcElement.checked;
		if (localStorage) {
			localStorage['appSidebarGrid'] = e.srcElement.checked;
		}
	}
	
	toggleGradientEnabled(e) {
		this.appSettings.appGradientEnabled = e.srcElement.checked;
		if (localStorage) {
			localStorage['appGradientEnabled'] = e.srcElement.checked;
		}
	}
}
