@extends('layouts.default')

@section('title', 'Summernote')

@push('css')
	<link href="/assets/plugins/summernote/dist/summernote-lite.css" rel="stylesheet" />
@endpush

@push('scripts')
	<script src="/assets/plugins/summernote/dist/summernote-lite.min.js"></script>
	<script src="/assets/js/demo/form-summernote.demo.js"></script>
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Summernote</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Summernote <small>header small text goes here...</small></h1>
	<!-- END page-header -->
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-2 -->
		<div class="col-xl-2">
			<div><b class="text-dark">Features</b></div>
			<p>
				- Support bootstrap 5.x.x<br />
				- Lightweight (js+css: 80Kb)<br />
				- Smart User Interaction<br />
				- Safari, Chrome, Firefox, Opera<br />
				- Internet Explorer 9+
			</p>
			<p>
				<a href="http://summernote.org/" target="_blank" class="btn btn-sm btn-dark">View Official Website</a>
			</p>
		</div>
		<!-- END col-2 -->
		<!-- BEGIN col-10 -->
		<div class="col-xl-10">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse">
				<div class="panel-heading">
					<h4 class="panel-title">Summernote</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body panel-body p-0">
					<form action="" method="POST" name="summernote_form">
						<textarea class="summernote" name="content"></textarea>
					</form>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/form-summernote/code-1.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-10 -->
	</div>
	<!-- END row -->

@endsection
