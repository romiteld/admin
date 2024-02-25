<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import navscrollto from '@/components/app/NavScrollTo.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';
import { ScrollSpy } from 'bootstrap';

const appVariable = useAppVariableStore();

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
			code10: ''
		}
	},
	components: {
		highlightjs: highlightjs,
		navScrollTo: navscrollto
	},
	mounted() {
		axios.get('/assets/data/table/element-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/table/element-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/table/element-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/table/element-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/table/element-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/table/element-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/table/element-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/table/element-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/table/element-code-9.json').then((response) => {
			this.code9 = response.data;
		});
		axios.get('/assets/data/table/element-code-10.json').then((response) => {
			this.code10 = response.data;
		});
		
		new ScrollSpy(document.body, {
			target: '#sidebar-bootstrap',
			offset: 200
		})
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
			<li class="breadcrumb-item active">Table Elements</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Table Elements <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN #basicTable -->
				<panel>
					<panel-header>
						<panel-title>Basic Table</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Using the most basic table markup, here’s how .table-based tables look in Bootstrap. You can also invert the colors—with light text on dark backgrounds—with <code>.table-dark</code>.</p>
						<div class="row mb-n3">
							<div class="col-xl-6">
								<div class="text-muted mb-3"><b>DEFAULT TABLE</b></div>
								<table class="table">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">First</th>
											<th scope="col">Last</th>
											<th scope="col">Handle</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-xl-6">
								<div class="text-muted mb-3"><b>DARK TABLE</b></div>
								<table class="table table-dark">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">First</th>
											<th scope="col">Last</th>
											<th scope="col">Handle</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code1" />
				</panel>
				<!-- END #basicTable -->
				
				<!-- BEGIN #tableHeadOptions -->
				<panel>
					<panel-header>
						<panel-title>Table head options</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Similar to tables and dark tables, use the modifier classes <code>.thead-light</code> or <code>.thead-dark</code> to make <code>&lt;thead&gt;</code>s appear light or dark gray.</p>
						<div class="row mb-n3">
							<div class="col-xl-6">
								<div class="text-muted mb-3"><b>DARK HEADER</b></div>
								<table class="table">
									<thead class="table-dark">
										<tr>
											<th scope="col">#</th>
											<th scope="col">First</th>
											<th scope="col">Last</th>
											<th scope="col">Handle</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-xl-6">
								<div class="text-muted mb-3"><b>LIGHT HEADER</b></div>
								<table class="table">
									<thead class="table-light">
										<tr>
											<th scope="col">#</th>
											<th scope="col">First</th>
											<th scope="col">Last</th>
											<th scope="col">Handle</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END #tableHeadOptions -->
				
				<!-- BEGIN #stripedRows -->
				<panel>
					<panel-header>
						<panel-title>Striped rows</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>
						<table class="table table-striped mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code3" />
				</panel>
				<!-- END #stripedRows -->
				
				<!-- BEGIN #borderedTable -->
				<panel>
					<panel-header>
						<panel-title>Bordered table</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
						<table class="table table-bordered mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td colspan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END #borderedTable -->
				
				<!-- BEGIN #borderlessTable -->
				<panel>
					<panel-header>
						<panel-title>Borderless table</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<table class="table table-borderless mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td colspan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END #borderlessTable -->
				
				<!-- BEGIN #hoverableRows -->
				<panel>
					<panel-header>
						<panel-title>Hoverable rows</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>
						<table class="table table-hover mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td colspan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END #hoverableRows -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN #smallTable -->
				<panel>
					<panel-header>
						<panel-title>Small table</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
						<table class="table table-sm mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td >2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<td>3</td>
									<td colspan="2">Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code7" />
				</panel>
				<!-- END #smallTable -->
				
				<!-- BEGIN #contextualClasses -->
				<panel>
					<panel-header>
						<panel-title>Contextual classes</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Use contextual classes to color table rows or individual cells.</p>
						<table class="table mb-0">
							<thead>
								<tr>
									<th scope="col">Class</th>
									<th scope="col">Heading</th>
									<th scope="col">Heading</th>
								</tr>
							</thead>
							<tbody>
								<tr class="table-active">
									<th scope="row">Active</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr>
									<th scope="row">Default</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-primary">
									<th scope="row">Primary</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-secondary">
									<th scope="row">Secondary</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-success">
									<th scope="row">Success</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-danger">
									<th scope="row">Danger</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-warning">
									<th scope="row">Warning</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-info">
									<th scope="row">Info</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-light">
									<th scope="row">Light</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="table-dark">
									<th scope="row">Dark</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="bg-primary text-white">
									<th scope="row">Warning</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="bg-success text-white">
									<th scope="row">Info</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="bg-warning text-white">
									<th scope="row">Light</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="bg-danger text-white">
									<th scope="row">Dark</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr class="bg-info text-white">
									<th scope="row">Dark</th>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code8" />
				</panel>
				<!-- END #contextualClasses -->
				
				<!-- BEGIN #captions -->
				<panel>
					<panel-header>
						<panel-title>Captions</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
						<table class="table mb-0">
							<caption>List of users</caption>
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</panel-body>
					<highlightjs :code="code9" />
				</panel>
				<!-- END #captions -->
				
				<!-- BEGIN #responsiveTables -->
				<panel>
					<panel-header>
						<panel-title>Responsive tables</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code>.table</code> with <code>.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code>.table-responsive{-sm|-md|-lg|-xl}</code>.</p>
						<div class="table-responsive">
							<table class="table mb-0">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
										<th scope="col">Heading</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
										<td>Cell</td>
									</tr>
								</tbody>
							</table>
						</div>
					</panel-body>
					<highlightjs :code="code10" />
				</panel>
				<!-- END #responsiveTables -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	</div>
</template>