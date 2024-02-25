@extends('layouts.default')

@section('title', 'Typography')

@push('scripts')
	<script src="/assets/plugins/@highlightjs/cdn-assets/highlight.min.js"></script>
	<script src="/assets/js/demo/render.highlight.js"></script>
@endpush

@section('content')
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">UI Elements</a></li>
		<li class="breadcrumb-item active">Typography</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Typography <small>header small text goes here...</small></h1>
	<!-- END page-header -->

	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-1">
				<div class="panel-heading">
					<h4 class="panel-title">Headings</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<h1>h1. Heading 1</h1>
					<h2>h2. Heading 2</h2>
					<h3>h3. Heading 3</h3>
					<h4>h4. Heading 4</h4>
					<h5>h5. Heading 5</h5>
					<h6>h6. Heading 6</h6>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-1.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-2">
				<div class="panel-heading">
					<h4 class="panel-title">small, semiBold, Bold, Italic</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body text-body">
					<div class="row fs-14px">
						<div class="col-md-6">
							<div class="fs-12px"><small>This line of text is meant to be treated as fine print.</small></div>
							<div><em>rendered as italicized text</em></div>
						</div>
						<div class="col-md-6">
							<div><span class="semi-bold">rendered as semi bold text</span></div>
							<div><strong>rendered as bold text</strong></div>
						</div>
					</div>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-2.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-3">
				<div class="panel-heading">
					<h4 class="panel-title">Alignment Classes</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body text-body">
					<p class="text-star">Left aligned text.</p>
					<p class="text-center">Center aligned text.</p>
					<p class="text-end">Right aligned text.</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-3.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-4">
				<div class="panel-heading">
					<h4 class="panel-title">Emphasis classes</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
					<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
					<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
					<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
					<p class="text-success mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-4.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-5">
				<div class="panel-heading">
					<h4 class="panel-title">Unordered List</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body text-body">
					<ul>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Nulla volutpat aliquam velit
							<ul>
							<li>Phasellus iaculis neque</li>
							<li>Purus sodales ultricies</li>
							</ul>
						</li>
						<li>Faucibus porta lacus fringilla vel</li>
					</ul>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-5.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-6">
				<div class="panel-heading">
					<h4 class="panel-title">Ordered List</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body text-body">
					<ol>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Integer molestie lorem at massa</li>
						<li>Facilisis in pretium nisl aliquet</li>
						<li>Nulla volutpat aliquam velit</li>
						<li>Faucibus porta lacus fringilla vel</li>
						<li>Aenean sit amet erat nunc</li>
						<li>Eget porttitor lorem</li>
					</ol>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-6.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-7">
				<div class="panel-heading">
					<h4 class="panel-title">Unstyled & Inline List Classes</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body text-body">
					<ul class="list-unstyled">
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Integer molestie lorem at massa</li>
						<li>Facilisis in pretium nisl aliquet</li>
						<li>Nulla volutpat aliquam velit</li>
					</ul>
					<hr class="my-3" />
					<ul class="list-inline">
						<li class="list-inline-item">Lorem ipsum dolor sit amet</li>
						<li class="list-inline-item">Consectetur adipiscing elit</li>
						<li class="list-inline-item">Integer molestie lorem at massa</li>
					</ul>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-7.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-8">
				<div class="panel-heading">
					<h4 class="panel-title">Body Copy</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>
						Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, 
						nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
					</p>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus
						auctor fringilla. 
					</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-8.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-9">
				<div class="panel-heading">
					<h4 class="panel-title">Lead body copy</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p class="lead">
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
					</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-9.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-10">
				<div class="panel-heading">
					<h4 class="panel-title">Abbreviation</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<p>An abbreviation of the word attribute is  <abbr title="attribute">attr</abbr></p>
					<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-10.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-11">
				<div class="panel-heading">
					<h4 class="panel-title">Addresses</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<address>
						<strong>Twitter, Inc.</strong><br />
						795 Folsom Ave, Suite 600<br />
						San Francisco, CA 94107<br />
						<abbr title="Phone">P:</abbr> (123) 456-7890
					</address>
					<address>
						<strong>Full Name</strong><br />
						<a href="mailto:#">first.last@example.com</a>
					</address>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-11.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-12">
				<div class="panel-heading">
					<h4 class="panel-title">Blockquote</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<blockquote class="blockquote">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer class="blockquote-footer">Someone famous <cite title="Source Title">Source Title</cite></footer>
					</blockquote>
					<blockquote class="blockquote text-end">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer class="blockquote-footer">Someone famous <cite title="Source Title">Source Title</cite></footer>
					</blockquote>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-12.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-13">
				<div class="panel-heading">
					<h4 class="panel-title">Description List</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<dl>
						<dt class="text-body">Description lists</dt>
						<dd>A description list is perfect for defining terms.</dd>
						<dt class="text-body mt-10px">Euismod</dt>
						<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
						<dd>Donec id elit non mi porta gravida at eget metus.</dd>
						<dt class="text-body mt-10px">Malesuada porta</dt>
						<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
					</dl>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-13.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
			<!-- BEGIN panel -->
			<div class="panel panel-inverse" data-sortable-id="ui-typography-14">
				<div class="panel-heading">
					<h4 class="panel-title">Horizontal Description List</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<div class="panel-body">
					<dl class="row">
						<dt class="col-md-3">Description lists</dt>
						<dd class="col-md-9">A description list is perfect for defining terms.</dd>
						<dt class="col-md-3">Euismod</dt>
						<dd class="col-md-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
						<dt class="col-md-3">Malesuada porta</dt>
						<dd class="col-md-9">Etiam porta sem malesuada magna mollis euismod.</dd>
					</dl>
				</div>
				<div class="hljs-wrapper">
					<pre><code class="html" data-url="/assets/data/ui-typography/code-14.json"></code></pre>
				</div>
			</div>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
@endsection