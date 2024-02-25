<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';
import { Toast } from 'bootstrap';

const appVariable = useAppVariableStore();

export default {
	data () {
		return {
			code1: '',
			code2: '',
			code3: '',
			code4: '',
			code5: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	methods: {
		showToast(event, target) {
			event.preventDefault();
			
			var toast = new Toast(document.getElementById(target));

    	toast.show();
		}
	},
	mounted() {
		axios.get('/assets/data/ui/modal-notification-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/ui/modal-notification-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/ui/modal-notification-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/ui/modal-notification-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/ui/modal-notification-code-5.json').then((response) => {
			this.code5 = response.data;
		});
	}
}
</script>
<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Modal & Notification</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Modal & Notification <small>header small text goes here...</small></h1>
	<!-- END page-header -->
	
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<panel>
				<panel-header>
					<panel-title>Modal</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. Please read the <a href="https://getbootstrap.com/docs/5.2/components/modal/" target="_blank">official Bootstrap documentation</a> for the full list of options.</p>
					<div class="modal position-static d-block">
						<div class="modal-dialog">
							<div class="modal-content shadow-lg">
								<div class="modal-header">
									<h5 class="modal-title">Modal Title</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
								</div>
								<div class="modal-body">
									<p>Modal body text goes here.</p>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
									<button type="button" class="btn btn-primary">Save changes</button>
								</div>
							</div>
						</div>
					</div>
				</panel-body>
				<highlightjs :code="code1" />
			</panel>
			
			<panel>
				<panel-header>
					<panel-title>Modal Sizes</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
					<!-- modal-xl -->
					<button type="button" class="btn btn-primary btn-lg me-2" data-bs-toggle="modal" data-bs-target="#modalXl">Extra large modal</button>
					
					<!-- modal-lg -->
					<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalLg">Large modal</button>
					
					<!-- modal-sm -->
					<button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#modalSm">Small modal</button>
				</panel-body>
				<highlightjs :code="code2" />
			</panel>
			
			<panel>
				<panel-header>
					<panel-title>Modal Message</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Modal message is an extended feature from Bootstrap modal. It provide the same background color as the modal content. Place a <code>.modal-message</code> css class on <code>.modal</code> for full cover modal.</p>
					<!-- modal-cover -->
					<button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalCoverExample">Modal Message</button>
				</panel-body>
				<highlightjs :code="code3" />
			</panel>
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<panel>
				<panel-header>
					<panel-title>Toasts Notification</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message. Please read the <a href="https://getbootstrap.com/docs/5.2/components/toasts/" target="_blank">official Bootstrap documentation</a> for the full list of options.</p>
					<div class="toast show">
						<div class="toast-header">
							<i class="far fa-bell text-muted me-2"></i>
							<strong class="me-auto">Bootstrap</strong>
							<small>11 mins ago</small>
							<button type="button" class="btn-close" data-bs-dismiss="toast"></button>
						</div>
						<div class="toast-body">
							Hello, world! This is a toast message.
						</div>
					</div>
				</panel-body>
				<highlightjs :code="code4" />
			</panel>
			
			<panel>
				<panel-header>
					<panel-title>Toasts Container</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Toasts container is an extended ui from Bootstrap toasts. Wrap the toasts with <code>.toasts-container</code> will allow toast to float within the right top position.</p>
					<a href="#" class="btn btn-primary me-2" @click="(event) => showToast(event, 'toast-1')">Show toast 1</a>
					<a href="#" class="btn btn-primary"  @click="(event) => showToast(event, 'toast-2')">Show toast 2</a>
				</panel-body>
				<highlightjs :code="code5" />
			</panel>
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
	
	<!-- BEGIN toasts-container -->
	<div class="position-fixed end-0 top-0 me-5 pt-5 mt-5">
		<div class="toast fade hide mb-3" data-autohide="false" id="toast-1">
			<div class="toast-header">
				<i class="far fa-bell text-muted me-2"></i>
				<strong class="me-auto">Bootstrap</strong>
				<small>11 mins ago</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast"></button>
			</div>
			<div class="toast-body">
				Hello, world! This is a toast message.
			</div>
		</div>
		<div class="toast fade hide mb-3" data-autohide="false" id="toast-2">
			<div class="toast-header">
				<i class="far fa-bell text-muted me-2"></i>
				<strong class="me-auto">Bootstrap</strong>
				<small>2 seconds ago</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast"></button>
			</div>
			<div class="toast-body">
				See? Just like this.
			</div>
		</div>
	</div>
	<!-- END toasts-container -->
	
	<!-- BEGIN modal -->
	<div class="modal modal-message fade" id="modalCoverExample">
		<div class="modal-dialog">
			<div class="modal-content py-5">
				<div class="modal-header">
					<h3 class="modal-title fs-24px">Sign Up!</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>
				<div class="modal-body">
					<p class="mb-3 fs-18px">
						25% Off On Your First Purchase* Enter code WELCOME at checkout<br />
						Discover new apps, things to do & more great news added daily!
					</p>
					<div class="row mb-3">
						<div class="col-md-9">
							<input type="text" placeholder="Your email address here" class="form-control form-control-lg h-50px" name="icon-filter">
						</div>
						<div class="col-md-3">
							<button type="button" class="btn btn-primary btn-lg w-100 h-50px">Continue</button>
						</div>
					</div>
					<div class="py-3">
						<a href="#" class="text-muted fs-14px">What is it? Terms and conditions</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="modalXl">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Extra Large Modal</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>
				<div class="modal-body">
					...
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="modalLg">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Large Modal</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>
				<div class="modal-body">
					...
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="modalSm">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Small Modal</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
				</div>
				<div class="modal-body">
					...
				</div>
			</div>
		</div>
	</div>
	<!-- END modal -->
</template>