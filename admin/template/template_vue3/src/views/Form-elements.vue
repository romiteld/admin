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
		axios.get('/assets/data/form/element-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/form/element-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/form/element-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/form/element-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/form/element-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/form/element-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/form/element-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/form/element-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/form/element-code-9.json').then((response) => {
			this.code9 = response.data;
		});
		axios.get('/assets/data/form/element-code-10.json').then((response) => {
			this.code10 = response.data;
		});
		axios.get('/assets/data/form/element-code-11.json').then((response) => {
			this.code11 = response.data;
		});
		axios.get('/assets/data/form/element-code-12.json').then((response) => {
			this.code12 = response.data;
		});
		axios.get('/assets/data/form/element-code-13.json').then((response) => {
			this.code13 = response.data;
		});
		axios.get('/assets/data/form/element-code-14.json').then((response) => {
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
			<li class="breadcrumb-item"><a href="javascript:;">Form Stuff</a></li>
			<li class="breadcrumb-item active">Form Elements</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Form Elements <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		
		<!-- BEGIN row -->
		<div class="row mb-3">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Form Controls</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<div class="alert alert-muted">
							Textual form controls—like <code>&lt;input&gt;</code>s, <code>&lt;textarea&gt;</code>s, <code>&lt;select&gt;</code>s are styled with the <code>.form-control</code> and <code>.form-select</code> class. Included are styles for general appearance, focus state, sizing, and more.
						</div>
						<form>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Email address</label>
								<div class="col-md-9">
									<input type="email" class="form-control mb-5px" placeholder="Enter email" />
									<small class="fs-12px text-gray-500-darker">We'll never share your email with anyone else.</small>
								</div>
							</div>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Example select</label>
								<div class="col-md-9">
									<select class="form-select">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</div>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Example multiple select</label>
								<div class="col-md-9">
									<select multiple class="form-select">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</div>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Example textarea</label>
								<div class="col-md-9">
									<textarea class="form-control" rows="3"></textarea>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code1" />
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Readonly</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Readonly</label>
								<div class="col-sm-9">
									<input class="form-control" type="text" placeholder="Readonly input here…" readonly />
								</div>
							</div>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Readonly Plaintext</label>
								<div class="col-sm-9">
									<input type="text" readonly class="form-control-plaintext" value="email@example.com" />
								</div>
							</div>
							<div class="row mb-15px">
								<label class="form-label col-form-label col-md-3">Password</label>
								<div class="col-sm-9">
									<input type="password" class="form-control" placeholder="Password" />
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Form Range <span class="badge bg-success">NEW</span></panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form>
							<div class="d-flex align-items-center py-2">
								<div class="w-60px text-end pe-2">Min: <b>0</b></div>
								<div class="d-flex flex-1">
									<input type="range" class="form-range" min="0" max="5" id="customRange" />
								</div>
								<div class="w-60px text-start ps-2">Max: <b>50</b></div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code3" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Floating Label <span class="badge bg-success ms-1">NEW</span></panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<div class="row">
							<div class="col-md-6">
								<div class="form-floating mb-3 mb-md-0">
									<input type="email" class="form-control fs-15px" id="floatingInput" placeholder="name@example.com">
									<label for="floatingInput" class="d-flex align-items-center fs-13px">Email address</label>
								</div>
							</div>
							<div class="col-md-6">
								<form class="form-floating">
									<input type="email" class="form-control fs-15px" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
									<label for="floatingInputValue" class="d-flex align-items-center fs-13px">Input with value</label>
								</form>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END panel -->
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Sizing</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<div class="row">
							<div class="col-md-6">
								<div class="mb-10px">
									<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
								</div>
								<div class="mb-10px">
									<input class="form-control" type="text" placeholder="default input" />
								</div>
								<div class="mb-3 mb-md-0">
									<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="mb-10px">
									<select class="form-select form-select-lg">
										<option>.form-select-lg</option>
									</select>
								</div>
								<div class="mb-10px">
									<select class="form-select">
										<option>default select</option>
									</select>
								</div>
								<div>
									<select class="form-select form-select-sm">
										<option>.form-select-sm</option>
									</select>
								</div>
							</div>
						</div>
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Validation</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form>
							<div class="row mb-10px">
								<label class="form-label col-form-label col-md-3">Valid Input</label>
								<div class="col-md-9">
									<div class="input-group">
										<div class="input-group-text">@</div>
										<input type="text" class="form-control is-valid" />
										<div class="valid-feedback">Looks good!</div>
									</div>
								</div>
							</div>
							<div class="row mb-10px">
								<label class="form-label col-form-label col-md-3">Invalid Input</label>
								<div class="col-md-9">
									<div class="input-group">
										<div class="input-group-text">@</div>
										<input type="text" class="form-control is-invalid" />
										<div class="invalid-feedback">Please choose a unique and valid username.</div>
									</div>
								</div>
							</div>
							<div class="row form-group">
								<label class="form-label col-form-label col-md-3">Tooltip Message</label>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-6">
											<div class="input-group">
												<div class="input-group-text">@</div>
												<input type="text" class="form-control is-invalid" />
												<div class="invalid-tooltip">Please choose a unique and valid username.</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="input-group">
												<div class="input-group-text">@</div>
												<input type="text" class="form-control is-valid" />
												<div class="valid-tooltip">Looks good!</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
					
		<h3 class="mb-3">Checkboxes and Radios</h3>
		<!-- BEGIN row -->
		<div class="row mb-3">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Checkboxes <span class="badge bg-success ms-1">NEW</span></panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form>
							<div class="row mb-3">
								<label class="form-label col-form-label col-md-3">Checkbox</label>
								<div class="col-md-9">
									<div class="form-check mt-2 mb-2">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											Default checkbox
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
										<label class="form-check-label" for="flexCheckChecked">
											Checked checkbox
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
										<label class="form-check-label" for="flexCheckDisabled">
											Disabled checkbox
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
										<label class="form-check-label" for="flexCheckCheckedDisabled">
											Disabled checked checkbox
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input is-valid" type="checkbox" value="" id="validCheckbox" />
										<label class="form-check-label" for="validCheckbox">
											Valid Checkbox
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheckbox" />
										<label class="form-check-label" for="invalidCheckbox">
											Invalid Checkbox
										</label>
									</div>
								</div>
							</div>
							<div class="row mb-2">
								<label class="form-label col-form-label col-md-3">Inline Checkbox</label>
								<div class="col-md-9 pt-2">
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
										<label class="form-check-label" for="inlineCheckbox1">1</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
										<label class="form-check-label" for="inlineCheckbox2">2</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
										<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
									</div>
								</div>
							</div>
							<div class="row mb-0">
								<label class="form-label col-form-label col-md-3">Switches</label>
								<div class="col-md-9 pt-2">
									<div class="form-check form-switch mb-2">
										<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
										<label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
									</div>
									<div class="form-check form-switch mb-2">
										<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
										<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
									</div>
									<div class="form-check form-switch mb-2">
										<input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
										<label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
									</div>
									<div class="form-check form-switch">
										<input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
										<label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
									</div>
								</div>
							</div>
						</form>
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
					<panel-header>
						<panel-title>Radios <span class="badge bg-success ms-1">NEW</span></panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form>
							<div class="row mb-3">
								<label class="form-label col-form-label col-md-3">Radios</label>
								<div class="col-md-9 pt-2">
									<div class="form-check mb-2">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
										<label class="form-check-label" for="flexRadioDefault1">
											Default radio
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
										<label class="form-check-label" for="flexRadioDefault2">
											Default checked radio
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
										<label class="form-check-label" for="flexRadioDisabled">
											Disabled radio
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
										<label class="form-check-label" for="flexRadioCheckedDisabled">
											Disabled checked radio
										</label>
									</div>
									<div class="form-check mb-2">
										<input class="form-check-input is-valid" type="radio" name="default_radio" id="validDefaultRadio" value="" />
										<label class="form-check-label" for="validDefaultRadio">Success State</label>
									</div>
									<div class="form-check">
										<input class="form-check-input is-invalid" type="radio" name="default_radio" id="invalidDefaultRadio" value="" />
										<label class="form-check-label" for="invalidDefaultRadio">Error State</label>
									</div>
								</div>
							</div>
							<div class="row">
								<label class="form-label col-form-label col-md-3">Inline Radios</label>
								<div class="col-md-9 pt-2">
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="inlineRadio1" name="inlineRadio" />
										<label class="form-check-label" for="inlineRadio1">1</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="customRadio2" name="inlineRadio" />
										<label class="form-check-label" for="customRadio2">2</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="customRadio2" name="inlineRadio" />
										<label class="form-check-label" for="customRadio2">3 (disabled)</label>
									</div>
								</div>
							</div>
						</form>
					</panel-body>
					<highlightjs :code="code8" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->

		<h3 class="mb-3">Input Group</h3>
		<!-- BEGIN row -->
		<div class="row mb-3">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Input Group</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<div class="input-group mb-3">
							<div class="input-group-text">@</div>
							<input type="text" class="form-control" placeholder="Username" />
						</div>
						<div class="input-group mb-3">
							<input type="text" class="form-control" />
							<div class="input-group-text"><i class="fa fa-calendar"></i></div>
						</div>
						<div class="input-group mb-3">
							<div class="input-group-text">$</div>
							<input type="text" class="form-control" />
							<div class="input-group-text">.00</div>
						</div>
						<div class="input-group mb-10px">
							<div class="input-group-text">
								<input type="checkbox" class="form-check-input" />
							</div>
							<input type="text" class="form-control" placeholder="Checkbox add on" />
						</div>
						<div class="input-group mb-10px">
							<div class="input-group-text">
								<input type="radio" class="form-check-input" />
							</div>
							<input type="text" class="form-control" placeholder="Radio button add on" />
						</div>
						<div class="input-group">
							<button type="button" class="btn btn-primary">Action</button>
							<button type="button" class="btn btn-primary" data-bs-toggle="dropdown">
								<span class="caret"></span>
							</button>
							<div class="dropdown-menu">
								<a href="#" class="dropdown-item">Action</a>
								<a href="#" class="dropdown-item">Another action</a>
								<a href="#" class="dropdown-item">Something else here</a>
								<div class="dropdown-divider"></div>
								<a href="#" class="dropdown-item">Separated link</a>
							</div>
							<input type="text" class="form-control" />
							<button type="button" class="btn btn-indigo dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
								<span class="caret"></span>
							</button>
							<div class="dropdown-menu dropdown-menu-end">
								<a href="#" class="dropdown-item">Action</a>
								<a href="#" class="dropdown-item">Another action</a>
								<a href="#" class="dropdown-item">Something else here</a>
								<div class="dropdown-divider"></div>
								<a href="#" class="dropdown-item">Separated link</a>
							</div>
							<button type="button" class="btn btn-indigo">Action</button>
						</div>
					</panel-body>
					<highlightjs :code="code9" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Input Group Sizing</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<div class="input-group input-group-lg mb-10px">
							<div class="input-group-text">@</div>
							<input type="text" class="form-control" placeholder="Username" />
						</div>
						<div class="input-group mb-10px">
							<div class="input-group-text">@</div>
							<input type="text" class="form-control" placeholder="Username" />
						</div>
						<div class="input-group input-group-sm">
							<div class="input-group-text">@</div>
							<input type="text" class="form-control" placeholder="Username" />
						</div>
					</panel-body>
					<highlightjs :code="code10" />
				</panel>
				<!-- END panel -->
			</div>
		</div>
		<!-- END row -->

		<h3 class="mb-3">Form Style</h3>
		<!-- BEGIN row -->
		<div class="row mb-3">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Default Style</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form action="/" method="POST">
							<fieldset>
								<legend class="mb-3">Legend</legend>
								<div class="mb-3">
									<label class="form-label" for="exampleInputEmail1">Email address</label>
									<input class="form-control" type="email" id="exampleInputEmail1" placeholder="Enter email" />
								</div>
								<div class="mb-3">
									<label class="form-label" for="exampleInputPassword1">Password</label>
									<input class="form-control" type="password" id="exampleInputPassword1" placeholder="Password" />
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="checkbox" id="nf_checkbox_css_1" />
									<label class="form-check-label" for="nf_checkbox_css_1">Check me out</label>
								</div>
								<button type="submit" class="btn btn-primary w-100px me-5px">Login</button>
								<button type="submit" class="btn btn-default w-100px">Cancel</button>
							</fieldset>
						</form>
					</panel-body>
					<highlightjs :code="code11" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Form Horizontal</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form action="/" method="POST">
							<fieldset>
								<legend class="mb-3">Legend</legend>
								<div class="row mb-3">
									<label class="form-label col-form-label col-md-3">Email address</label>
									<div class="col-md-9">
										<input type="email" class="form-control" placeholder="Enter email" />
									</div>
								</div>
								<div class="row mb-3">
									<label class="form-label col-form-label col-md-3">Password</label>
									<div class="col-md-9">
										<input type="password" class="form-control" placeholder="Password" />
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-9 offset-md-3">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="fh_checkbox_css_1" />
											<label class="form-check-label" for="fh_checkbox_css_1">Check me out</label>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-7 offset-md-3">
										<button type="submit" class="btn btn-primary w-100px me-5px">Login</button>
										<button type="submit" class="btn btn-default w-100px ">Cancel</button>
									</div>
								</div>
							</fieldset>
						</form>
					</panel-body>
					<highlightjs :code="code12" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-12 -->
			<div class="col-12">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Inline Form</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<form class="row row-cols-lg-auto g-3 align-items-center" action="/" method="POST">
							<div class="col-12">
								<input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email" />
							</div>
							<div class="col-12">
								<input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
							</div>
							<div class="col-12">
								<div class="form-check">
									<input class="form-check-input" id="inline_form_checkbox" type="checkbox" />
									<label class="form-check-label" for="inline_form_checkbox">Remember me</label>
								</div>
							</div>
							<button type="submit" class="btn btn-primary w-100px me-5px">Sign in</button>
							<button type="submit" class="btn btn-default w-100px">Register</button>
						</form>
					</panel-body>
					<highlightjs :code="code13" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	</div>
</template>