import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
  selector: 'extra-settings-page',
  templateUrl: './extra-settings-page.html'
})

export class ExtraSettingsPage implements OnInit {

  constructor(public appSettings: AppSettings) {
  }
  
  ngOnInit() {
		const sections = document.querySelectorAll('#bsSpyContent > div');
		const navLinks = document.querySelectorAll('#bsSpyTarget > a');
		const lastElHeight = sections[sections.length - 1].getBoundingClientRect().height;

		function activateNavLink(id) {
			navLinks.forEach((link) => {
				if (link && link.classList) {
					link.classList.remove('active');
				}
			});
			var target = document.querySelector(`nav a[href*='${id}']`);
			if (target) {
				target.classList.add('active');
			}
		}

		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);
		}

		function handleViewport() {
			let activeSection = null;
			for (let i = sections.length - 1; i >= 0; i--) {
				if (isElementInViewport(sections[i])) {
					activeSection = sections[i].getAttribute('id');
					activateNavLink(activeSection);
					break;
				}
			}

			let combinedHeight = 0;
			let sectionIndex = Array.from(sections).findIndex((section) => section.getAttribute('id') === activeSection);
			for (let i = sectionIndex; i < sections.length; i++) {
				combinedHeight += (sections[i] as HTMLElement).offsetHeight;
			}
			if (combinedHeight <= window.innerHeight) {
				activateNavLink(activeSection);
			}
		}

		window.onscroll = handleViewport;
		
		
		var elmTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="scroll-to"]'));
		var elmList = elmTriggerList.map(function(elm) {
			elm.onclick = function(e) {
				e.preventDefault();
		
				var targetAttr = (elm.getAttribute('data-target')) ? this.getAttribute('data-target') : this.getAttribute('href');
				var targetElm = document.querySelectorAll(targetAttr)[0];
				var targetHeader = document.querySelectorAll('.app-header')[0];
				var targetHeight = (targetHeader as HTMLElement).offsetHeight;
				var targetContent = document.querySelector('.app-content');
				var targetContentStyle = window.getComputedStyle(targetContent);
				var targetContentPadding = (targetContentStyle) ? parseInt(targetContentStyle.getPropertyValue('padding-top')) : 0;
			
				if (targetElm) {
					var targetTop = targetElm.offsetTop - targetHeight - targetContentPadding;
					window.scrollTo({top: targetTop, behavior: 'smooth'});
				}
			}
		});
  }
}
