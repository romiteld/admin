<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';

export default {
	data () {
		return {
			code1: '',
			code2: '',
			code3: '',
			code4: '',
			code5: '',
			code6: '',
			code7: '',
			code8: '',
			code9: '',
			code10: '',
			code11: '',
			code12: '',
			code13: '',
			code14: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	mounted() {
		axios.get('/assets/data/ui/typography-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-9.json').then((response) => {
			this.code9 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-10.json').then((response) => {
			this.code10 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-11.json').then((response) => {
			this.code11 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-12.json').then((response) => {
			this.code12 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-13.json').then((response) => {
			this.code13 = response.data;
		});
		axios.get('/assets/data/ui/typography-code-14.json').then((response) => {
			this.code14 = response.data;
		});
	}
}
</script>
<template>
	<div>
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
				<panel data-sortable-id="ui-typography-1">
					<panel-header>Headings</panel-header>
					<panel-body>
						<h1>h1. Heading 1</h1>
						<h2>h2. Heading 2</h2>
						<h3>h3. Heading 3</h3>
						<h4>h4. Heading 4</h4>
						<h5>h5. Heading 5</h5>
						<h6>h6. Heading 6</h6>
					</panel-body>
					<highlightjs :code="code1" />
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>small, semiBold, Bold, Italic</panel-header>
					<panel-body class="text-dark">
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
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Alignment Classes</panel-header>
					<panel-body class="text-dark">
						<p class="text-star">Left aligned text.</p>
						<p class="text-center">Center aligned text.</p>
						<p class="text-end">Right aligned text.</p>
					</panel-body>
					<highlightjs :code="code3" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Emphasis classes</panel-header>
					<panel-body>
						<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
						<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
						<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
						<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
						<p class="text-success mb-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Unordered List</panel-header>
					<panel-body>
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
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Ordered List</panel-header>
					<panel-body>
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
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Unstyled & Inline List Classes</panel-header>
					<panel-body>
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
					</panel-body>
					<highlightjs :code="code7" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Body Copy</panel-header>
					<panel-body>
						<p>
							Quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, 
							nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
						</p>
						<p>
							Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus
							auctor fringilla. 
						</p>
					</panel-body>
					<highlightjs :code="code8" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Lead body copy</panel-header>
					<panel-body>
						<p class="lead">
							Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
						</p>
					</panel-body>
					<highlightjs :code="code9" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Abbreviation</panel-header>
					<panel-body>
						<p>An abbreviation of the word attribute is  <abbr title="attribute">attr</abbr></p>
						<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
					</panel-body>
					<highlightjs :code="code10" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Addresses</panel-header>
					<panel-body>
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
					</panel-body>
					<highlightjs :code="code11" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Blockquote</panel-header>
					<panel-body>
						<blockquote class="blockquote">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer class="blockquote-footer">Someone famous <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
						<blockquote class="blockquote text-end">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer class="blockquote-footer">Someone famous <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</panel-body>
					<highlightjs :code="code12" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Description List</panel-header>
					<panel-body>
						<dl>
							<dt class="text-dark">Description lists</dt>
							<dd>A description list is perfect for defining terms.</dd>
							<dt class="text-dark mt-10px">Euismod</dt>
							<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
							<dd>Donec id elit non mi porta gravida at eget metus.</dd>
							<dt class="text-dark mt-10px">Malesuada porta</dt>
							<dd>Etiam porta sem malesuada magna mollis euismod.</dd>
						</dl>
					</panel-body>
					<highlightjs :code="code13" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>Horizontal Description List</panel-header>
					<panel-body>
						<dl class="row">
							<dt class="col-md-3">Description lists</dt>
							<dd class="col-md-9">A description list is perfect for defining terms.</dd>
							<dt class="col-md-3">Euismod</dt>
							<dd class="col-md-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
							<dt class="col-md-3">Malesuada porta</dt>
							<dd class="col-md-9">Etiam porta sem malesuada magna mollis euismod.</dd>
						</dl>
					</panel-body>
					<highlightjs :code="code14" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	</div>
</template>