@extends('layouts.default')

@section('title', 'Gallery V2')

@push('css')
	<link href="/assets/plugins/photoswipe/dist/photoswipe.css" rel="stylesheet" />
@endpush
@push('scripts')
	<script type="module" src="/assets/js/demo/gallery-v2.demo.js"></script>
@endpush

@section('content')
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Gallery</a></li>
		<li class="breadcrumb-item active">Gallery v2</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Gallery v2 <small>header small text goes here...</small></h1>
	<!-- END page-header -->
	
	<!-- BEGIN gallery-v2 -->
	<div class="gallery-v2" id="gallery">
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-1.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-1-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-2.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-2-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-3.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-3-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-4.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-4-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-5.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-5-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-6.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-6-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-7.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-7-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-8.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-8-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-9.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-9-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-10.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-10-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-11.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-11-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-12.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-12-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-13.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-13-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-14.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-14-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-15.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-15-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-16.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-16-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-17.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-17-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-18.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-18-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-19.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-19-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-20.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-20-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-21.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-21-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-22.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-22-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-23.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-23-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-24.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-24-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-25.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-25-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-26.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-26-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-27.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-27-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-28.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-28-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-29.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-29-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-30.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-30-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-31.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-31-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-32.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-32-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-33.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-33-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-34.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-34-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-35.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-35-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-36.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-36-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-37.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-37-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-38.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-38-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-39.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-39-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-40.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-40-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-41.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-41-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-42.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-42-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-43.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-43-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-44.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-44-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-45.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-45-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-46.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-46-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-47.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-47-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-48.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-48-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-49.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-49-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-50.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-50-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-51.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-51-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-52.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-52-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-53.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-53-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-54.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-54-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-55.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-55-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-56.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-56-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-57.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-57-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-58.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-58-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-59.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-59-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-60.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-60-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-61.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-61-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-62.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-62-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-63.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-63-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-64.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-64-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-65.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-65-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-66.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-66-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-67.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-67-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-68.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-68-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-69.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-69-thumb.jpg);"></div>
			</a>
		</div>
		<div class="gallery">
			<a href="javascript:;" class="ratio ratio-4x3" data-pswp-src="/assets/img/gallery/gallery-70.jpg" data-pswp-width="1200" data-pswp-height="800">
				<div class="bg-size-cover bg-position-center" style="background-image: url(/assets/img/gallery/gallery-70-thumb.jpg);"></div>
			</a>
		</div>
	</div>
	<!-- END gallery-v2 -->
@endsection