@extends('layouts.default')

@section('title', 'Form WYSIWYG')

@push('css')
	<link href="/assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css" rel="stylesheet" />
@endpush

@push('scripts')
	<script src="/assets/plugins/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
	<script src="/assets/plugins/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
	<script src="/assets/js/demo/form-wysiwyg.demo.js"></script>
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Form WYSIWYG</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Form WYSIWYG <small>header small text goes here...</small></h1>
	<!-- END page-header -->

	<!-- BEGIN panel -->
	<div class="panel panel-inverse">
		<div class="panel-heading">
			<h4 class="panel-title">
				CKEditor 
				<b class="badge d-inline-flex align-items-center p-0 ms-1">
					<i class="fa fa-circle fa-fw fs-6px text-teal me-1"></i> 
					<i class="fa fa-circle fa-fw fs-6px text-warning me-1"></i>
					<i class="fa fa-circle fa-fw fs-6px text-danger"></i>
				</b>
			</h4>
			<div class="panel-heading-btn">
				<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
			</div>
		</div>
		<div class="panel-body p-0">
			<form class="" action="/" name="wysihtml5" method="POST">
				<textarea class="ckeditor" id="editor1" name="editor1" rows="10">&lt;p&gt;This is some &lt;strong&gt;sample text&lt;/strong&gt;. You are using &lt;a href="http://ckeditor.com/"&gt;CKEditor&lt;/a&gt;.&lt;/p&gt;</textarea>
			</form>
		</div>
		<!-- BEGIN hljs-wrapper -->
		<div class="hljs-wrapper">
			<pre><code class="html" data-url="/assets/data/form-wysiwyg/code-1.json"></code></pre>
		</div>
		<!-- END hljs-wrapper -->
	</div>
	<!-- END panel -->
	<!-- BEGIN panel -->
	<div class="panel panel-inverse">
		<div class="panel-heading">
			<h4 class="panel-title">
				Bootstrap WYSIHTML5
			
				<b class="badge d-inline-flex align-items-center p-0 ms-1">
					<i class="fa fa-circle fa-fw fs-6px text-orange me-1"></i> 
					<i class="fa fa-circle fa-fw fs-6px text-red me-1"></i>
					<i class="fa fa-circle fa-fw fs-6px text-pink"></i>
				</b>
			</h4>
			<div class="panel-heading-btn">
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
				<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
			</div>
		</div>
		<div class="panel-body p-0">
			<form action="/" name="wysihtml5" method="POST">
				<textarea class="textarea form-control" id="wysihtml5" placeholder="Enter text ..." rows="12"></textarea>
			</form>
		</div>
		<!-- BEGIN hljs-wrapper -->
		<div class="hljs-wrapper">
			<pre><code class="html" data-url="/assets/data/form-wysiwyg/code-2.json"></code></pre>
		</div>
		<!-- END hljs-wrapper -->
	</div>
	<!-- END panel -->
@endsection
