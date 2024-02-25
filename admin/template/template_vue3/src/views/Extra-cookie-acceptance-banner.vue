<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
		<li class="breadcrumb-item active">Cookie Acceptance Banner</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Cookie Acceptance Banner <small>header small text goes here...</small></h1>
	<!-- END page-header -->
	<!-- BEGIN panel -->
	<panel>
		<panel-header>
			<panel-title>Panel Title here</panel-title>
			<panel-toolbar />
		</panel-header>
		<panel-body>
			Panel Content Here
		</panel-body>
	</panel>
	<!-- END panel -->
	
	<div class="alert alert-dismissible fade show bg-dark bg-opacity-90 text-white position-fixed rounded-0 m-0 d-md-flex align-items-center px-xl-5 py-xl-4 pt-4 start-0 end-0 bottom-0" style="z-index: 1020;">
		<div class="flex-fill">
			<h3>This website uses cookies</h3>
			<p class="mb-0">
				We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
			</p>
		</div>
		<div class="ps-xl-4 pt-xl-0 pt-3">
			<a href="#" class="btn btn-outline-white btn-lg w-150px" data-bs-dismiss="alert">Accept</a>
		</div>
	</div>
</template>