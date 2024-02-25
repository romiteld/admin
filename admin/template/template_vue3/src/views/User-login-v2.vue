<script>
import { useAppOptionStore } from '@/stores/app-option';

const appOption = useAppOptionStore();

export default {
	mounted() {
		appOption.appSidebarHide = true;
		appOption.appHeaderHide = true;
		appOption.appContentClass = 'p-0';
	},
	beforeRouteLeave (to, from, next) {
		appOption.appSidebarHide = false;
		appOption.appHeaderHide = false;
		appOption.appContentClass = '';
		next();
	},
	data() {
		return {
			bg: {
				activeImg: '/assets/img/login-bg/login-bg-17.jpg',
				bg1: {
					active: true,
					img: '/assets/img/login-bg/login-bg-17.jpg'
				},
				bg2: {
					active: false,
					img: '/assets/img/login-bg/login-bg-16.jpg'
				},
				bg3: {
					active: false,
					img: '/assets/img/login-bg/login-bg-15.jpg'
				},
				bg4: {
					active: false,
					img: '/assets/img/login-bg/login-bg-14.jpg'
				},
				bg5: {
					active: false,
					img: '/assets/img/login-bg/login-bg-13.jpg'
				},
				bg6: {
					active: false,
					img: '/assets/img/login-bg/login-bg-12.jpg'
				}
			}
		}
	},
	methods: {
		checkForm: function(e) {
			e.preventDefault();
			this.$router.push({ path: '/dashboard/v3'})
		},
		select: function(x) {
			this.bg.bg1.active = false;
			this.bg.bg2.active = false;
			this.bg.bg3.active = false;
			this.bg.bg4.active = false;
			this.bg.bg5.active = false;
			this.bg.bg6.active = false;
			
			switch (x) {
				case 'bg1': 
					this.bg.bg1.active = true;
					this.bg.activeImg = this.bg.bg1.img;
					break;
				case 'bg2': 
					this.bg.bg2.active = true;
					this.bg.activeImg = this.bg.bg2.img;
					break;
				case 'bg3': 
					this.bg.bg3.active = true;
					this.bg.activeImg = this.bg.bg3.img;
					break;
				case 'bg4': 
					this.bg.bg4.active = true;
					this.bg.activeImg = this.bg.bg4.img;
					break;
				case 'bg5': 
					this.bg.bg5.active = true;
					this.bg.activeImg = this.bg.bg5.img;
					break;
				case 'bg6': 
					this.bg.bg6.active = true;
					this.bg.activeImg = this.bg.bg6.img;
					break;
			}
		}
	}
}
</script>
<template>
	<div>
		<!-- BEGIN login -->
		<div class="login login-v2 fw-bold">
			<!-- BEGIN login-cover -->
			<div class="login-cover">
				<div class="login-cover-img" v-bind:style="{ backgroundImage: 'url('+ bg.activeImg +')' }"></div>
				<div class="login-cover-bg"></div>
			</div>
			<!-- END login-cover -->
			
			<!-- BEGIN login-container -->
			<div class="login-container">
				<!-- BEGIN login-header -->
				<div class="login-header">
					<div class="brand">
						<div class="d-flex align-items-center">
							<span class="logo"></span> <b>Color</b> Admin
						</div>
						<small>Bootstrap 5 Responsive Admin Template</small>
					</div>
					<div class="icon">
						<i class="fa fa-lock"></i>
					</div>
				</div>
				<!-- END login-header -->
				
				<!-- BEGIN login-content -->
				<div class="login-content">
					<form v-on:submit="checkForm" method="GET">
						<div class="form-floating mb-20px">
							<input type="text" class="form-control fs-13px h-45px border-0" placeholder="Email Address" id="emailAddress" />
							<label for="emailAddress" class="d-flex align-items-center text-gray-600 fs-13px">Email Address</label>
						</div>
						<div class="form-floating mb-20px">
							<input type="password" class="form-control fs-13px h-45px border-0" placeholder="Password" />
							<label for="emailAddress" class="d-flex align-items-center text-gray-600 fs-13px">Password</label>
						</div>
						<div class="form-check mb-20px">
							<input class="form-check-input border-0" type="checkbox" value="1" id="rememberMe" />
							<label class="form-check-label fs-13px text-gray-500" for="rememberMe">
								Remember Me
							</label>
						</div>
						<div class="mb-20px">
							<button type="submit" class="btn btn-theme d-block w-100 h-45px btn-lg">Sign me in</button>
						</div>
						<div class="text-gray-500">
							Not a member yet? Click <a href="javascript:;" class="text-white">here</a> to register.
						</div>
					</form>
				</div>
				<!-- END login-content -->
			</div>
			<!-- END login-container -->
		</div>
		<!-- END login -->
		
		<!-- BEGIN login-bg -->
		<div class="login-bg-list clearfix">
			<div class="login-bg-list-item" v-bind:class="{ 'active': bg.bg1.active }"><a href="javascript:;" class="login-bg-list-link" v-on:click="select('bg1')" style="background-image: url(/assets/img/login-bg/login-bg-17.jpg)"></a></div>
			<div class="login-bg-list-item" v-bind:class="{ 'active': bg.bg2.active }"><a href="javascript:;" class="login-bg-list-link" v-on:click="select('bg2')" style="background-image: url(/assets/img/login-bg/login-bg-16.jpg)"></a></div>
			<div class="login-bg-list-item" v-bind:class="{ 'active': bg.bg3.active }"><a href="javascript:;" class="login-bg-list-link" v-on:click="select('bg3')" style="background-image: url(/assets/img/login-bg/login-bg-15.jpg)"></a></div>
			<div class="login-bg-list-item" v-bind:class="{ 'active': bg.bg4.active }"><a href="javascript:;" class="login-bg-list-link" v-on:click="select('bg4')" style="background-image: url(/assets/img/login-bg/login-bg-14.jpg)"></a></div>
			<div class="login-bg-list-item" v-bind:class="{ 'active': bg.bg5.active }"><a href="javascript:;" class="login-bg-list-link" v-on:click="select('bg5')" style="background-image: url(/assets/img/login-bg/login-bg-13.jpg)"></a></div>
			<div class="login-bg-list-item" v-bind:class="{ 'active': bg.bg6.active }"><a href="javascript:;" class="login-bg-list-link" v-on:click="select('bg6')" style="background-image: url(/assets/img/login-bg/login-bg-12.jpg)"></a></div>
		</div>
		<!-- END login-bg -->
	</div>
</template>