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
	methods: {
		checkForm: function(e) {
			e.preventDefault();
			this.$router.push({ path: '/dashboard/v3'})
		}
	}
}
</script>

<template>
	<!-- BEGIN error -->
	<div class="error">
		<div class="error-code">404</div>
		<div class="error-content">
			<div class="error-message">We couldn't find it...</div>
			<div class="error-desc mb-4">
				The page you're looking for doesn't exist. <br />
				Perhaps, there pages will help find what you're looking for.
			</div>
			<div>
				<router-link to="/dashboard/v2" class="btn btn-success px-3">Go Home</router-link>
			</div>
		</div>
	</div>
	<!-- END error -->
</template>