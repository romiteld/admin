<script>
import tagsInput from '@/components/plugins/TagsInput.vue';
import quillEditor from '@/components/plugins/quillEditor.vue';
import { useAppOptionStore } from '@/stores/app-option';

const appOption = useAppOptionStore();

export default {
  components: {
    tagsInput: tagsInput,
    quillEditor: quillEditor
  },
	data() {
		appOption.appContentFullHeight = true;
		appOption.appContentClass = 'p-0';

		return { 
			editor: {
				height: (window.innerHeight > 600) ? window.innerHeight - 315 : 300
			},
			tagsArray: [
				'bootstrap@gmail.com', 'google@gmail.com'
			],
			tagEmailTo: [],
			tagsEmailTo: ['bootstrap@gmail.com', 'google@gmail.com'],
			tagEmailCc: [],
			tagsEmailCc: [],
			tagEmailBcc: [],
			tagsEmailBcc: [],
			email: {
				cc: false,
				bcc: false
			}
		}
	},
	beforeRouteLeave (to, from, next) {
		appOption.appContentFullHeight = false;
		appOption.appContentClass = '';
		next();
	},
	methods: {
		handleCc: function(type) {
			if (type == 'cc') {
				this.email.cc = true;
			} else if (type == 'bcc') {
				this.email.bcc = true;
			}
		}
	}
}
</script>

<template>
	<!-- BEGIN mailbox -->
	<div class="mailbox">
		<!-- BEGIN mailbox-sidebar -->
		<div class="mailbox-sidebar">
			<div class="mailbox-sidebar-header d-flex justify-content-center">
				<a href="#emailNav" data-bs-toggle="collapse" class="btn btn-dark btn-sm me-auto d-block d-lg-none">
					<i class="fa fa-cog"></i>
				</a>
				<router-link to="/email/compose" class="btn btn-dark ps-40px pe-40px btn-sm">
					Compose
				</router-link>
			</div>
			<div class="mailbox-sidebar-content collapse d-lg-block" id="emailNav">
				<!-- BEGIN scrollbar -->
				<div data-scrollbar="true" data-height="100%" data-skip-mobile="true">
					<div class="nav-title"><b>FOLDERS</b></div>
					<ul class="nav nav-inbox">
						<li><router-link to="/email/inbox"><i class="fa fa-hdd fa-lg fa-fw me-2"></i> Inbox <span class="badge bg-gray-600 fs-10px rounded-pill ms-auto fw-bolder pt-4px pb-5px px-8px">52</span></router-link></li>
						<li><router-link to="/email/inbox"><i class="fa fa-flag fa-lg fa-fw me-2"></i> Important</router-link></li>
						<li><router-link to="/email/inbox"><i class="fa fa-envelope fa-lg fa-fw me-2"></i> Sent</router-link></li>
						<li><router-link to="/email/inbox"><i class="fa fa-save fa-lg fa-fw me-2"></i> Drafts</router-link></li>
						<li><router-link to="/email/inbox"><i class="fa fa-trash-alt fa-lg fa-fw me-2"></i> Trash</router-link></li>
					</ul>
					<div class="nav-title"><b>LABEL</b></div>
					<ul class="nav nav-inbox">
						<li><a href="javascript:;"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-dark"></i> Admin</a></li>
						<li><a href="javascript:;"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-blue"></i> Designer & Employer</a></li>
						<li><a href="javascript:;"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-success"></i> Staff</a></li>
						<li><a href="javascript:;"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-warning"></i> Sponsorer</a></li>
						<li><a href="javascript:;"><i class="fa fa-fw fa-lg fs-12px me-2 fa-circle text-danger"></i> Client</a></li>
					</ul>
				</div>
				<!-- END scrollbar -->
			</div>
		</div>
		<!-- END mailbox-sidebar -->
		<!-- BEGIN mailbox-content -->
		<div class="mailbox-content">
			<div class="mailbox-content-header">
				<!-- BEGIN btn-toolbar -->
				<div class="btn-toolbar align-items-center">
					<div class="btn-group me-2">
						<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-envelope"></i> <span class="hidden-xs">Send</span></a>
						<a href="javascript:;" class="btn btn-white btn-sm"><i class="fa fa-fw fa-paperclip"></i> <span class="hidden-xs">Attach</span></a>
					</div>
					<div>
						<a href="#" class="btn btn-white btn-sm" data-bs-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-h"></i></a>
						<div class="dropdown-menu dropdown-menu-end">
							<a href="javascript:;" class="dropdown-item">Save draft</a>
							<a href="javascript:;" class="dropdown-item">Show From</a>
							<a href="javascript:;" class="dropdown-item">Check names</a>
							<a href="javascript:;" class="dropdown-item">Switch to plain text</a>
							<a href="javascript:;" class="dropdown-item">Check for accessibility issues</a>
						</div>
					</div>
					<div class="ms-auto">
						<router-link to="/email/inbox" class="btn btn-white btn-sm"><i class="fa fa-fw fa-times"></i> <span class="hidden-xs">Discard</span></router-link>
					</div>
				</div>
				<!-- END btn-toolbar -->
			</div>
			<div class="mailbox-content-body">
				<!-- BEGIN scrollbar -->
				<div data-scrollbar="true" data-height="100%" data-skip-mobile="true">
					<!-- BEGIN form -->
					<form action="/" method="POST" name="email_to_form" class="mailbox-form">
						<!-- BEGIN mailbox-to -->
						<div class="mailbox-to">
							<label class="control-label">To:</label>
							<tags-input v-model="tagEmailTo" :tags="tagsEmailTo" />
							<div class="mailbox-float-link">
								<a href="#" v-on:click="handleCc('cc')" v-if="!email.cc" class="me-5px">Cc</a>
								<a href="#" v-on:click="handleCc('bcc')" v-if="!email.bcc" data-name="Bcc">Bcc</a>
							</div>
						</div>
						<!-- END mailbox-to -->
						
						<!-- BEGIN mailbox-cc -->
						<div class="mailbox-to" v-if="email.cc">
							<label class="control-label">Cc:</label>
							<tags-input v-model="tagEmailCc" :tags="tagsEmailCc" />
						</div>
						<!-- END mailbox-cc -->
						
						<!-- BEGIN mailbox-bcc -->
						<div class="mailbox-to" v-if="email.bcc">
							<label class="control-label">Bcc:</label>
							<tags-input v-model="tagEmailBcc" :tags="tagsEmailBcc" />
						</div>
						<!-- END mailbox-bcc -->

						<!-- BEGIN mailbox-subject -->
						<div class="mailbox-subject">
							<input type="text" class="form-control" placeholder="Subject" />
						</div>
						<!-- END mailbox-subject -->
						<!-- BEGIN mailbox-input -->
						<div class="mailbox-input">
							<div class="border-0">
								<quill-editor theme="snow" />
							</div>
						</div>
						<!-- END mailbox-input -->
					</form>
					<!-- END form -->
				</div>
				<!-- END scrollbar -->
			</div>
			<div class="mailbox-content-footer d-flex align-items-center justify-content-end">
				<button type="submit" class="btn btn-white ps-40px pe-40px me-5px">Discard</button>
				<button type="submit" class="btn btn-primary ps-40px pe-40px">Send</button>
			</div>
		</div>
		<!-- END mailbox-content -->
	</div>
	<!-- END mailbox -->
</template>