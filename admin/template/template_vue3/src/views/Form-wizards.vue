<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';

const appVariable = useAppVariableStore();

export default {
	data () {
		return {
			code1: '',
			code2: '',
			code3: ''
		}
	},
	components: {
		highlightjs: highlightjs
	},
	mounted() {
		axios.get('/assets/data/form/wizard-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/form/wizard-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/form/wizard-code-3.json').then((response) => {
			this.code3 = response.data;
		});
	}
}
</script>
<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
		<li class="breadcrumb-item active">Wizards</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">Wizards <small>header small text goes here...</small></h1>
	<!-- END page-header -->
	
	
	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Wizard layout 1</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
		
					<div class="nav-wizards-container">
						<nav class="nav nav-wizards-1 mb-2">
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-no">1</div>
									<div class="nav-text">Completed step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-no">2</div>
									<div class="nav-text">Second step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link active" href="#">
									<div class="nav-no">3</div>
									<div class="nav-text">Active step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-no">4</div>
									<div class="nav-text">Disabled step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-no">5</div>
									<div class="nav-text">Last step</div>
								</a>
							</div>
						</nav>
					</div>
					<div class="card">
						<div class="card-body">
							wizard content here
						</div>
					</div>
				</panel-body>
				<highlightjs :code="code1" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
				
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Wizard layout 2</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
				
					<div class="nav-wizards-container">
						<nav class="nav nav-wizards-2 mb-3">
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-text">1. Completed step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link active" href="#">
									<div class="nav-text">2. Active step text</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-text">3. Disabled step text</div>
								</a>
							</div>
						</nav>
					</div>
					<div class="card">
						<div class="card-body">
							wizard content here
						</div>
					</div>
				</panel-body>
				<highlightjs :code="code2" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
		
		<!-- BEGIN col-6 -->
		<div class="col-xl-6">
			<!-- BEGIN panel -->
			<panel>
				<panel-header>
					<panel-title>Wizard layout 3</panel-title>
					<panel-toolbar />
				</panel-header>
				<panel-body>
					<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
			
					<div class="nav-wizards-container">
						<nav class="nav nav-wizards-3 mb-2">
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 1</div>
									<div class="nav-text">Completed step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link completed" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 2</div>
									<div class="nav-text">Second step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link active" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 3</div>
									<div class="nav-text">Active step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 4</div>
									<div class="nav-text">Disabled step</div>
								</a>
							</div>
							<div class="nav-item col">
								<a class="nav-link disabled" href="#">
									<div class="nav-dot"></div>
									<div class="nav-title">Step 5</div>
									<div class="nav-text">Last step</div>
								</a>
							</div>
						</nav>
					</div>
					<div class="card">
						<div class="card-body">
							wizard content here
						</div>
					</div>
				</panel-body>
				<highlightjs :code="code3" />
			</panel>
			<!-- END panel -->
		</div>
		<!-- END col-6 -->
	</div>
	<!-- END row -->
</template>