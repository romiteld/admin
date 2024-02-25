<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';

export default {
	data () {
		return {
			code1: '',
			code2: '',
			code3: '',
			code4: '',
			code5: '',
			code6: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	mounted() {
		axios.get('/assets/data/ui/general-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/ui/general-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/ui/general-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/ui/general-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/ui/general-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/ui/general-code-6.json').then((response) => {
			this.code6 = response.data;
		});
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
			<li class="breadcrumb-item active">General</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">General UI Elements <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Alerts</panel-header>
					<panel-body>
						<div class="alert alert-success alert-dismissible fade show mb-0">
							<strong>Success!</strong>
							This is a success alert with <a href="#" class="alert-link">an example link</a>.
							<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
						</div>
					</panel-body>
					<highlightjs :code="code1" />
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<!-- BEGIN panel-heading -->
					<panel-header>
						Alerts Color <span class="badge bg-success ms-1">NEW</span>
					</panel-header>
					<!-- END panel-heading -->
					<panel-body>
						<div class="row gx-2">
							<div class="col-md-4">
								<div class="alert alert-primary alert-dismissible fade show mb-2">
									Primary alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-info alert-dismissible fade show mb-2">
									Info alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-purple alert-dismissible fade show mb-2">
									Purple alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-indigo alert-dismissible fade show mb-2">
									Indigo alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-success alert-dismissible fade show mb-2">
									Success alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-green alert-dismissible fade show mb-2">
									Green alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-lime alert-dismissible fade show mb-2">
									Lime alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-warning alert-dismissible fade show mb-2">
									Warning alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-yellow alert-dismissible fade show mb-2">
									Yellow alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-danger alert-dismissible fade show mb-2">
									Danger alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-pink alert-dismissible fade show mb-2">
									Pink alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-dark alert-dismissible fade show mb-2">
									Dark alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-secondary alert-dismissible fade show mb-2">
									Secondary alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
							<div class="col-md-4">
								<div class="alert alert-light alert-dismissible fade show mb-2">
									Light alert with <a href="#" class="alert-link">an example link</a>.
									<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
								</div>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Notes</panel-header>
					<panel-body>
						<div class="note alert-primary mb-2">
							<div class="note-icon"><i class="fab fa-facebook-f"></i></div>
							<div class="note-content">
								<h4><b>Note with icon!</b></h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Maecenas id gravida libero. Etiam semper id sem a ultricies.
								</p>
							</div>
						</div>
						<div class="note alert-warning note-with-end-icon mb-2">
							<div class="note-content text-end">
								<h4><b>Note with end icon!</b></h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Maecenas id gravida libero. Etiam semper id sem a ultricies.
								</p>
							</div>
							<div class="note-icon"><i class="fa fa-lightbulb"></i></div>
						</div>
						<div class="note alert-gray-500 mb-0">
							<div class="note-content">
								<h4><b>Note without icon!</b></h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Maecenas id gravida libero. Etiam semper id sem a ultricies.
								</p>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code3" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Badges <span class="badge bg-success ms-1">NEW</span></panel-header>
					<panel-body>
						<div class="row fs-14px">
							<div class="col-md-8">
								<div class="mb-3px">
									<span class="badge bg-danger me-1">Danger</span>
									<span class="badge bg-warning me-1">Warning</span>
									<span class="badge bg-yellow text-black me-1">Yellow</span>
									<span class="badge bg-lime me-1">Lime</span>
									<span class="badge bg-green me-1">Green</span>
									<span class="badge bg-success">Success</span>
								</div>
								<div class="mb-3px">
									<span class="badge bg-primary me-1">Primary</span>
									<span class="badge bg-info me-1">Info</span>
									<span class="badge bg-purple me-1">Purple</span>
									<span class="badge bg-indigo me-1">Indigo</span>
									<span class="badge bg-dark me-1">Dark</span>
								</div>
								<div class="">
									<span class="badge bg-pink me-1">Pink</span>
									<span class="badge bg-secondary me-1">Secondary</span>
									<span class="badge bg-default text-gray-900 me-1">Default</span>
									<span class="badge bg-light text-dark">Light</span>
								</div>
							</div>
							<div class="col-md-4">
								<div class="mb-3px">
									<span class="badge bg-inverse rounded-pill">Badge pill</span>
								</div>
								<div>
									<span class="badge bg-secondary rounded-0">Badge square</span>
								</div>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Pagination</panel-header>
					<panel-body>
						<div>
							<div class="pagination pagination-lg mb-2">
								<div class="page-item disabled"><a href="javascript:;" class="page-link">«</a></div>
								<div class="page-item active"><a href="javascript:;" class="page-link">1</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">2</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">3</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">4</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">5</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">»</a></div>
							</div>
						</div>
						<div>
							<ul class="pagination mb-2">
								<div class="page-item disabled"><a href="javascript:;" class="page-link">«</a></div>
								<div class="page-item active"><a href="javascript:;" class="page-link">1</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">2</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">3</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">4</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">5</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">»</a></div>
							</ul>
						</div>
						<div>
							<div class="pagination pagination-sm mb-3">
								<div class="page-item disabled"><a href="javascript:;" class="page-link">«</a></div>
								<div class="page-item active"><a href="javascript:;" class="page-link">1</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">2</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">3</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">4</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">5</a></div>
								<div class="page-item"><a href="javascript:;" class="page-link">»</a></div>
							</div>
						</div>
						<div class="pagination mb-2">
							<div class="page-item ms-auto"><a href="javascript:;" class="page-link rounded-pill px-3">Previous</a></div>
							<div class="page-item me-auto"><a href="javascript:;" class="page-link rounded-pill px-3">Next</a></div>
						</div>
						<div class="pagination">
							<div class="page-item disabled"><a href="javascript:;" class="page-link rounded-pill px-3">&larr; Older</a></div>
							<div class="page-item ms-auto"><a href="javascript:;" class="page-link rounded-pill px-3">Newer &rarr;</a></div>
						</div>
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Progress bar</panel-header>
					<panel-body>
						<div class="row">
							<div class="col-md-6 mb-3 mb-md-0">
								<div class="progress mb-2">
									<div class="progress-bar fs-10px fw-bold" style="width: 80%">Basic</div>
								</div>
								<div class="progress">
									<div class="progress-bar bg-warning progress-bar-striped fs-10px fw-bold" style="width: 80%">Striped</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="progress rounded-pill mb-2">
									<div class="progress-bar bg-indigo progress-bar-striped progress-bar-animated rounded-pill fs-10px fw-bold" style="width: 80%">Animated</div>
								</div>
								<div class="progress rounded-pill">
									<div class="progress-bar bg-dark fs-10px fw-bold" style="width: 25%">Stacked</div>
									<div class="progress-bar bg-grey fs-10px fw-bold" style="width: 25%">Stacked</div>
									<div class="progress-bar bg-lime fs-10px fw-bold" style="width: 25%">Stacked</div>
								</div>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	</div>
</template>