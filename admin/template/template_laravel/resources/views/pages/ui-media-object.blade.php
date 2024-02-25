@extends('layouts.default')

@section('title', 'Media Object')

@push('scripts')
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Media Object</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Media Object <small>header small text goes here...</small></h1>
	<!-- END page-header -->

	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-1">
				<!-- BEGIN panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Default Media Object</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- END panel-heading -->
				<!-- BEGIN panel-body -->
				<div class="panel-body">
					<div class="d-flex">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-1.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="ps-3 flex-1">
							<h5 class="mb-1">Media heading</h5>
							<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-2.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="ps-3 flex-1">
							<h5 class="mb-1">Media heading</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						
							<hr class="bg-gray-500" />
						
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-3.jpg" alt="" class="mw-100 rounded" />
								</a>
								<div class="ps-3 flex-1">
									<h5 class="mb-1">Nested media heading</h5>
									<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
								</div>
							</div>
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-4.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="ps-3 flex-1">
							<h5 class="mb-1">Media heading</h5>
							<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-10.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="ps-3 flex-1">
							<h5 class="mb-1">Media heading</h5>
							<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>
						</div>
					</div>
				</div>
				<!-- END panel-body -->
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-media-object/code-1.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-2">
				<!-- BEGIN panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Media List</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- END panel-heading -->
				<!-- BEGIN panel-body -->
				<div class="panel-body">
					<div class="d-flex">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-5.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Media heading</h5>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
						
							<hr class="bg-gray-500" />
						
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-6.jpg" alt="" class="mw-100 rounded-pill" />
								</a>
								<div class="flex-1 ps-3">
									<h5 class="mb-1">Nested media heading</h5>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
								
									<hr class="bg-gray-500" />
								
									<div class="d-flex">
										<a class="w-60px" href="javascript:;">
											<img src="/assets/img/user/user-7.jpg" alt="" class="mw-100 rounded-pill" />
										</a>
									
										<div class="flex-1 ps-3">
											<h5 class="mb-1">Nested media heading</h5>
											<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
										</div>
									</div>
								</div>
							</div>
						
							<hr class="bg-gray-500" />
						
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-8.jpg" alt="" class="mw-100 rounded-pill" />
								</a>
								<div class="flex-1 ps-3">
									<h5 class="mb-1">Nested media heading</h5>
									<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
								</div>
							</div>
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex">
						<div class="flex-1 pe-3">
							<h5 class="mb-1">Media heading</h5>
							<p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
						</div>
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-9.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
					</div>
				</div>
				<!-- END panel-body -->
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-media-object/code-2.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-3">
				<!-- BEGIN panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Media Object Sizes</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- END panel-heading -->
				<!-- BEGIN panel-body -->
				<div class="panel-body">
					<div class="d-flex">
						<a class="w-lg-250px w-100px" href="javascript:;">
							<img src="/assets/img/gallery/gallery-1.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex">
						<a class="w-lg-200px w-80px" href="javascript:;">
							<img src="/assets/img/gallery/gallery-2.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				
					<hr class="bg-gray-500" />
						
					<div class="d-flex">
						<a class="w-lg-150px w-60px" href="javascript:;">
							<img src="/assets/img/gallery/gallery-3.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
						</div>
					</div>
				
					<hr class="bg-gray-500" />
						
					<div class="d-flex">
						<a class="w-lg-100px w-40px" href="javascript:;">
							<img src="/assets/img/gallery/gallery-4.jpg" alt="" class="mw-100 rounded" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				</div>
				<!-- END panel-body -->
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-media-object/code-3.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-media-object-4">
				<!-- BEGIN panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Media List with Button</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- END panel-heading -->
				<!-- BEGIN panel-body -->
				<div class="panel-body">
					<div class="d-flex mb-3">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-5.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Media heading</h5>
							<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
							<p class="mb-0">
								<a href="javascript:;" class="btn btn-sm btn-danger me-5px">Reject</a>
								<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
							</p>
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex mb-3">
						<div class="flex-1 pe-3 text-end">
							<h5 class="mb-1">Nested media heading</h5>
							<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
							<p class="mb-0">
								<a href="javascript:;" class="btn btn-sm btn-success me-5px">Published</a>
								<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
							</p>
						</div>
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-6.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex mb-3">
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-8.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
						<div class="flex-1 ps-3">
							<h5 class="mb-1">Nested media heading</h5>
							<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, tempus viverra turpis.</p>
							<p class="mb-0">
								<a href="javascript:;" class="btn btn-sm btn-primary me-5px">Confirm</a>
								<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
							</p>
						</div>
					</div>
				
					<hr class="bg-gray-500" />
				
					<div class="d-flex">
						<div class="flex-1 pe-3 text-end">
							<h5 class="mb-1">Nested media heading</h5>
							<p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,  tempus viverra turpis.</p>
							<p class="mb-0">
								<a href="javascript:;" class="btn btn-sm btn-warning me-5px">Edit</a>
								<a href="javascript:;" class="btn btn-sm btn-default">Cancel</a>
							</p>
						</div>
						<a class="w-60px" href="javascript:;">
							<img src="/assets/img/user/user-7.jpg" alt="" class="mw-100 rounded-pill" />
						</a>
					</div>
				</div>
				<!-- END panel-body -->
				<!-- BEGIN hljs-wrapper -->
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-media-object/code-4.json"></code></pre>
				</div>
				<!-- END hljs-wrapper -->
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
@endsection