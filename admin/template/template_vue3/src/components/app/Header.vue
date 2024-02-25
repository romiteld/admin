<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppOptionStore } from '@/stores/app-option';
import { RouterLink } from 'vue-router';
import { slideToggle } from '@/composables/slideToggle.js';
import AppHeaderMegaMenu from '@/components/app/HeaderMegaMenu.vue';

const appOption = useAppOptionStore();
const notificationData = [{
	icon: 'fa fa-bug media-object bg-gray-500',
	title: 'Server Error Reports <i class="fa fa-exclamation-circle text-danger"></i>',
	time: '3 minutes ago'
},{
	img: '/assets/img/user/user-1.jpg',
	iconMedia: 'fab fa-facebook-messenger text-blue media-object-icon',
	title: 'John Smith',
	desc: 'Quisque pulvinar tellus sit amet sem scelerisque tincidunt.',
	time: '25 minutes ago'
},{
	img: '/assets/img/user/user-2.jpg',
	iconMedia: 'fab fa-facebook-messenger text-blue media-object-icon',
	title: 'Olivia',
	desc: 'Quisque pulvinar tellus sit amet sem scelerisque tincidunt.',
	time: '35 minutes ago'
},{
	icon: 'fa fa-plus media-object bg-gray-500',
	title: 'New User Registered',
	time: '1 hour ago'
},{
	icon: 'fa fa-envelope media-object bg-gray-500',
	iconMedia: 'fab fa-google text-warning media-object-icon fs-14px',
	title: 'New Email From John',
	time: '2 hour ago'
}];

function toggleAppSidebarCollapsed() {
	if (appOption.appSidebarCollapsed) {
		appOption.appSidebarToggled = !appOption.appSidebarToggled;
	} else if (appOption.appSidebarToggled) {
		appOption.appSidebarToggled = !appOption.appSidebarToggled;
	}
	appOption.appSidebarCollapsed = !appOption.appSidebarCollapsed;
};

function toggleAppSidebarMobileToggled() {
	appOption.appSidebarMobileToggled = !appOption.appSidebarMobileToggled;
};

function toggleAppSidebarEndToggled() {
	appOption.appSidebarEndToggled = !appOption.appSidebarEndToggled;
};

function toggleAppSidebarEndMobileToggled() {
	appOption.appSidebarEndMobileToggled = !appOption.appSidebarEndMobileToggled;
};

function toggleAppHeaderSearch(event) {
	event.preventDefault();
	
	appOption.appHeaderSearchToggled = !appOption.appHeaderSearchToggled;
};

function toggleAppTopMenuMobileToggled(event) {
	event.preventDefault();
	slideToggle(document.querySelector('.app-top-menu'));
};

function handleWindowResize() {
	window.addEventListener('resize', function() {
		var elm = document.querySelector('.app-top-menu');
		if (elm) {
			elm.removeAttribute('style');
		}
	});
};

function checkForm(event) {
	event.preventDefault();
	this.$router.push({ path: '/extra/search' })
};

onMounted(() => {
	handleWindowResize();
});
</script>

<template>
	<div id="header" class="app-header" :data-bs-theme="appOption.appHeaderInverse ? 'dark' : ''">
		<!-- BEGIN navbar-header -->
		<div class="navbar-header">
			<button type="button" class="navbar-mobile-toggler" v-if="appOption.appSidebarTwo" v-on:click="toggleAppSidebarEndMobileToggled">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<RouterLink to="/" class="navbar-brand">
				<span class="navbar-logo"></span> <b>Color</b> Admin
			</RouterLink>
			<button type="button" class="navbar-mobile-toggler" data-bs-toggle="collapse" data-bs-target="#top-navbar" v-if="appOption.appMegaMenu && !appOption.appSidebarTwo">
				<span class="fa-stack fa-lg">
					<i class="far fa-square fa-stack-2x"></i>
					<i class="fa fa-cog fa-stack-1x mt-1px"></i>
				</span>
			</button>
			<button type="button" class="navbar-mobile-toggler" v-if="appOption.appTopMenu && !appOption.appSidebarHide && !appOption.appSidebarTwo" v-on:click="toggleAppTopMenuMobileToggled">
				<span class="fa-stack fa-lg">
					<i class="far fa-square fa-stack-2x"></i>
					<i class="fa fa-cog fa-stack-1x mt-1px"></i>
				</span>
			</button>
			<button type="button" class="navbar-mobile-toggler" v-if="appOption.appTopMenu && appOption.appSidebarHide && !appOption.appSidebarTwo" v-on:click="toggleAppTopMenuMobileToggled($event)">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<button type="button" class="navbar-mobile-toggler" v-if="!appOption.appSidebarHide" v-on:click="toggleAppSidebarMobileToggled($event)">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
		<!-- END navbar-header -->
		
		<app-header-mega-menu v-if="appOption.appHeaderMegaMenu" />
		
		<!-- BEGIN header-nav -->
		<div class="navbar-nav">
			<div class="navbar-item navbar-form">
				<form action="" method="POST" name="search" v-on:submit="checkForm">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Enter keyword" />
						<button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
					</div>
				</form>
			</div>
			<div class="navbar-item dropdown">
				<a href="javascript:;" data-bs-toggle="dropdown" class="navbar-link dropdown-toggle icon">
					<i class="fa fa-bell"></i>
					<span class="badge">{{ notificationData.length }}</span>
				</a>
				<div class="dropdown-menu media-list dropdown-menu-end">
					<div class="dropdown-header">NOTIFICATIONS ({{ notificationData.length }})</div>
					<template v-if="notificationData && notificationData.length > 0">
						<a href="javascript:;" class="dropdown-item media" v-for="(notification, index) in notificationData" v-bind:key="index">
							<div class="media-left">
								<i v-if="notification.icon" v-bind:class="notification.icon"></i>
								<i v-if="notification.iconMedia" v-bind:class="notification.iconMedia"></i>
								<img v-if="notification.img" v-bind:src="notification.img" class="media-object" alt="" />
							</div>
							<div class="media-body">
								<h6 class="media-heading" v-html="notification.title"></h6>
								<p v-if="notification.desc" v-html="notification.desc"></p>
								<div class="text-muted fs-10px">{{ notification.time }}</div>
							</div>
						</a>
					</template>
					<template v-else>
						<div class="text-center w-300px py-3">
							No notification found
						</div>
					</template>
					<div class="dropdown-footer text-center">
						<a href="javascript:;" class="text-decoration-none">View more</a>
					</div>
				</div>
			</div>
			<div class="navbar-item dropdown" v-if="appOption.appHeaderLanguageBar">
				<a href="#" class="navbar-link dropdown-toggle" data-bs-toggle="dropdown">
					<span class="fi fi-us" title="us"></span>
					<span class="d-none d-sm-inline ms-1">EN</span> <b class="caret"></b>
				</a>
				<div class="dropdown-menu dropdown-menu-end">
					<a href="javascript:;" class="dropdown-item"><span class="fi fi-us me-2" title="us"></span> English</a>
					<a href="javascript:;" class="dropdown-item"><span class="fi fi-cn me-2" title="cn"></span> Chinese</a>
					<a href="javascript:;" class="dropdown-item"><span class="fi fi-jp me-2" title="jp"></span> Japanese</a>
					<a href="javascript:;" class="dropdown-item"><span class="fi fi-be me-2" title="be"></span> Belgium</a>
					<div class="dropdown-divider"></div>
					<a href="javascript:;" class="dropdown-item text-center">more options</a>
				</div>
			</div>
			<div class="navbar-item navbar-user dropdown">
				<a href="#" class="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
					<img src="/assets/img/user/user-13.jpg" alt="" /> 
					<span>
						<span class="d-none d-md-inline">Adam Schwartz</span>
						<b class="caret"></b>
					</span>
				</a>
				<div class="dropdown-menu dropdown-menu-end me-1">
					<router-link to="/extra/profile" class="dropdown-item">Edit Profile</router-link>
					<router-link to="/email/inbox" class="dropdown-item d-flex align-items-center">
						Inbox
						<span class="badge bg-danger rounded-pill ms-auto pb-4px">2</span> 
					</router-link>
					<router-link to="/calendar" class="dropdown-item">Calendar</router-link>
					<router-link to="/extra/settings-page" class="dropdown-item">Settings</router-link>
					<div class="dropdown-divider"></div>
					<router-link to="/user/login-v1" class="dropdown-item">Log Out</router-link>
				</div>
			</div>
			<div class="navbar-divider d-none d-md-block" v-if="appOption.appSidebarTwo"></div>
			<div class="navbar-item d-none d-md-block" v-if="appOption.appSidebarTwo">
				<a href="javascript:;" v-on:click="toggleAppSidebarEndToggled" class="navbar-link icon">
					<i class="fa fa-th"></i>
				</a>
			</div>
		</div>
		<!-- END header-nav -->
	</div>
</template>
