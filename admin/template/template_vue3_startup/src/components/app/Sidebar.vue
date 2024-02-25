<script setup lang="ts">
import { useAppSidebarMenuStore } from '@/stores/app-sidebar-menu';
import { useAppOptionStore } from '@/stores/app-option';
import { onMounted } from 'vue';
import { slideToggle } from '@/composables/slideToggle.js';
import { slideUp } from '@/composables/slideUp.js';
import { slideDown } from '@/composables/slideDown.js';
import SidebarNav from '@/components/app/SidebarNav.vue';

const appSidebarMenu = useAppSidebarMenuStore();
const appOption = useAppOptionStore();
var appSidebarFloatSubmenuTimeout = '';
var appSidebarFloatSubmenuDom = '';

function appSidebarMobileToggled() {
	appOption.appSidebarMobileToggled = !appOption.appSidebarMobileToggled;
}

function toggleAppSidebarMinified(e) {
	e.preventDefault();
	
	appOption.appSidebarMinified = (appOption.appSidebarMinified) ? '' : true;
	
	if (localStorage) {
		localStorage.appSidebarMinified = appOption.appSidebarMinified;
	}
}

function appSidebarProfileToggle(e) {
	e.preventDefault();
	
	var targetSidebar = document.querySelector('.app-sidebar:not(.app-sidebar-end)');
	var targetMenu = e.target.closest('.menu-profile');
	var targetProfile = document.querySelector('#appSidebarProfileMenu');
	var expandTime = (targetSidebar && targetSidebar.getAttribute('data-disable-slide-animation')) ? 0 : 250;
	
	if (targetProfile) {
		if (targetProfile.style.display == 'block') {
			targetMenu.classList.remove('active');
		} else {
			targetMenu.classList.add('active');
		}
		slideToggle(targetProfile, expandTime);
		targetProfile.classList.toggle('expand');
	}
}

function handleGetHiddenMenuHeight(elm) {
	elm.setAttribute('style', 'position: absolute; visibility: hidden; display: block !important');
	var targetHeight  = elm.clientHeight;
	elm.removeAttribute('style');
	return targetHeight;
}

function handleSidebarMinifyFloatMenuClick() {
	var elms = [].slice.call(document.querySelectorAll('#app-sidebar-float-submenu .menu-item.has-sub > .menu-link'));
	if (elms) {
		elms.map(function(elm) {
			elm.onclick = function(e) {
				e.preventDefault();
				var targetItem = this.closest('.menu-item');
				var target = targetItem.querySelector('.menu-submenu');
				var targetStyle = getComputedStyle(target);
				var close = (targetStyle.getPropertyValue('display') != 'none') ? true : false;
				var expand = (targetStyle.getPropertyValue('display') != 'none') ? false : true;
				
				slideToggle(target);
				
				var loopHeight = setInterval(function() {
					var targetMenu = document.querySelector('#app-sidebar-float-submenu');
					var targetMenuArrow = document.querySelector('#app-sidebar-float-submenu-arrow');
					var targetMenuLine = document.querySelector('#app-sidebar-float-submenu-line');
					var targetHeight = targetMenu.clientHeight;
					var targetOffset = targetMenu.getBoundingClientRect();
					var targetOriTop = targetMenu.getAttribute('data-offset-top');
					var targetMenuTop = targetMenu.getAttribute('data-menu-offset-top');
					var targetTop 	 = targetOffset.top;
					var windowHeight = document.body.clientHeight;
					if (close) {
						if (targetTop > targetOriTop) {
							targetTop = (targetTop > targetOriTop) ? targetOriTop : targetTop;
							targetMenu.style.top = targetTop + 'px';
							targetMenu.style.bottom = 'auto';
							targetMenuArrow.style.top = '20px';
							targetMenuArrow.style.bottom = 'auto';
							targetMenuLine.style.top = '20px';
							targetMenuLine.style.bottom = 'auto';
						}
					}
					if (expand) {
						if ((windowHeight - targetTop) < targetHeight) {
							var arrowBottom = (windowHeight - targetMenuTop) - 22;
							targetMenu.style.top = 'auto';
							targetMenu.style.bottom = 0;
							targetMenuArrow.style.top = 'auto';
							targetMenuArrow.style.bottom = arrowBottom + 'px';
							targetMenuLine.style.top = '20px';
							targetMenuLine.style.bottom = arrowBottom + 'px';
						}
						var floatSubmenuElm = document.querySelector('#app-sidebar-float-submenu .app-sidebar-float-submenu');
						if (targetHeight > windowHeight) {
							if (floatSubmenuElm) {
								var splitClass = ('overflow-scroll mh-100vh').split(' ');
								for (var i = 0; i < splitClass.length; i++) {
									floatSubmenuElm.classList.add(splitClass[i]);
								}
							}
						}
					}
				}, 1);
				setTimeout(function() {
					clearInterval(loopHeight);
				}, 250);
			}
		});
	}
}

function handleSidebarMinifyFloatMenu() {
	var elms = [].slice.call(document.querySelectorAll('.app-sidebar .menu > .menu-item.has-sub > .menu-link'));
	if (elms) {
		elms.map(function(elm) {
			elm.onmouseenter = function() {
				var appElm = document.querySelector('.app');
				if (appElm && appElm.classList.contains('app-sidebar-minified')) {
					clearTimeout(appSidebarFloatSubmenuTimeout);
					var targetMenu = this.closest('.menu-item').querySelector('.menu-submenu');
					if (appSidebarFloatSubmenuDom == this && document.querySelector('#app-sidebar-float-submenu')) {
						return;
					} else {
						appSidebarFloatSubmenuDom = this;
					}
					var targetMenuHtml = targetMenu.innerHTML;
					if (targetMenuHtml) {
						var bodyStyle     = getComputedStyle(document.body);
						var sidebar       = document.querySelector('#sidebar');
						var sidebarOffset = sidebar.getBoundingClientRect();
						var sidebarWidth  = parseInt(sidebar.clientWidth);
						var sidebarX      = (!appElm.classList.contains('app-sidebar-end') && bodyStyle.getPropertyValue('direction') != 'rtl') ? (sidebarOffset.left + sidebarWidth) : (document.body.clientWidth - sidebarOffset.left);
						var targetHeight  = handleGetHiddenMenuHeight(targetMenu);
						var targetOffset  = this.getBoundingClientRect();
						var targetTop     = targetOffset.top;
						var targetLeft    = (!appElm.classList.contains('app-sidebar-end') && bodyStyle.getPropertyValue('direction') != 'rtl') ? sidebarX : 'auto';
						var targetRight   = (!appElm.classList.contains('app-sidebar-end') && bodyStyle.getPropertyValue('direction') != 'rtl') ? 'auto' : sidebarX;
						var darkMode      = (sidebar.getAttribute('data-bs-theme') == 'dark') ? true : false;
						var windowHeight  = document.body.clientHeight;
						
						if (!document.querySelector('#app-sidebar-float-submenu')) {
							var overflowClass = '';
							if (targetHeight > windowHeight) {
								overflowClass = 'overflow-scroll mh-100vh';
							}
							var html = document.createElement('div');
							if (darkMode) {
								html.setAttribute('data-bs-theme', 'dark');
							}
							html.setAttribute('id', 'app-sidebar-float-submenu');
							html.setAttribute('class', 'app-sidebar-float-submenu-container');
							html.setAttribute('data-offset-top', targetTop);
							html.setAttribute('data-menu-offset-top', targetTop);
							html.innerHTML = ''+
							'	<div class="app-sidebar-float-submenu-arrow" id="app-sidebar-float-submenu-arrow"></div>'+
							'	<div class="app-sidebar-float-submenu-line" id="app-sidebar-float-submenu-line"></div>'+
							'	<div class="app-sidebar-float-submenu '+ overflowClass +'">'+ targetMenuHtml + '</div>';
							appElm.appendChild(html);
							
							var elm = document.getElementById('app-sidebar-float-submenu');
							elm.onmouseover = function() {
								clearTimeout(appSidebarFloatSubmenuTimeout);
							};
							elm.onmouseout = function() {
								appSidebarFloatSubmenuTimeout = setTimeout(() => {
									document.querySelector('#app-sidebar-float-submenu').remove();
								}, 250);
							};
						} else {
							var floatSubmenu = document.querySelector('#app-sidebar-float-submenu');
							var floatSubmenuElm = document.querySelector('#app-sidebar-float-submenu' + ' .app-sidebar-float-submenu');
							
							if (targetHeight > windowHeight) {
								if (floatSubmenuElm) {
									var splitClass = ('overflow-scroll mh-100vh').split(' ');
									for (var i = 0; i < splitClass.length; i++) {
										floatSubmenuElm.classList.add(splitClass[i]);
									}
								}
							}
							floatSubmenu.setAttribute('data-offset-top', targetTop);
							floatSubmenu.setAttribute('data-menu-offset-top', targetTop);
							floatSubmenuElm.innerHTML = targetMenuHtml;
						}
				
						var targetHeight = document.querySelector('#app-sidebar-float-submenu').clientHeight;
						var floatSubmenuElm = document.querySelector('#app-sidebar-float-submenu');
						var floatSubmenuArrowElm = document.querySelector('#app-sidebar-float-submenu-arrow');
						var floatSubmenuLineElm = document.querySelector('#app-sidebar-float-submenu-line');
						if ((windowHeight - targetTop) > targetHeight) {
							if (floatSubmenuElm) {
								floatSubmenuElm.style.top = targetTop + 'px';
								floatSubmenuElm.style.left = targetLeft + 'px';
								floatSubmenuElm.style.bottom = 'auto';
								floatSubmenuElm.style.right = targetRight + 'px';
							}
							if (floatSubmenuArrowElm) {
								floatSubmenuArrowElm.style.top = '20px';
								floatSubmenuArrowElm.style.bottom = 'auto';
							}
							if (floatSubmenuLineElm) {
								floatSubmenuLineElm.style.top = '20px';
								floatSubmenuLineElm.style.bottom = 'auto';
							}
						} else {
							var arrowBottom = (windowHeight - targetTop) - 21;
							if (floatSubmenuElm) {
								floatSubmenuElm.style.top = 'auto';
								floatSubmenuElm.style.left = targetLeft + 'px';
								floatSubmenuElm.style.bottom = 0;
								floatSubmenuElm.style.right = targetRight + 'px';
							}
							if (floatSubmenuArrowElm) {
								floatSubmenuArrowElm.style.top = 'auto';
								floatSubmenuArrowElm.style.bottom = arrowBottom + 'px';
							}
							if (floatSubmenuLineElm) {
								floatSubmenuLineElm.style.top = '20px';
								floatSubmenuLineElm.style.bottom = arrowBottom + 'px';
							}
						}
						handleSidebarMinifyFloatMenuClick();
					} else {
						document.querySelector('#app-sidebar-float-submenu-line').remove();
						appSidebarFloatSubmenuDom = '';
					}
				}
			}
			elm.onmouseleave = function() {
				var elm = document.querySelector('.app');
				if (elm && elm.classList.contains('app-sidebar-minified')) {
					appSidebarFloatSubmenuTimeout = setTimeout(() => {
						var elm = document.querySelector('#app-sidebar-float-submenu-line');
						if (elm) {
							elm.remove();
						}
						appSidebarFloatSubmenuDom = '';
					}, 250);
				}
			}
		});
	}
};

function handleSearchFunction(event) {
	var targetValue = event.target.value;
			targetValue = targetValue.toLowerCase();

	if (targetValue) {
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .menu > .menu-item:not(.menu-profile):not(.menu-header):not(.menu-search), .app-sidebar:not(.app-sidebar-end) .menu-submenu > .menu-item'));
		if (elms) {
			elms.map(function(elm) {
				elm.classList.add('d-none');
			});
		}
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .has-text'));
		if (elms) {
			elms.map(function(elm) {
				elm.classList.remove('has-text');
			});
		}
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .expand'));
		if (elms) {
			elms.map(function(elm) {
				elm.classList.remove('expand');
			});
		}
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .menu > .menu-item:not(.menu-profile):not(.menu-header):not(.menu-search) > .menu-link, .app-sidebar .menu-submenu > .menu-item > .menu-link'));
		if (elms) {
			elms.map(function(elm) {
				var targetText = elm.textContent;
						targetText = targetText.toLowerCase();
				if (targetText.search(targetValue) > -1) {
					var targetElm = elm.closest('.menu-item');
					if (targetElm) {
						targetElm.classList.remove('d-none');
						targetElm.classList.add('has-text');
					}
					
					var targetElm = elm.closest('.menu-item.has-sub');
					if (targetElm) {
						var targetElm = targetElm.querySelector('.menu-submenu .menu-item.d-none');
						if (targetElm) {
							targetElm.classList.remove('d-none');
						}
					}
					
					var targetElm = elm.closest('.menu-submenu');
					if (targetElm) {
						targetElm.style.display = 'block';
						
						var targetElm = targetElm.querySelector('.menu-item:not(.has-text)');
						if (targetElm) {
							targetElm.classList.add('d-none');
						}
						
						var targetElm = elm.closest('.has-sub:not(.has-text)');
						if (targetElm) {
							targetElm.classList.remove('d-none');
							targetElm.classList.add('expand');
							
							var targetElm = targetElm.closest('.has-sub:not(.has-text)');
							if (targetElm) {
								targetElm.classList.remove('d-none');
								targetElm.classList.add('expand');
							}
						}
					}
				}
			});
		}
	} else {
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .menu > .menu-item:not(.menu-profile):not(.menu-header):not(.menu-search).has-sub .menu-submenu'));
		if (elms) {
			elms.map(function(elm) {
				elm.removeAttribute('style');
			});
		}
		
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .menu > .menu-item:not(.menu-profile):not(.menu-header):not(.menu-search)'));
		if (elms) {
			elms.map(function(elm) {
				elm.classList.remove('d-none');
			});
		}
		
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .menu-submenu > .menu-item'));
		if (elms) {
			elms.map(function(elm) {
				elm.classList.remove('d-none');
			});
		}
		
		var elms = [].slice.call(document.querySelectorAll('.app-sidebar:not(.app-sidebar-end) .expand'));
		if (elms) {
			elms.map(function(elm) {
				elm.classList.remove('expand');
			});
		}
	}
}	

onMounted(() => {
	var handleSidebarMenuToggle = function(menus, expandTime) {
		menus.map(function(menu) {
			menu.onclick = function(e) {
				e.preventDefault();
				var target = this.nextElementSibling;
	
				menus.map(function(m) {
					var otherTarget = m.nextElementSibling;
					if (otherTarget !== target) {
						slideUp(otherTarget, expandTime);
						otherTarget.closest('.menu-item').classList.remove('expand');
						otherTarget.closest('.menu-item').classList.add('closed');
					}
				});
	
				var targetItemElm = target.closest('.menu-item');
			
				if (targetItemElm.classList.contains('expand') || (targetItemElm.classList.contains('active') && !target.style.display)) {
					targetItemElm.classList.remove('expand');
					targetItemElm.classList.add('closed');
					slideToggle(target, expandTime);
				} else {
					targetItemElm.classList.add('expand');
					targetItemElm.classList.remove('closed');
					slideToggle(target, expandTime);
				}
			}
		});
	};
	
  var targetSidebar       = document.querySelector('.app-sidebar:not(.app-sidebar-end)');
	var expandTime          = (targetSidebar && targetSidebar.getAttribute('data-disable-slide-animation')) ? 0 : 250;
	var disableAutoCollapse = (targetSidebar && targetSidebar.getAttribute('data-disable-auto-collapse')) ? 1 : 0;
	
	var menuBaseSelector = '.app-sidebar .menu > .menu-item.has-sub';
	var submenuBaseSelector = ' > .menu-submenu > .menu-item.has-sub';

	// menu
	var menuLinkSelector =  menuBaseSelector + ' > .menu-link';
	var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
	handleSidebarMenuToggle(menus, expandTime);

	// submenu lvl 1
	var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
	var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .menu-link'));
	handleSidebarMenuToggle(submenusLvl1, expandTime);

	// submenu lvl 2
	var submenuLvl2Selector = menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
	var submenusLvl2 = [].slice.call(document.querySelectorAll(submenuLvl2Selector + ' > .menu-link'));
	handleSidebarMenuToggle(submenusLvl2, expandTime);
	
	handleSidebarMinifyFloatMenu();
	
	if (localStorage) {
		if (typeof localStorage.appSidebarMinified !== 'undefined') {
			appOption.appSidebarMinified = localStorage.appSidebarMinified;
		}
	}

});
</script>
<template>
	<div id="sidebar" class="app-sidebar" :data-bs-theme="appOption.appSidebarLight ? 'light' : 'dark'" v-bind:class="{ 
		'app-sidebar-grid': appOption.appSidebarGrid,
		'app-sidebar-transparent': appOption.appSidebarTransparent
	}">
		<perfect-scrollbar class="app-sidebar-content" v-bind:class="{ 'h-100': appOption.appSidebarFixed }">
			<div class="menu">
				<div class="menu-profile">
					<a href="javascript:;" class="menu-profile-link" v-on:click="appSidebarProfileToggle($event)">
						<div class="menu-profile-cover with-shadow"></div>
						<div class="menu-profile-image menu-profile-image-icon bg-gray-900 text-gray-600">
							<i class="fa fa-user"></i>
						</div>
						<div class="menu-profile-info">
							<div class="d-flex align-items-center">
								<div class="flex-grow-1 d-flex align-items-center">
									Sean Ngu
								</div>
								<div class="menu-caret ms-auto"></div>
							</div>
							<small>Frontend developer</small>
						</div>
					</a>
				</div>
				<div id="appSidebarProfileMenu" class="collapse">
					<div class="menu-item pt-5px">
						<a href="javascript:;" class="menu-link">
							<div class="menu-icon"><i class="fa fa-cog"></i></div>
							<div class="menu-text">Settings</div>
						</a>
					</div>
					<div class="menu-item">
						<a href="javascript:;" class="menu-link">
							<div class="menu-icon"><i class="fa fa-pencil-alt"></i></div>
							<div class="menu-text"> Send Feedback</div>
						</a>
					</div>
					<div class="menu-item pb-5px">
						<a href="javascript:;" class="menu-link">
							<div class="menu-icon"><i class="fa fa-question-circle"></i></div>
							<div class="menu-text"> Helps</div>
						</a>
					</div>
					<div class="menu-divider m-0"></div>
				</div>
				<div class="menu-search mb-n3" v-if="appOption.appSidebarSearch">
					<input type="text" class="form-control" placeholder="Sidebar menu filter..." v-on:keyup="handleSearchFunction($event)" />
				</div>
				<template v-for="menu in appSidebarMenu">
					<div class="menu-header" v-if="menu.is_header">{{ menu.text }}</div>
					<div class="menu-divider" v-else-if="menu.is_divider"></div>
					<template v-else>
						<sidebar-nav v-if="menu.title" v-bind:menu="menu"></sidebar-nav>
					</template>
				</template>
					
				<!-- BEGIN minify-button -->
				<div class="menu-item d-flex">
					<a href="javascript:;" class="app-sidebar-minify-btn ms-auto d-flex align-items-center text-decoration-none" v-on:click="toggleAppSidebarMinified($event)"><i class="fa fa-angle-double-left"></i></a>
				</div>
				<!-- END minify-button -->
			</div>
		</perfect-scrollbar>
	</div>
	<div class="app-sidebar-bg" :data-bs-theme="appOption.appSidebarLight ? 'light' : 'dark'"></div>
	<div class="app-sidebar-mobile-backdrop"><a href="#" v-on:click="appSidebarMobileToggled" class="stretched-link"></a></div>
</template>