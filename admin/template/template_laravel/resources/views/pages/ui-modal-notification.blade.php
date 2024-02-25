@extends('layouts.default')

@section('title', 'Modal & Notification')

@push('css')
	<link href="/assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
@endpush

@push('scripts')
	<script src="/assets/plugins/gritter/js/jquery.gritter.js"></script>
	<script src="/assets/plugins/sweetalert/dist/sweetalert.min.js"></script>
	<script src="/assets/js/demo/ui-modal-notification.demo.js"></script>
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
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
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-modal-notification-1">
				<div class="panel-heading">
					<h4 class="panel-title">Gritter Notifications</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<table class="table table-panel mb-0">
					<thead>
						<tr>
							<th colspan="2">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-middle">Add default notification.</td>
							<td width="1%"><a href="javascript:;" id="add-regular" class="btn btn-sm btn-dark w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Add sticky notification</td>
							<td><a href="javascript:;" id="add-sticky" class="btn btn-sm btn-primary w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Add notification without image</td>
							<td><a href="javascript:;" id="add-without-image" class="btn btn-sm btn-info w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Add a white notification</td>
							<td><a href="javascript:;" id="add-gritter-light" class="btn btn-sm btn-success w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Add notification (with callbacks)</td>
							<td><a href="javascript:;" id="add-with-callbacks" class="btn btn-sm btn-warning w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Add a sticky notification (with callbacks)</td>
							<td><a href="javascript:;" id="add-sticky-with-callbacks" class="btn btn-sm btn-danger w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Add notification with max of 3</td>
							<td><a href="javascript:;" id="add-max" class="btn btn-sm btn-default w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Remove all notifications</td>
							<td><a href="javascript:;" id="remove-all" class="btn btn-sm btn-white w-100px">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Remove all notifications (with callbacks)</td>
							<td><a href="javascript:;" id="remove-all-with-callbacks" class="btn btn-sm btn-white w-100px">Demo</a></td>
						</tr>
					</tbody>
				</table>
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-modal-notification/code-1.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-modal-notification-2">
				<div class="panel-heading">
					<h4 class="panel-title">Modal</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<table class="table table-panel mb-0">
					<thead>
						<tr>
							<th colspan="2">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-middle">Default Modal Dialog Box.</td>
							<td width="1%"><a href="#modal-dialog" class="btn btn-sm btn-success w-100px" data-bs-toggle="modal">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Modal Dialog Box with fade out animation.</td>
							<td><a href="#modal-without-animation" class="btn btn-sm btn-default w-100px" data-bs-toggle="modal">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Modal Dialog Box with full width white background.</td>
							<td><a href="#modal-message" class="btn btn-sm btn-primary w-100px" data-bs-toggle="modal">Demo</a></td>
						</tr>
						<tr>
							<td class="align-middle">Modal Dialog Box with alert message.</td>
							<td><a href="#modal-alert" class="btn btn-sm btn-danger w-100px" data-bs-toggle="modal">Demo</a></td>
						</tr>
					</tbody>
				</table>
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-modal-notification/code-2.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-modal-notification-3">
				<div class="panel-heading">
					<h4 class="panel-title">Bootstrap SweetAlert <span class="badge bg-success ms-1">NEW</span></h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p class="lead mb-10px  text-dark">
						SweetAlert for Bootstrap. A beautiful replacement for JavaScript's "alert"
					</p>
					<hr />
					<p class="">
						Try any of those!
					</p>
					<div class="d-flex">
						<a href="javascript:;" data-click="swal-primary" class="btn btn-primary me-1">Primary</a>
						<a href="javascript:;" data-click="swal-info" class="btn btn-info me-1">Info</a>
						<a href="javascript:;" data-click="swal-success" class="btn btn-success me-1">Success</a>
						<a href="javascript:;" data-click="swal-warning" class="btn btn-warning me-1">Warning</a>
						<a href="javascript:;" data-click="swal-danger" class="btn btn-danger">Danger</a>
					</div>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-modal-notification/code-3.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
@endsection

@section('outside-content')
	<!-- #modal-dialog -->
	<div class="modal fade" id="modal-dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Modal Dialog</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
				</div>
				<div class="modal-body">
					<p>
						Modal body content here...
					</p>
				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn btn-white" data-bs-dismiss="modal">Close</a>
					<a href="javascript:;" class="btn btn-success">Action</a>
				</div>
			</div>
		</div>
	</div>

	<!-- #modal-without-animation -->
	<div class="modal" id="modal-without-animation">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Modal Without Animation</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
				</div>
				<div class="modal-body">
					Modal body content here...
				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn btn-white" data-bs-dismiss="modal">Close</a>
				</div>
			</div>
		</div>
	</div>

	<!-- #modal-message -->
	<div class="modal modal-message fade" id="modal-message">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Modal Message Header</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
				</div>
				<div class="modal-body">
					<p>Text in a modal</p>
					<p>Do you want to turn on location services so GPS can use your location ?</p>
				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn btn-white" data-bs-dismiss="modal">Close</a>
					<a href="javascript:;" class="btn btn-primary">Save Changes</a>
				</div>
			</div>
		</div>
	</div>

	<!-- #modal-alert -->
	<div class="modal fade" id="modal-alert">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Alert Header</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
				</div>
				<div class="modal-body">
					<div class="alert alert-danger">
						<h5><i class="fa fa-info-circle"></i> Alert Header</h5>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
					</div>
				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn btn-white" data-bs-dismiss="modal">Close</a>
					<a href="javascript:;" class="btn btn-danger" data-bs-dismiss="modal">Action</a>
				</div>
			</div>
		</div>
	</div>
@endsection