@extends('layouts.default', ['appContentClass' => 'p-0 position-relative', 'appContentFullHeight' => true])

@section('title', 'Google Map')

@push('scripts')
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
	<script src="/assets/js/demo/map-google.demo.js"></script>
@endpush

@section('content')
	<div class="position-absolute w-100 h-100 top-0 start-0 bottom-0 end-0">
		<div id="google-map-default" class="w-100 h-100"></div>
	</div>
	
	<div class="app-content-padding position-relative" data-bs-theme="dark">
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;" class="text-white">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;" class="text-white">Map</a></li>
			<li class="breadcrumb-item active text-gray-500">Google Map</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header text-white">Google Map <small class="text-white-transparent-5">header small text goes here...</small></h1>
		<!-- END page-header -->
		<div class="d-flex">
			<div class="btn-group map-btn ms-auto">
				<button type="button" class="btn btn-dark" id="map-theme-text">Default Theme</button>
				<button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"><b class="caret"></b></button>
				<div class="dropdown-menu dropdown-menu-end" id="map-theme-selection">
					<a href="javascript:;" data-map-theme="default" class="dropdown-item">Default</a>
					<a href="javascript:;" data-map-theme="flat" class="dropdown-item">Flat</a>
					<a href="javascript:;" data-map-theme="turquoise-water" class="dropdown-item">Turquoise Water</a>
					<a href="javascript:;" data-map-theme="icy-blue" class="dropdown-item">Icy Blue</a>
					<a href="javascript:;" data-map-theme="cobalt" class="dropdown-item">Cobalt</a>
					<a href="javascript:;" data-map-theme="old-dry-mud" class="dropdown-item">Old Dry Mud</a>
					<a href="javascript:;" data-map-theme="dark-red" class="dropdown-item">Dark Red</a>
				</div>
			</div>
		</div>
	</div>

@endsection