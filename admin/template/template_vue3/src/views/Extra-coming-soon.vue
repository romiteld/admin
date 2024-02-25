<script>
import { useAppOptionStore } from '@/stores/app-option';
import { useRouter, RouterLink } from 'vue-router';
import VueCountdown from '@chenfengyuan/vue-countdown';

const appOption = useAppOptionStore();

export default {
	data() {
		return {
			year: (new Date()).getFullYear()
		}
	},
	components: {
		VueCountdown: VueCountdown
	},
	mounted() {
		appOption.appSidebarHide = true;
		appOption.appHeaderHide = true;
		appOption.appContentClass = 'p-0';
	},
	beforeUnmount() {
		appOption.appSidebarHide = false;
		appOption.appHeaderHide = false;
		appOption.appContentClass = '';
	},
	methods: {
		submitForm: function() {
			this.$router.push('/');
		}
	}
}
</script>
<template>
	<!-- BEGIN coming-soon -->
	<div class="coming-soon">
		<!-- BEGIN coming-soon-header -->
		<div class="coming-soon-header">
			<div class="bg-cover"></div>
			<div class="brand">
				<span class="logo"></span> <b>Color</b> Admin
			</div>
			<div class="desc">
				Our website is almost there and it’s rebuilt from scratch! A lot of great new features <br />and improvements are coming.
			</div>
			<div class="timer">
				<div id="timer" class="is-countdown">
					<vue-countdown class="countdown-row row text-center mx-0" :time="2 * 24 * 60 * 60 * 1000" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
						<div class="countdown-section col p-0">
							<div class="countdown-amount">{{ days }}</div>
							<div class="countdown-period">Days</div>
						</div>
						<div class="countdown-section col p-0">
							<div class="countdown-amount">{{ hours }}</div>
							<div class="countdown-period">Hours</div>
						</div>
						<div class="countdown-section col p-0">
							<div class="countdown-amount">{{ minutes }}</div>
							<div class="countdown-period">Minutes</div>
						</div>
						<div class="countdown-section col p-0">
							<div class="countdown-amount">{{ seconds }}</div>
							<div class="countdown-period">Seconds</div>
						</div>
					</vue-countdown>
				</div>
			</div>
		</div>
		<!-- END coming-soon-header -->
		<!-- BEGIN coming-soon-content -->
		<div class="coming-soon-content">
			<div class="desc">
				We are launching a closed <b>beta</b> soon!<br /> Sign up to try it before others and be the first to know when we <b>launch</b>.
			</div>
			<form v-on:submit.prevent="submitForm()">
				<div class="input-group input-group-lg mx-auto mb-2">
					<span class="input-group-text border-0 bg-light"><i class="fa fa-envelope"></i></span>
					<input type="text" class="form-control fs-13px border-0 shadow-none ps-0 bg-light" placeholder="Email Address" />
					<button type="submit" class="btn fs-13px btn-dark">Notify Me</button>
				</div>
			</form>
			<p class="text-gray-500 mb-5">We don't spam. Your email address is secure with us.</p>
			<p>
				<span class="me-2">Follow us on</span>
				<a href="javascript:;" class="mx-1 text-decoration-none text-inverse">
					<i class="fab fa-twitter fa-lg fa-fw text-info"></i> Twitter
				</a> 
				<a href="javascript:;" class="mx-1 text-decoration-none text-inverse">
					<i class="fab fa-facebook-square fa-lg fa-fw text-blue"></i> Facebook
				</a>
			</p>
		</div>
		<!-- END coming-soon-content -->
	</div>
	<!-- END coming-soon -->
</template>