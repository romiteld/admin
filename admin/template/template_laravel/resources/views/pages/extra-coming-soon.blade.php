@extends('layouts.default', [
	'paceTop' => true,
	'appSidebarHide' => true,
	'appHeaderHide' => true,
	'appContentClass' => 'p-0'
])

@section('title', 'Coming Soon Page')

@push('css')
  <link href="/assets/plugins/countdown/jquery.countdown.css" rel="stylesheet" />
@endpush

@push('scripts')
  <script src="/assets/plugins/countdown/jquery.plugin.min.js"></script>
	<script src="/assets/plugins/countdown/jquery.countdown.min.js"></script>
	<script src="/assets/js/demo/coming-soon.demo.js"></script>
@endpush

@section('content')
	<!-- BEGIN coming-soon -->
	<div class="coming-soon">
		<!-- BEGIN coming-soon-header -->
		<div class="coming-soon-header">
			<div class="bg-cover"></div>
			<div class="brand">
				<span class="logo"></span> <b>Color</b> Admin
			</div>
			<div class="desc">
				Our website is almost there and it’s rebuilt from scratch! A lot of great new features <br />and improvements are coming.
			</div>
			<div class="timer">
				<div id="timer"></div>
			</div>
		</div>
		<!-- END coming-soon-header -->
		<!-- BEGIN coming-soon-content -->
		<div class="coming-soon-content">
			<div class="desc">
				We are launching a closed <b>beta</b> soon!<br /> Sign up to try it before others and be the first to know when we <b>launch</b>.
			</div>
			<div class="input-group input-group-lg mx-auto mb-2">
				<span class="input-group-text border-0 bg-light"><i class="fa fa-envelope"></i></span>
				<input type="text" class="form-control fs-13px border-0 shadow-none ps-0 bg-light" placeholder="Email Address" />
				<button type="button" class="btn fs-13px btn-dark">Notify Me</button>
			</div>
			<p class="text-gray-500 mb-5">We don't spam. Your email address is secure with us.</p>
			<p>
				<span class="me-2">Follow us on</span>
				<a href="javascript:;" class="mx-1 text-decoration-none text-dark">
					<i class="fab fa-twitter fa-lg fa-fw text-info"></i> Twitter
				</a> 
				<a href="javascript:;" class="mx-1 text-decoration-none text-dark">
					<i class="fab fa-facebook-square fa-lg fa-fw text-blue"></i> Facebook
				</a>
			</p>
		</div>
		<!-- END coming-soon-content -->
	</div>
	<!-- END coming-soon -->
@endsection