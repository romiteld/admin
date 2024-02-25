<script setup lang="ts">
import { useAppOptionStore } from '@/stores/app-option';
import { useAppVariableStore, generateVariables } from '@/stores/app-variable';
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap';
import useEmitter from '@/composables/useEmitter';

const appOption = useAppOptionStore();
const appVariable = useAppVariableStore();
const emitter = useEmitter();

var themeList = [
 { name: 'Red', bgClass: 'bg-red', themeClass: 'theme-red' },
 { name: 'Pink', bgClass: 'bg-pink', themeClass: 'theme-pink' },
 { name: 'Orange', bgClass: 'bg-warning', themeClass: 'theme-warning' },
 { name: 'Yellow', bgClass: 'bg-yellow', themeClass: 'theme-yellow' },
 { name: 'Lime', bgClass: 'bg-lime', themeClass: 'theme-lime' },
 { name: 'Green', bgClass: 'bg-green', themeClass: 'theme-green' },
 { name: 'Default', bgClass: 'bg-teal', themeClass: 'theme-teal' },
 { name: 'Cyan', bgClass: 'bg-info', themeClass: 'theme-info' },
 { name: 'Blue', bgClass: 'bg-primary', themeClass: 'theme-primary' },
 { name: 'Purple', bgClass: 'bg-purple', themeClass: 'theme-purple' },
 { name: 'Indigo', bgClass: 'bg-indigo', themeClass: 'theme-indigo' },
 { name: 'Black', bgClass: 'bg-black', themeClass: 'theme-gray-600' }
];

function reloadVariable() {
	var newVariables = generateVariables();
	appVariable.font = newVariables.font;
	appVariable.color = newVariables.color;
}

function appThemePanelToggled(event) {
	event.preventDefault();
	
	appOption.appThemePanelToggled = (appOption.appThemePanelToggled) ? '' : true;
	if (localStorage) {
		localStorage.appThemePanelToggled = appOption.appThemePanelToggled;
	}
}

function toggleTheme(event, themeClass) {
	event.preventDefault();
	
	appOption.appThemeClass = themeClass;
	
	if (localStorage) {
		localStorage.appThemeClass = appOption.appThemeClass;
	}
	setThemeClass(localStorage.appThemeClass);
}

function setThemeClass(themeClass) {
	for (var x = 0; x < document.body.classList.length; x++) {
		var targetClass = document.body.classList[x];
		if (targetClass.search('theme-') > -1) {
			document.body.classList.remove(targetClass);
		}
	}
	document.body.classList.add(themeClass);
	appVariable.color.theme = (getComputedStyle(document.body).getPropertyValue('--bs-app-theme')).trim();
	appVariable.color.themeRgb = (getComputedStyle(document.body).getPropertyValue('--bs-app-theme-rgb')).trim();
	
	emitter.emit('theme-reload', true);
}

function toggleDarkMode() {
	if (localStorage) {
		localStorage.appDarkMode = appOption.appDarkMode;
	}
	setDarkMode(localStorage.appDarkMode);	
}

function setDarkMode(darkMode) {
	if (darkMode == 'true') {
		document.querySelector('html').setAttribute('data-bs-theme', 'dark');
	} else {
		document.querySelector('html').removeAttribute('data-bs-theme');
	}
	reloadVariable();
	emitter.emit('theme-reload', true);
}

function toggleHeaderFixed() {
	if (!appOption.appHeaderFixed && appOption.appSidebarFixed) {
		appOption.appSidebarFixed = false;
		localStorage.appSidebarFixed = appOption.appSidebarFixed;
		alert('Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar.');
	}
	if (localStorage) {
		localStorage.appHeaderFixed = appOption.appHeaderFixed;
	}
}

function toggleHeaderInverse() {
	if (localStorage) {
		localStorage.appHeaderInverse = appOption.appHeaderInverse;
	}
}

function toggleSidebarFixed() {
	if (!appOption.appHeaderFixed && appOption.appSidebarFixed) {
		appOption.appHeaderFixed = true;
		localStorage.appHeaderFixed = appOption.appHeaderFixed;
		alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
	}
	if (localStorage) {
		localStorage.appSidebarFixed = appOption.appSidebarFixed;
	}
}

function toggleSidebarGrid() {
	if (localStorage) {
		localStorage.appSidebarGrid = appOption.appSidebarGrid;
	}
}

function toggleGradientEnabled() {
	if (localStorage) {
		localStorage.appGradientEnabled = appOption.appGradientEnabled;
	}
}

onMounted(() => {
	var elm = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	
	for (var i = 0; i < elm.length; i++) {
		new Tooltip(elm[i]);
	}
	
	if (localStorage) {
		if (typeof localStorage.appThemePanelToggled !== 'undefined') {
			appOption.appThemePanelToggled = localStorage.appThemePanelToggled;
		}
		if (typeof localStorage.appThemeClass !== 'undefined') {
			appOption.appThemeClass = localStorage.appThemeClass;
			setThemeClass(localStorage.appThemeClass);
		}
		if (typeof localStorage.appDarkMode !== 'undefined') {
			appOption.appDarkMode = localStorage.appDarkMode;
			setDarkMode(appOption.appDarkMode);
		}
		if (typeof localStorage.appHeaderInverse !== 'undefined') {
			appOption.appHeaderInverse = localStorage.appHeaderInverse;
		}
		if (typeof localStorage.appHeaderFixed !== 'undefined') {
			appOption.appHeaderFixed = localStorage.appHeaderFixed;
		}
		if (typeof localStorage.appSidebarFixed !== 'undefined') {
			appOption.appSidebarFixed = localStorage.appSidebarFixed;
		}
		if (typeof appSidebarGrid.appHeaderInverse !== 'undefined') {
			appOption.appSidebarGrid = localStorage.appSidebarGrid;
		}
		if (typeof localStorage.appGradientEnabled !== 'undefined') {
			appOption.appGradientEnabled = localStorage.appGradientEnabled;
		}
	}
});

</script>
<template>
	<div class="app-theme-panel d-none" v-bind:class="{ 'active': appOption.appThemePanelToggled === 'true' }">
		<div class="app-theme-panel-container">
			<a href="#" v-on:click="appThemePanelToggled" class="app-theme-toggle-btn"><i class="bi bi-sliders"></i></a>
			<div class="app-theme-panel-content">
				<div class="small fw-bold text-white mb-1">Theme Color</div>
				<div class="mb-3">
					<div class="p-2">
						<div class="app-theme-list">
							<div class="app-theme-list-item" 
								v-bind:class="{ 'active': appOption.appThemeClass == theme.themeClass || (!appOption.appThemeClass && theme.name == 'Default') }" 
								v-for="theme in themeList">
								<a href="javascript:;" class="app-theme-list-link"
									v-bind:class="theme.bgClass"
									v-on:click="(event) => toggleTheme(event, theme.themeClass)"
									data-bs-toggle="tooltip" 
									data-bs-trigger="hover" 
									data-bs-container="body" 
									v-bind:data-bs-title="theme.name">&nbsp;</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- BEGIN theme-panel -->
	<div class="theme-panel" v-bind:class="{ 'active': appOption.appThemePanelToggled }">
		<a href="javascript:;" v-on:click="appThemePanelToggled" class="theme-collapse-btn"><i class="fa fa-cog"></i></a>
		<perfect-scrollbar class="theme-panel-content h-100">
			<h5>App Settings</h5>
			
			<!-- BEGIN theme-list -->
			<div class="theme-list">
				<div class="theme-list-item" 
					v-bind:class="{ 'active': appOption.appThemeClass == theme.themeClass || (!appOption.appThemeClass && theme.name == 'Default') }" 
					v-for="theme in themeList">
					<a href="javascript:;" class="theme-list-link"
						v-bind:class="theme.bgClass"
						v-on:click="(event) => toggleTheme(event, theme.themeClass)"
						data-bs-toggle="tooltip" 
						data-bs-trigger="hover" 
						data-bs-container="body" 
						v-bind:data-bs-title="theme.name">&nbsp;</a>
				</div>
			</div>
			<!-- END theme-list -->
			
			<div class="theme-panel-divider"></div>
			
			<div class="row mt-10px">
				<div class="col-8 control-label text-dark fw-bold">
					<div>Dark Mode <span class="badge bg-primary ms-1 py-2px position-relative" style="top: -1px;">NEW</span></div>
					<div class="lh-14">
						<small class="text-dark opacity-50">
							Adjust the appearance to reduce glare and give your eyes a break.
						</small>
					</div>
				</div>
				<div class="col-4 d-flex">
					<div class="form-check form-switch ms-auto mb-0">
						<input type="checkbox" class="form-check-input" v-on:change="toggleDarkMode()" v-model="appOption.appDarkMode" true-value="true" false-value="" />
						<label class="form-check-label" for="appThemeDarkMode">&nbsp;</label>
					</div>
				</div>
			</div>
			
			<div class="theme-panel-divider"></div>
			
			<!-- BEGIN theme-switch -->
			<div class="row mt-10px align-items-center">
				<div class="col-8 control-label text-dark fw-bold">Header Fixed</div>
				<div class="col-4 d-flex">
					<div class="form-check form-switch ms-auto mb-0">
						<input type="checkbox" class="form-check-input" id="appHeaderFixed" v-on:change="toggleHeaderFixed()" v-model="appOption.appHeaderFixed" true-value="true" false-value="" />
						<label class="form-check-label" for="appHeaderFixed">&nbsp;</label>
					</div>
				</div>
			</div>
			<div class="row mt-10px align-items-center">
				<div class="col-8 control-label text-dark fw-bold">Header Inverse</div>
				<div class="col-4 d-flex">
					<div class="form-check form-switch ms-auto mb-0">
						<input type="checkbox" class="form-check-input" id="appHeaderInverse" v-on:change="toggleHeaderInverse()" v-model="appOption.appHeaderInverse" true-value="true" false-value="" />
						<label class="form-check-label" for="appHeaderInverse">&nbsp;</label>
					</div>
				</div>
			</div>
			<div class="row mt-10px align-items-center">
				<div class="col-8 control-label text-dark fw-bold">Sidebar Fixed</div>
				<div class="col-4 d-flex">
					<div class="form-check form-switch ms-auto mb-0">
						<input type="checkbox" class="form-check-input" id="appSidebarFixed" v-on:change="toggleSidebarFixed()" v-model="appOption.appSidebarFixed" true-value="true" false-value="" />
						<label class="form-check-label" for="appSidebarFixed">&nbsp;</label>
					</div>
				</div>
			</div>
			<div class="row mt-10px align-items-center">
				<div class="col-8 control-label text-dark fw-bold">Sidebar Grid</div>
				<div class="col-4 d-flex">
					<div class="form-check form-switch ms-auto mb-0">
						<input type="checkbox" class="form-check-input" id="appSidebarGrid" v-on:change="toggleSidebarGrid()" v-model="appOption.appSidebarGrid" true-value="true" false-value="" />
						<label class="form-check-label" for="appSidebarGrid">&nbsp;</label>
					</div>
				</div>
			</div>
			<div class="row mt-10px align-items-center">
				<div class="col-md-8 control-label text-dark fw-bold">Gradient Enabled</div>
				<div class="col-md-4 d-flex">
					<div class="form-check form-switch ms-auto mb-0">
						<input type="checkbox" class="form-check-input" id="appGradientEnabled" v-on:change="toggleGradientEnabled()" v-model="appOption.appGradientEnabled" true-value="true" false-value="" />
						<label class="form-check-label" for="appGradientEnabled">&nbsp;</label>
					</div>
				</div>
			</div>
			<!-- END theme-switch -->
			
			<div class="theme-panel-divider"></div>
			
			<h5>Admin Design (5)</h5>
			<!-- BEGIN theme-version -->
			<div class="theme-version">
				<div class="theme-version-item">
					<a href="../template_html/index_v2.html" class="theme-version-link active">
						<span style="background-image: url(../assets/img/theme/default.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_transparent/index_v2.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/transparent.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_apple/index_v2.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/apple.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_material/index_v2.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/material.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_facebook/index_v2.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/facebook.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_google/index_v2.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/google.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
			</div>
			<!-- END theme-version -->
			
			<div class="theme-panel-divider"></div>
			
			<h5>Language Version (7)</h5>
			<!-- BEGIN theme-version -->
			<div class="theme-version">
				<div class="theme-version-item">
					<a href="../template_html/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/html.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_ajax/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/ajax.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_angularjs/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/angular1x.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_angularjs17/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/angular10x.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="javascript:alert('Laravel 10 Version only available in downloaded version.');" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/laravel.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_vue3/index.html" class="theme-version-link active">
						<span style="background-image: url(../assets/img/version/vuejs.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../template_reactjs/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/reactjs.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="javascript:alert('.NET Core 7.0 MVC Version only available in downloaded version.');" class="theme-version-link">
						<span style="background-image: url(../assets/img/version/dotnet.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
			</div>
			<!-- END theme-version -->
			
			<div class="theme-panel-divider"></div>
			
			<h5>Frontend Design (5)</h5>
			<!-- BEGIN theme-version -->
			<div class="theme-version">
				<div class="theme-version-item">
					<a href="../../../frontend/template/template_one_page_parallax/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/one-page-parallax.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../../../frontend/template/template_e_commerce/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/e-commerce.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../../../frontend/template/template_blog/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/blog.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../../../frontend/template/template_forum/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/forum.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
				<div class="theme-version-item">
					<a href="../../../frontend/template/template_corporate/index.html" class="theme-version-link">
						<span style="background-image: url(../assets/img/theme/corporate.jpg);" class="theme-version-cover"></span>
					</a>
				</div>
			</div>
			<!-- END theme-version -->
			
			<div class="theme-panel-divider"></div>
			
			<a href="https://seantheme.com/color-admin/documentation/" class="btn btn-dark d-block w-100 rounded-pill mb-10px" target="_blank"><b>Documentation</b></a>
			<a href="javascript:;" class="btn btn-default d-block w-100 rounded-pill" data-toggle="reset-local-storage"><b>Reset Local Storage</b></a>
		</perfect-scrollbar>
	</div>
	<!-- END theme-panel -->
</template>
