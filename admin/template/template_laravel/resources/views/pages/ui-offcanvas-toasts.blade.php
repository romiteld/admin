@extends('layouts.default')

@section('title', 'Offcanvas & Toasts')

@push('scripts')
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Offcanvas & Toasts</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Offcanvas & Toasts <small>header small text goes here...</small></h1>
	<!-- END page-header -->
			
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="offcanvas-1">
				<div class="panel-heading">
					<h4 class="panel-title">Offcanvas</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						Below is an offcanvas example that is shown by default (via <code>.show</code> on <code>.offcanvas</code>). 
						Offcanvas includes support for a header with a close button and an optional body class for some initial <code>padding</code>.
					</p>
					<div class="row">
						<div class="col-lg-6">
							<div class="form-label">Default</div>
							<div>
								<button type="button" class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasStartExample">
									<i class="far fa-hand-point-up fa-fw mx-1 opacity-5"></i> Offcanvas Demo
								</button>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="form-label">Placement</div>
							<div class="btn-group">
								<a class="btn btn-default" data-bs-toggle="offcanvas" href="#offcanvasEndExample">
									<i class="fa fa-arrow-right fa-fw mx-1 opacity-5"></i> Right
								</a>
								<a class="btn btn-default" data-bs-toggle="offcanvas" href="#offcanvasBottomExample">
									<i class="fa fa-arrow-down fa-fw mx-1 opacity-5"></i> Bottom
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-body bg-gray-500">
					<div class="offcanvas offcanvas-start position-static visible" id="offcanvas" data-bs-backdrop="false" data-bs-scroll="true" style="transform: none">
						<div class="offcanvas-header">
							<h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
							<button type="button" class="btn-close text-reset"></button>
						</div>
						<div class="offcanvas-body">
							Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
						</div>
					</div>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-offcanvas-toasts/code-1.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="offcanvas-2">
				<div class="panel-heading">
					<h4 class="panel-title">Toasts</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						To encourage extensible and predictable toasts, we recommend a header and body. 
						Toast headers use <code>display: flex</code>, allowing easy alignment of content thanks to our margin and flexbox utilities.
					</p>
					<div class="form-label">Default</div>
					<div>
						<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
					</div>
				</div>
				<div class="panel-body bg-gray-500">
					<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
						<div class="toast-header">
							<div class="bg-blue rounded w-25px h-25px d-flex align-items-center justify-content-center text-white">
								<i class="fa fa-bell"></i>
							</div>
							<strong class="me-auto ms-2">Bootstrap</strong>
							<small>11 mins ago</small>
							<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
						</div>
						<div class="toast-body">
							Hello, world! This is a toast message.
						</div>
					</div>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-offcanvas-toasts/code-2.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->

	<div class="offcanvas offcanvas-start" id="offcanvasStartExample">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="offcanvas offcanvas-end" id="offcanvasEndExample">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="offcanvas offcanvas-bottom" id="offcanvasBottomExample">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="toast-container">
		<div id="liveToast" class="toast hide">
			<div class="toast-header">
				<div class="bg-blue rounded w-25px h-25px d-flex align-items-center justify-content-center text-white">
					<i class="fa fa-bell"></i>
				</div>
				<strong class="me-auto ms-2">Notification</strong>
				<small>11 mins ago</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body">
				Hello, world! This is a toast message.
			</div>
		</div>
	</div>
@endsection

@section('outside-content')
	<div class="offcanvas offcanvas-start" id="offcanvasStartExample">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="offcanvas offcanvas-end" id="offcanvasEndExample">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="offcanvas offcanvas-bottom" id="offcanvasBottomExample">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="toast-container">
		<div id="liveToast" class="toast hide">
			<div class="toast-header">
				<div class="bg-blue rounded w-25px h-25px d-flex align-items-center justify-content-center text-white">
					<i class="fa fa-bell"></i>
				</div>
				<strong class="me-auto ms-2">Notification</strong>
				<small>11 mins ago</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body">
				Hello, world! This is a toast message.
			</div>
		</div>
	</div>
@endsection