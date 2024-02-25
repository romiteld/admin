<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';

export default {
	data () {
		return {
			code1: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	mounted() {
		axios.get('/assets/data/page-option/with-footer.json').then((response) => {
			this.code1 = response.data;
		});
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Page Options</a></li>
			<li class="breadcrumb-item active">Page with Footer</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Page with Footer <small>header small text goes here...</small></h1>
		<!-- END page-header -->
	
		<!-- BEGIN panel -->
		<panel>
			<panel-header>
				<panel-title>Installation Settings</panel-title>
				<panel-toolbar />
			</panel-header>
			<panel-body>
				<p>
					Add the <code>.app-footer</code> element to <code>div</code> container for footer page element.
				</p>
			</panel-body>
			<!-- BEGIN hljs-wrapper -->
			<highlightjs :code="code1" />
		</panel>
		<!-- END panel -->
		
		<!-- BEGIN #footer -->
		<div id="footer" class="app-footer mx-0 px-0">
			&copy; 2023 Color Admin Responsive Admin Template - Sean Ngu All Rights Reserved
		</div>
		<!-- END #footer -->
	</div>
</template>