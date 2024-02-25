import { Component, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'extra-data-management',
  templateUrl: './extra-data-management.html'
})

export class ExtraDataManagementPage implements OnDestroy, AfterViewInit {
	handleTableHeight() {
		setTimeout(function() {
			var targetHeight = window.innerHeight - document.getElementById('table').getBoundingClientRect().top;
			document.getElementById('table').style.height = targetHeight + 'px';
		}, 0);
	}

	handleCheckbox() {
		var checkboxes = [].slice.call(document.querySelectorAll('[data-toggle="check-all"]'));
		
		checkboxes.map(function(checkbox) {
			checkbox.addEventListener('change', function () {
				var isChecked = this.checked;
				var table = this.closest('#table');
				var checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');

				checkboxes.forEach(function (checkbox) {
					checkbox.checked = isChecked;
				});
			});
		});
	}
	
	@HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.handleTableHeight();
  }

  constructor(public appSettings: AppSettings) {
    this.appSettings.appSidebarMinified = true;
    this.appSettings.appHeaderInverse = true;
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'p-0 bg-component';
  }
  
  ngAfterViewInit() {
    this.handleTableHeight();
    this.handleCheckbox();
  }

  ngOnDestroy() {
    this.appSettings.appSidebarMinified = false;
    this.appSettings.appHeaderInverse = false;
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
  }
}
