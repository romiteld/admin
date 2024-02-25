@extends('layouts.default')

@section('title', 'Widget Boxes')

@push('scripts')
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
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
			<div class="panel panel-inverse" data-sortable-id="ui-widget-1">
				<div class="panel-heading">
					<h4 class="panel-title">Panel (Default)</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-1.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-2">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Dropdown</h4>
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
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-2.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-3">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Radio Button</h4>
					<div class="btn-group btn-group-toggle my-n1" data-toggle="buttons">
						<input type="radio" name="options" class="btn-check" id="option1" autocomplete="off" checked />
						<label class="btn btn-success btn-xs" for="option1"> Option 1</label>
					
						<input type="radio" name="options" class="btn-check" id="option2" autocomplete="off" />
						<label class="btn btn-success btn-xs" for="option2"> Option 2</label>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-3.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-4">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Progress Bar</h4>
					<div class="progress h-10px bg-gray-700 w-150px">
						<div class="progress-bar progress-bar-striped bg-success progress-bar-animated fw-bold" style="width: 40%">40%</div>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-4.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-5">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Header with Badge <span class="badge bg-success ms-1">NEW</span> </h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-5.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-6">
				<div class="panel-heading">
					<h4 class="panel-title">
						Panel with Alert Box
					</h4>
				</div>
				<div class="alert alert-success alert-dismissible fade show rounded-0 mb-0">
					<div class="d-flex">
						<i class="fa fa-check fa-2x me-1"></i>
						<div class="mb-0 ps-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere lacus, quis suscipit sem. Nulla sagittis aliquam erat non convallis.
						</div>
					</div>
					<button type="button" class="btn-close ms-3" data-bs-dismiss="alert"></button>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-6.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse panel-hover-icon" data-sortable-id="ui-widget-7">
				<div class="panel-heading">
					<h4 class="panel-title">Hover View Icon</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-7.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-8">
				<div class="panel-heading">
					<h4 class="panel-title">Panel with Scrollbar</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<div data-scrollbar="true" data-height="280px">
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
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-8.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-9">
				<div class="panel-heading">
					<h4 class="panel-title">Panel with Toolbar & Footer</h4>
				</div>
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
				<div class="panel-footer text-end">
					<a href="javascript:;" class="btn btn-white btn-sm">Cancel</a>
					<a href="javascript:;" class="btn btn-primary btn-sm ms-5px">Action</a>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-9.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-default panel-with-tabs" data-sortable-id="ui-widget-10">
				<div class="panel-heading">
					<h4 class="panel-title">Panel with Tabs</h4>
					<ul class="nav nav-tabs">
						<li class="nav-item"><a href="#home" data-bs-toggle="tab" class="nav-link active"><i class="fa fa-home"></i> <span class="d-none d-md-inline">Home</span></a></li>
						<li class="nav-item"><a href="#profile" data-bs-toggle="tab" class="nav-link"><i class="fa fa-user"></i> <span class="d-none d-md-inline">Profile</span></a></li>
					</ul>
				</div>
				<div class="panel-body">
					<div class="tab-content">
						<div class="tab-pane fade show active" id="home">
							<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
						</div>
						<div class="tab-pane fade" id="profile">
							<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
						</div>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-10.json"></code></pre>
				</div>
			</div>
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
			<div class="panel panel-default" data-sortable-id="ui-widget-11">
				<div class="panel-heading">
					<h4 class="panel-title">Panel (Default)</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-11.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel" data-sortable-id="ui-widget-12">
				<div class="panel-heading bg-teal-700">
					<h4 class="panel-title">Panel Success</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-12.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel" data-sortable-id="ui-widget-13">
				<div class="panel-heading bg-orange-700 text-white">
					<h4 class="panel-title">Panel Warning</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-13.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel" data-sortable-id="ui-widget-14">
				<div class="panel-heading bg-red-700 text-white">
					<h4 class="panel-title">Panel Danger</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-14.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-widget-15">
				<div class="panel-heading">
					<h4 class="panel-title">Panel Inverse</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-15.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel" data-sortable-id="ui-widget-16">
				<div class="panel-heading bg-blue-700 text-white">
					<h4 class="panel-title">Panel Primary</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-16.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel" data-sortable-id="ui-widget-17">
				<div class="panel-heading bg-cyan-700 text-white">
					<h4 class="panel-title">Panel Info</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-17.json"></code></pre>
				</div>
			</div>
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
			<div class="panel panel-inverse" data-sortable-id="ui-widget-18">
				<div class="panel-heading">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-gray-800 text-white">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-18.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel text-white" data-sortable-id="ui-widget-19">
				<div class="panel-heading bg-blue-700">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-blue">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-19.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel text-white" data-sortable-id="ui-widget-20">
				<div class="panel-heading bg-teal-700">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-teal">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-20.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel text-white" data-sortable-id="ui-widget-21">
				<div class="panel-heading bg-orange-700">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-orange">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-21.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel text-white" data-sortable-id="ui-widget-22">
				<div class="panel-heading bg-red-700">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-red">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-22.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel text-white" data-sortable-id="ui-widget-23">
				<div class="panel-heading bg-cyan-700">
					<h4 class="panel-title">Full Color Panel</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body bg-cyan">
					<p>Panel Content Here</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-widget-boxes/code-23.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
@endsection