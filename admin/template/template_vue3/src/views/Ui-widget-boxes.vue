<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';

const appVariable = useAppVariableStore();

export default {
	data () {
		return {
			code1: '',
			code2: '',
			code3: '',
			code4: '',
			code5: '',
			code6: '',
			code7: '',
			code8: '',
			code9: '',
			code10: '',
			code11: '',
			code12: '',
			code13: '',
			code14: '',
			code15: '',
			code16: '',
			code17: '',
			code18: '',
			code19: '',
			code20: '',
			code21: '',
			code22: '',
			code23: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	mounted() {
		axios.get('/assets/data/ui/widget-boxes-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-9.json').then((response) => {
			this.code9 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-10.json').then((response) => {
			this.code10 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-11.json').then((response) => {
			this.code11 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-12.json').then((response) => {
			this.code12 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-13.json').then((response) => {
			this.code13 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-14.json').then((response) => {
			this.code14 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-15.json').then((response) => {
			this.code15 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-16.json').then((response) => {
			this.code16 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-17.json').then((response) => {
			this.code17 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-18.json').then((response) => {
			this.code18 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-19.json').then((response) => {
			this.code19 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-20.json').then((response) => {
			this.code20 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-21.json').then((response) => {
			this.code21 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-22.json').then((response) => {
			this.code22 = response.data;
		});
		axios.get('/assets/data/ui/widget-boxes-code-23.json').then((response) => {
			this.code23 = response.data;
		});
	}
}
</script>
<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Widget Boxes</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Widget Boxes <small>header small text goes here...</small></h1>
	<!-- END page-header -->
	
	<!-- BEGIN row -->
	<div class="row mb-3">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel (Default)</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code1" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel Header with Dropdown</panel-title>
					<div class="btn-group my-n1">
						<button type="button" class="btn btn-success btn-xs">Action</button>
						<button type="button" class="btn btn-success btn-xs dropdown-toggle" data-bs-toggle="dropdown"><b class="caret"></b></button>
						<div class="dropdown-menu dropdown-menu-end">
							<a href="javascript:;" class="dropdown-item">Action</a>
							<a href="javascript:;" class="dropdown-item">Another action</a>
							<a href="javascript:;" class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:;" class="dropdown-item">Separated link</a>
						</div>
					</div>
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code2" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel Header with Radio Button</panel-title>
					<div class="btn-group btn-group-toggle my-n1" data-toggle="buttons">
						<input type="radio" name="options" class="btn-check" id="option1" autocomplete="off" checked />
						<label class="btn btn-success btn-xs" for="option1"> Option 1</label>
						
						<input type="radio" name="options" class="btn-check" id="option2" autocomplete="off" />
						<label class="btn btn-success btn-xs" for="option2"> Option 2</label>
					</div>
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code3" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel Header with Progress Bar</panel-title>
					<div class="progress h-10px bg-gray-700 w-150px">
						<div class="progress-bar progress-bar-striped bg-success progress-bar-animated fw-bold" style="width: 40%">40%</div>
					</div>
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code4" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel Header with Badge <span class="badge bg-success ms-1">NEW</span></panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code5" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>
						Panel with Alert Box
					</panel-title>
				</panel-header>
				<div class="alert alert-success alert-dismissible fade show rounded-0 mb-0">
					<div class="d-flex">
						<i class="fa fa-check fa-2x me-1"></i>
						<div class="mb-0 ps-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.
						</div>
					</div>
					<button type="button" class="btn-close ms-3" data-bs-dismiss="alert"></button>
				</div>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code6" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel class="panel-hover-icon">
				<panel-header>
					<panel-title>Hover View Icon</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code7" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel with Scrollbar</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<perfect-scrollbar class="h-300px">
						<p>
							<span class="fa-stack fa-4x float-start me-10px text-dark">
								<i class="fab fa-twitter fa-stack-1x"></i>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed enim arcu. 
							Ut posuere in ligula quis ultricies. In in justo turpis. Donec ut dui at massa gravida 
							interdum nec vitae justo. Quisque ullamcorper vehicula dictum. Nullam hendrerit interdum eleifend. 
							Aenean luctus sed arcu laoreet scelerisque. Vivamus non ullamcorper mauris, id sagittis lorem. 
							Proin tincidunt mauris et dolor mattis imperdiet. Sed facilisis mattis diam elementum adipiscing. 
						</p>
						<p>
							<span class="fa-stack fa-4x float-end ms-10px text-dark">
								<i class="fab fa-google-plus fa-stack-1x"></i>
							</span>
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							Ut ante velit, pretium non nisi a, egestas placerat diam. Nullam aliquet iaculis ultricies. 
							Aliquam volutpat, sapien quis volutpat elementum, ligula purus auctor diam, at vestibulum nulla augue 
							vel purus. Praesent ac nisl a magna tincidunt interdum sed in turpis. Maecenas nec condimentum risus. 
							In congue pretium est, eget euismod tortor ornare quis.
						</p>
						<p>
							<span class="fa-stack fa-4x float-start me-10px text-dark">
								<i class="fab fa-facebook fa-stack-1x"></i>
							</span>
							Praesent eu ultrices justo. Vestibulum ante 
							ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
							Cras mattis ipsum quis sapien consectetur fringilla. 
							Etiam sagittis sem tempus purus elementum, vitae pretium sapien porta. Curabitur iaculis ante ut aliquam luctus. 
							Vivamus ullamcorper blandit imperdiet. Ut egestas, orci id rhoncus cursus, orci risus scelerisque enim, eget mattis eros lacus quis ligula. 
							Vivamus ullamcorper urna eget hendrerit laoreet.
						</p>
						<p>
							<span class="fa-stack fa-4x float-end ms-10px text-dark">
								<i class="fab fa-apple fa-stack-1x"></i>
							</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
							Morbi accumsan velit dolor. Donec convallis eleifend magna, at euismod tellus convallis a. 
							Curabitur in nisi dolor. Cras viverra scelerisque orci, sed interdum ligula volutpat non. 
							Nunc eu enim ac neque tempor feugiat. Duis posuere lacus non magna eleifend, 
							non dictum sem feugiat. Duis eleifend condimentum pulvinar.
						</p>
					</perfect-scrollbar>
				</panel-body>
				<highlightjs :code="code8" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel with Toolbar & Footer</panel-title>
				</panel-header>
				<div class="panel-toolbar">
					<div class="btn-group me-5px">
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-bold"></i></a>
						<a class="btn btn-white active" href="javascript:;"><i class="fa fa-italic"></i></a>
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-underline"></i></a>
					</div>
					<div class="btn-group">
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-left"></i></a>
						<a class="btn btn-white active" href="javascript:;"><i class="fa fa-align-center"></i></a>
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-right"></i></a>
						<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-justify"></i></a>
					</div>
				</div>
				<textarea class="form-control no-rounded-pill border-1 border-start-0 border-end-0 border-bottom-0 rounded-0 bg-light" rows="5">This is a form textarea.</textarea>
				<panel-footer class="text-end">
					<a href="javascript:;" class="btn btn-white btn-sm">Cancel</a>
					<a href="javascript:;" class="btn btn-primary btn-sm ms-5px">Action</a>
				</panel-footer>
				<highlightjs :code="code9" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel class="panel-with-tabs">
				<panel-header class="bg-light text-dark">
					<panel-title>Panel with Tabs</panel-title>
					<ul class="nav nav-tabs">
						<li class="nav-item"><a href="#home" data-bs-toggle="tab" class="nav-link active"><i class="fa fa-home"></i> <span class="d-none d-md-inline">Home</span></a></li>
						<li class="nav-item"><a href="#profile" data-bs-toggle="tab" class="nav-link"><i class="fa fa-user"></i> <span class="d-none d-md-inline">Profile</span></a></li>
					</ul>
				</panel-header>
				<panel-body>
					<div class="tab-content">
						<div class="tab-pane fade show active" id="home">
							<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
						</div>
						<div class="tab-pane fade" id="profile">
							<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
						</div>
					</div>
				</panel-body>
				<highlightjs :code="code10" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->

	<h3 class="mb-20px">Panel Theme</h3>
	<p class="mb-20px">
		You can customize the panel header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-gray-900</code>. Full list of available predefined background class can be found <a href="helper_css.html">here</a>.
	</p>
	
	<!-- BEGIN row -->
	<div class="row mb-3">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header class="bg-light text-dark">
					<panel-title>Panel (Default)</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code11" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header class="bg-teal-700">
					<panel-title>Panel Success</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code12" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header class="bg-orange-700 text-white">
					<panel-title>Panel Warning</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code13" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header class="bg-red-700 text-white">
					<panel-title>Panel Danger</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code14" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Panel Inverse</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code15" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header class="bg-blue-700 text-white">
					<panel-title>Panel Primary</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code16" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel>
				<panel-header class="bg-cyan-700 text-white">
					<panel-title>Panel Info</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code17" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
	
	<h3>Full Color Panel Theme</h3>
	<p class="mb-20px">
		You can customize the panel body / header <code>background</code> & <code>text color</code> by adding predefined CSS class. E.g <code>.bg-gray-900</code>. Full list of available predefined background class can be found <a href="helper_css.html">here</a>.
	</p>
	
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Full Color Panel</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body class="bg-gray-800 text-white">
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code18" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel class="text-white">
				<panel-header class="bg-blue-700">
					<panel-title>Full Color Panel</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body class="bg-blue">
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code19" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel class="text-white">
				<panel-header class="bg-teal-700">
					<panel-title>Full Color Panel</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body class="bg-teal">
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code20" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel class="text-white">
				<panel-header class="bg-orange-700">
					<panel-title>Full Color Panel</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body class="bg-orange">
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code21" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel class="text-white">
				<panel-header class="bg-red-700">
					<panel-title>Full Color Panel</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body class="bg-red">
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code22" />
			</panel>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<panel class="text-white">
				<panel-header class="bg-cyan-700">
					<panel-title>Full Color Panel</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body class="bg-cyan">
					<p>Panel Content Here</p>
				</panel-body>
				<highlightjs :code="code23" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->

</template>