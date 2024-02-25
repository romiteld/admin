import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'extra-file-manager',
  templateUrl: './extra-file-manager.html',
  host: {
  	'class': 'd-flex flex-column flex-1'
  }
})

export class ExtraFileManagerPage implements OnDestroy, OnInit {
	mobileSidebarToggled: boolean = false;
	
	toggleMobileSidebar(): void {
		this.mobileSidebarToggled = !this.mobileSidebarToggled;
	}
	
  constructor(public appSettings: AppSettings) {
    this.appSettings.appSidebarMinified = true;
    this.appSettings.appHeaderInverse = true;
    this.appSettings.appContentFullHeight = true;
    this.appSettings.appContentClass = 'd-flex flex-column';
  }
  
  ngOnInit() {
    var fileHasSubNodes = document.querySelectorAll(".file-node.has-sub");
		fileHasSubNodes.forEach(node => {
			var fileArrow = node.querySelector(".file-link > .file-arrow");
		
			fileArrow.addEventListener("click", function (event) {
				event.preventDefault();
				node.classList.toggle("expand");
			});
		});
	
		var fileInfoNodes = document.querySelectorAll(".file-node");
		fileInfoNodes.forEach(node => {
			var fileInfo = node.querySelector(".file-link > .file-info");
		
			fileInfo.addEventListener("click", function (event) {
				event.preventDefault();
				fileInfoNodes.forEach(otherNode => {
					if (otherNode !== node) {
						otherNode.classList.remove("selected");
					}
				});
				node.classList.add("expand");
				node.classList.add("selected");
			});
		});
  }

  ngOnDestroy() {
    this.appSettings.appSidebarMinified = false;
    this.appSettings.appHeaderInverse = false;
    this.appSettings.appContentFullHeight = false;
    this.appSettings.appContentClass = '';
  }
}
