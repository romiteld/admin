/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.3.2
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
			APPS CONTENT TABLE
	----------------------------
	
	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
	01. Handle Header Mobile Nav
	02. Handle Theme Panel Expand
	03. Handle Tooltip Activation
  04. Handle Get Css Variable

	<!-- ======== APPLICATION SETTING ======== -->
	Application Controller
*/

var app = {
	id: '#app',
	class: 'app',
	isMobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth < 767),
	darkMode: {
		attr: 'data-bs-theme',
		value: 'dark',
		eventName: 'theme-reload'
	},
	themePanel: {
		class: 'theme-panel',
		toggleAttr: 'data-toggle="theme-panel-expand"',
		cookieName: 'theme-panel-expand',
		activeClass: 'active',
		themeListCLass: 'theme-list',
		themeListItemCLass: 'theme-list-item',
		theme: {
			toggleAttr: 'data-toggle="theme-selector"',
			cookieName: 'app-theme',
			activeClass: 'active',
			classAttr: 'data-theme-class'
		},
		themeDarkMode: {
			class: 'dark-mode',
			toggleAttr: 'name="app-theme-dark-mode"',
			cookieName: 'app-theme-dark-mode'
		},
	},
	font: {},
	color: {},
	variablePrefix: 'bs-',
	variableFontList: ['body-font-family', 'body-font-size', 'body-font-weight', 'body-line-height'],
	variableColorList: [
		'theme', 'theme-rgb', 'theme-color', 'theme-color-rgb',
		'component-color', 'component-color-rgb', 'component-bg', 'component-bg-rgb',
		'component-secondary-bg', 'component-bg-rgb', 'component-tertiary-bg', 'component-tertiary-bg-rgb',
		'default', 'default-rgb',
		'primary', 'primary-rgb', 'primary-bg-subtle', 'primary-text', 'primary-border-subtle',
		'secondary', 'secondary-rgb', 'secondary-bg-subtle', 'secondary-text', 'secondary-border-subtle',
		'success', 'success-rgb', 'success-bg-subtle', 'success-text', 'success-border-subtle',
		'warning', 'warning-rgb', 'warning-bg-subtle', 'warning-text', 'warning-border-subtle',
		'info', 'info-rgb', 'info-bg-subtle', 'info-text', 'info-border-subtle',
		'danger', 'danger-rgb', 'danger-bg-subtle', 'danger-text', 'danger-border-subtle',
		'light', 'light-rgb', 'light-bg-subtle', 'light-text', 'light-border-subtle',
		'dark', 'dark-rgb', 'dark-bg-subtle', 'dark-text', 'dark-border-subtle',
		'black', 'black-rgb',
		'blue', 'blue-rgb', 
		'inverse', 'inverse-rgb',
		'white', 'white-rgb',
		'red', 'red-rgb', 
		'teal', 'teal-rgb',
		'indigo', 'indigo-rgb', 
		'orange', 'orange-rgb', 
		'purple', 'purple-rgb',
		'yellow', 'yellow-rgb',
		'green', 'green-rgb',
		'pink', 'pink-rgb',
		'cyan', 'cyan-rgb',
		'gray', 'gray-rgb',
		'lime', 'lime-rgb',
		'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500',  'gray-600', 'gray-700', 'gray-800', 'gray-900', 
		'gray-100-rgb', 'gray-200-rgb', 'gray-300-rgb', 'gray-400-rgb', 'gray-500-rgb',  'gray-600-rgb', 'gray-700-rgb', 'gray-800-rgb', 'gray-900-rgb', 
		'muted', 'muted-rgb', 'emphasis-color', 'emphasis-color-rgb',
		'heading-color', 
		'body-bg', 'body-bg-rgb', 'body-color', 'body-color-rgb',
		'secondary-color', 'secondary-color-rgb', 'secondary-bg', 'secondary-bg-rgb',
		'tertiary-color', 'tertiary-color-rgb', 'tertiary-bg', 'tertiary-bg-rgb',
		'link-color', 'link-color-rgb', 'link-hover-color', 'link-hover-color-rgb', 
		'border-color', 'border-color-translucent'
	],
	breakpoints: {
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400,
		xxxl: 1800
	}
}

var slideUp = function(elm, duration = app.animation.speed) {
	if (!elm.classList.contains('transitioning')) {
		elm.classList.add('transitioning');
		elm.style.transitionProperty = 'height, margin, padding';
		elm.style.transitionDuration = duration + 'ms';
		elm.style.boxSizing = 'border-box';
		elm.style.height = elm.offsetHeight + 'px';
		elm.offsetHeight;
		elm.style.overflow = 'hidden';
		elm.style.height = 0;
		elm.style.paddingTop = 0;
		elm.style.paddingBottom = 0;
		elm.style.marginTop = 0;
		elm.style.marginBottom = 0;
		window.setTimeout( () => {
			elm.style.display = 'none';
			elm.style.removeProperty('height');
			elm.style.removeProperty('padding-top');
			elm.style.removeProperty('padding-bottom');
			elm.style.removeProperty('margin-top');
			elm.style.removeProperty('margin-bottom');
			elm.style.removeProperty('overflow');
			elm.style.removeProperty('transition-duration');
			elm.style.removeProperty('transition-property');
			elm.classList.remove('transitioning');
		}, duration);
	}
};

var slideDown = function(elm, duration = app.animation.speed) {
	if (!elm.classList.contains('transitioning')) {
		elm.classList.add('transitioning');
		elm.style.removeProperty('display');
		let display = window.getComputedStyle(elm).display;
		if (display === 'none') display = 'block';
		elm.style.display = display;
		let height = elm.offsetHeight;
		elm.style.overflow = 'hidden';
		elm.style.height = 0;
		elm.style.paddingTop = 0;
		elm.style.paddingBottom = 0;
		elm.style.marginTop = 0;
		elm.style.marginBottom = 0;
		elm.offsetHeight;
		elm.style.boxSizing = 'border-box';
		elm.style.transitionProperty = "height, margin, padding";
		elm.style.transitionDuration = duration + 'ms';
		elm.style.height = height + 'px';
		elm.style.removeProperty('padding-top');
		elm.style.removeProperty('padding-bottom');
		elm.style.removeProperty('margin-top');
		elm.style.removeProperty('margin-bottom');
		window.setTimeout( () => {
			elm.style.removeProperty('height');
			elm.style.removeProperty('overflow');
			elm.style.removeProperty('transition-duration');
			elm.style.removeProperty('transition-property');
			elm.classList.remove('transitioning');
		}, duration);
	}
};

var slideToggle = function(elm, duration = app.animation.speed) {
	if (window.getComputedStyle(elm).display === 'none') {
		return slideDown(elm, duration);
	} else {
		return slideUp(elm, duration);
	}
};

var setCookie = function(cookieName, cookieValue) {
	var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000*36000;
  now.setTime(expireTime);
  document.cookie = cookieName + '='+ cookieValue +';expires='+now.toUTCString()+';path=/';
};

var getCookie = function(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};


/* 01. Handle Header Mobile Nav
------------------------------------------------ */
var handleHeaderMobileNav = function() {
	$(document).on('click', '[data-toggle="header-mobile-nav"]', function(e) {
		e.preventDefault();
	
		$('.header .header-nav').slideToggle();
	});
};


/* 02. Handle Theme Panel
------------------------------------------------ */
var handleThemePanel = function() {
	// Theme Panel - Toggle / Dismiss
	var elm = document.querySelector('['+ app.themePanel.toggleAttr +']');
	if (elm) {
		elm.onclick = function(e) {
			e.preventDefault();
			var target = document.querySelector('.'+ app.themePanel.class);
			var targetExpand = (target.classList.contains(app.themePanel.activeClass)) ? false : true;
			
			target.classList.toggle(app.themePanel.activeClass);
			setCookie(app.themePanel.cookieName, targetExpand);
		}
	}
	
	// Theme Panel - Theme Selector
	var elms = [].slice.call(document.querySelectorAll('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']'));
	if (elms) {
		elms.map(function(elm) {
			elm.onclick = function() {
				var targetThemeClass = this.getAttribute(app.themePanel.theme.classAttr);
				for (var x = 0; x < document.body.classList.length; x++) {
					var targetClass = document.body.classList[x];
					if (targetClass.search('theme-') > -1) {
						document.body.classList.remove(targetClass);
					}
				}
				if (targetThemeClass) {
					document.body.classList.add(targetThemeClass);
				}
			
				var togglers = [].slice.call(document.querySelectorAll('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']'));
				togglers.map(function(toggler) {
					if (toggler != elm) {
						toggler.closest('.'+ app.themePanel.themeListItemCLass).classList.remove(app.themePanel.theme.activeClass);
					} else {
						toggler.closest('.'+ app.themePanel.themeListItemCLass).classList.add(app.themePanel.theme.activeClass);
					}
				});
				setCookie(app.themePanel.theme.cookieName, targetThemeClass);
			}
		});
	}
	
	
	// Theme Panel - Dark Mode
	var elms = [].slice.call(document.querySelectorAll('.'+ app.themePanel.class +' ['+ app.themePanel.themeDarkMode.toggleAttr +']'));
	elms.map(function(elm) {
		elm.onchange = function() {
			if (this.checked) {
				document.querySelector('html').setAttribute(app.darkMode.attr, app.darkMode.value);
			} else {
				document.querySelector('html').removeAttribute(app.darkMode.attr);
			}
			App.initVariable();
			setCookie(app.themePanel.themeDarkMode.cookieName, (this.checked) ? app.themePanel.themeDarkMode.class : '');
			document.dispatchEvent(new CustomEvent(app.darkMode.eventName));
		}
	});
	
	
	if (getCookie(app.themePanel.cookieName) && getCookie(app.themePanel.cookieName) == 'true') {
		var elm = document.querySelector('.'+ app.themePanel.class +' ['+ app.themePanel.toggleAttr +']');
		if (elm) {
			elm.click();
		}
	}
	if (getCookie(app.themePanel.theme.cookieName)) {
		var elm = document.querySelector('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']['+ app.themePanel.theme.classAttr +'="'+ getCookie(app.themePanel.theme.cookieName) +'"]');
		if (elm) {
			elm.click();
		}
	}
	if (getCookie(app.themePanel.themeDarkMode.cookieName)) {
		var elm = document.querySelector('.'+ app.themePanel.class +' ['+ app.themePanel.themeDarkMode.toggleAttr +']');
		if (elm) {
			elm.checked = true;
			elm.onchange();
		}
	}
};


/* 03. Handle Tooltip Activation
------------------------------------------------ */
var handleTooltipActivation = function() {
	if ($('[data-bs-toggle=tooltip]').length !== 0) {
		$('[data-bs-toggle=tooltip]').tooltip();
	}
};


/* 04. Handle Get Css Variable
------------------------------------------------ */
var handleCssVariable = function() {
	var rootStyle = getComputedStyle(document.body);
	
	// font
	if (app.variableFontList && app.variablePrefix) {
		for (var i = 0; i < (app.variableFontList).length; i++) {
			app.font[app.variableFontList[i].replace(/-([a-z|0-9])/g, (match, letter) => letter.toUpperCase())] = rootStyle.getPropertyValue('--'+ app.variablePrefix + app.variableFontList[i]).trim();
		}
	}
	
	// color
	if (app.variableColorList && app.variablePrefix) {
		for (var i = 0; i < (app.variableColorList).length; i++) {
			app.color[app.variableColorList[i].replace(/-([a-z|0-9])/g, (match, letter) => letter.toUpperCase())] = rootStyle.getPropertyValue('--'+ app.variablePrefix + app.variableColorList[i]).trim();
		}
	}
};


/* Application Controller
------------------------------------------------ */
var App = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
			handleHeaderMobileNav();
			handleThemePanel()
			handleTooltipActivation();
			
			this.initVariable();
		},
		initVariable: function() {
			handleCssVariable();
		}
  };
}();

$(document).ready(function() {
	App.init();
});