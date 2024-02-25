<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import datepicker from '@/components/plugins/Datepicker.vue';
import typeahead from '@/components/plugins/Typeahead.vue';
import tagsInput from '@/components/plugins/TagsInput.vue';
import quillEditor from '@/components/plugins/quillEditor.vue';
import vueSelect from '@/components/plugins/vueSelect.vue';
import colorPicker from '@caohenghu/vue-colorpicker';
import { useAppVariableStore } from '@/stores/app-variable';
import { vMaska } from 'maska';
import axios from 'axios';

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
			color: 'rgba(0, 122, 255, 1)',
      tag: '',
      tags: [],
      tagsAutocomplete: [{ text: 'javascript'}, { text: 'css'}, { text: 'html'}]
		}
	},
	components: {
		highlightjs: highlightjs,
		datepicker: datepicker,
		typeahead: typeahead,
		tagsInput: tagsInput,
		quillEditor: quillEditor,
		colorPicker: colorPicker,
		vueSelect: vueSelect
	},
	directives: { maska: vMaska },
	methods: {
		changeColor(color) {
			const { r, g, b, a } = color.rgba
			this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
		}
	},
	mounted() {
		axios.get('/assets/data/form/plugin-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/form/plugin-code-9.json').then((response) => {
			this.code9 = response.data;
		});
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
			<li class="breadcrumb-item active">Form Plugins</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Form Plugins <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-lg-6">
				<!-- BEGIN #datepicker -->
				<panel>
					<panel-header>
						<panel-title>Datepicker</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Vue 3 date time picker is a lightweight yet powerful and reusable datepicker component. It aims to provide a high level of customization to fit within any project. Please read the <a href="https://vue3datepicker.com/" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row mb-n2">
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Default <span class="text-danger">*</span></label>
										<datepicker />
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code1" />
				</panel>
				<!-- END #vue3Datepicker -->
		
				<!-- BEGIN #daterangepicker -->
				<panel>
					<panel-header>
						<panel-title>Daterangepicker</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Vue 3 date time picker is a lightweight yet powerful and reusable datepicker component. It aims to provide a high level of customization to fit within any project. Please read the <a href="https://vue3datepicker.com/" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row mb-n2">
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Default Date Range</label>
										<datepicker range />
									</div>
								</div>
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Predefined Range</label>
										<datepicker range auto-range="5" />
									</div>
								</div>
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Multi Calendars</label>
										<datepicker range multiCalendars />
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END #daterangepicker -->
		
				<!-- BEGIN #timepicker -->
				<panel>
					<panel-header>
						<panel-title>Timepicker</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Vue 3 date time picker is a lightweight yet powerful and reusable datepicker component. It aims to provide a high level of customization to fit within any project. Please read the <a href="https://vue3datepicker.com/" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row mb-n2">
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Default <span class="text-danger">*</span></label>
										<datepicker timePicker />
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code3" />
				</panel>
				<!-- END #bootstrapTimepicker -->
		
				<!-- BEGIN #typeahead -->
				<panel>
					<panel-header>
						<panel-title>Typeahead</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>A Vue3 component for a simple typeahead component. It will show a list of suggested items based on the user input. Please read the <a href="https://github.com/frikinside/vue3-simple-typeahead" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row">
								<div class="col-md-6">
									<label class="form-label">Default <span class="text-danger">*</span></label>
									<typeahead :items="['One','Two','Three']" :minInputLength="1" />
									<div class="pt-1 text-gray-600 fw-bold small">Enter 'one', 'two' or 'three' for typeahead preview</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END #typeahead -->
		
				<!-- BEGIN #tagsInput -->
				<panel>
					<panel-header>
						<panel-title>Tags Input</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>A tags input component for VueJS with autocompletion, custom validation, templating and much more. Please read the <a href="https://github.com/JohMun/vue-tags-input" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row">
								<div class="col-xl-8">
									<label class="form-label">Default <span class="text-danger">*</span></label>
									<div>
										<tags-input v-model="tag" :tags="tags" :autocomplete-items="tagsAutocomplete"/>
									</div>
									<div class="pt-1 text-gray-600 fw-bold small">Enter 'javascript', 'css' for autocomplete preview</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END #tagsInput -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-lg-6">
				<!-- BEGIN #maskedInput -->
				<panel>
					<panel-header>
						<panel-title>Masked Input</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Simple zero-dependency input mask for Vue.js and vanilla JS. Please read the <a href="https://github.com/beholdr/maska" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row">
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Default <span class="text-danger">*</span></label>
										<input class="form-control" v-maska="'(###) ###-####'" placeholder="(999) 999-9999" />
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END #maskedInput -->
		
				<!-- BEGIN #quillEditor -->
				<panel>
					<panel-header>
						<panel-title>Quill Editor</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>VueQuill is a Vue Component for building rich text editors, this package is a thin wrapper around Quill, to make it easier to use in a Vue 3 application. Please read the <a href="https://github.com/vueup/vue-quill" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<quill-editor theme="snow" />
						</form>
					</panel-body>
					<highlightjs :code="code7" />
				</panel>
				<!-- END #quillEditor -->
		
				<!-- BEGIN #vueSelect -->
				<panel>
					<panel-header>
						<panel-title>Vue Select</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Vue Select is a feature rich select/dropdown/typeahead component. It provides a default template that fits most use cases for a filterable select dropdown. Please read the <a href="https://vue-select.org/" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row">
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Default <span class="text-danger">*</span></label>
										<vue-select :options="['Mustard', 'Ketchup', 'Relish']" placeholder="-- Select Option --"></vue-select>
									</div>
								</div>
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Multiple SelectBox <span class="text-danger">*</span></label>
										<vue-select :options="['Mustard', 'Ketchup', 'Relish']" placeholder="-- Select Multiple Options --" multiple></vue-select>
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code8" />
				</panel>
				<!-- END #vueSelect -->
		
				<!-- BEGIN #vueColorpicker -->
				<panel>
					<panel-header>
						<panel-title>Vue Colorpicker</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>Vue Colorpicker is a colorpicker of Vue Components. Please read the <a href="https://github.com/caohenghu/vue-colorpicker" target="_blank">official documentation</a> for the full list of options.</p>
						<form>
							<div class="row">
								<div class="col-xl-6">
									<div class="mb-3">
										<label class="form-label">Default <span class="text-danger">*</span></label>
										<div class="input-group position-relative">
											<span class="input-group-text p-1">
												<span class="h-20px w-20px rounded d-block mx-3px" v-bind:style="{ backgroundColor: color }"></span>
											</span>
											<a href="#" class="stretched-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"></a>
											<div class="dropdown-menu p-2">
												<color-picker :color="color" @changeColor="changeColor" />
											</div>
											<input type="text" v-model="color" class="form-control" />
										</div>
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code9" />
				</panel>
				<!-- END #vueColorpicker -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	
	</div>
</template>
