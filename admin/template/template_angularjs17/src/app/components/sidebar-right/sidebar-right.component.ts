import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Input, Output, EventEmitter } 		 from '@angular/core';

@Component({
  selector: 'sidebar-right',
  templateUrl: './sidebar-right.component.html'
})

export class SidebarRightComponent {
	@Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();
	
	toggleAppSidebarEndMobile() {
		this.appSidebarEndMobileToggled.emit(true);
	}
}
