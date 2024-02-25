<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import apexchart from '@/components/plugins/Apexcharts.vue';
import { useAppVariableStore } from '@/stores/app-variable';
import axios from 'axios';

const appVariable = useAppVariableStore();

export default {
	data () {
		return {
			darkMode: false,
			renderComponent: true,
			visitorData: this.getVisitorData(),
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
			code11: ''
		}
	},
	components: {
		highlightjs: highlightjs,
		apexchart: apexchart
	},
	methods: {
		handleChangeWidgetTheme: function() {
			this.darkMode = !this.darkMode;
		},
		handleGetDate(minusDate) {
			var d = new Date();
					d = d.setDate(d.getDate() - minusDate);
			return d;
		},
		getVisitorData() {
			return {
				chart: {
					series: [
						{ 
							name: 'Unique Visitors', 
							data: [
								[this.handleGetDate(77), 13], [this.handleGetDate(76), 13], [this.handleGetDate(75), 6 ], 
								[this.handleGetDate(73), 6 ], [this.handleGetDate(72), 6 ], [this.handleGetDate(71), 5 ], [this.handleGetDate(70), 5 ], 
								[this.handleGetDate(69), 5 ], [this.handleGetDate(68), 6 ], [this.handleGetDate(67), 7 ], [this.handleGetDate(66), 6 ], 
								[this.handleGetDate(65), 9 ], [this.handleGetDate(64), 9 ], [this.handleGetDate(63), 8 ], [this.handleGetDate(62), 10], 
								[this.handleGetDate(61), 10], [this.handleGetDate(60), 10], [this.handleGetDate(59), 10], [this.handleGetDate(58), 9 ], 
								[this.handleGetDate(57), 9 ], [this.handleGetDate(56), 10], [this.handleGetDate(55), 9 ], [this.handleGetDate(54), 9 ], 
								[this.handleGetDate(53), 8 ], [this.handleGetDate(52), 8 ], [this.handleGetDate(51), 8 ], [this.handleGetDate(50), 8 ], 
								[this.handleGetDate(49), 8 ], [this.handleGetDate(48), 7 ], [this.handleGetDate(47), 7 ], [this.handleGetDate(46), 6 ], 
								[this.handleGetDate(45), 6 ], [this.handleGetDate(44), 6 ], [this.handleGetDate(43), 6 ], [this.handleGetDate(42), 5 ], 
								[this.handleGetDate(41), 5 ], [this.handleGetDate(40), 4 ], [this.handleGetDate(39), 4 ], [this.handleGetDate(38), 5 ], 
								[this.handleGetDate(37), 5 ], [this.handleGetDate(36), 5 ], [this.handleGetDate(35), 7 ], [this.handleGetDate(34), 7 ], 
								[this.handleGetDate(33), 7 ], [this.handleGetDate(32), 10], [this.handleGetDate(31), 9 ], [this.handleGetDate(30), 9 ], 
								[this.handleGetDate(29), 10], [this.handleGetDate(28), 11], [this.handleGetDate(27), 11], [this.handleGetDate(26), 8 ], 
								[this.handleGetDate(25), 8 ], [this.handleGetDate(24), 7 ], [this.handleGetDate(23), 8 ], [this.handleGetDate(22), 9 ], 
								[this.handleGetDate(21), 8 ], [this.handleGetDate(20), 9 ], [this.handleGetDate(19), 10], [this.handleGetDate(18), 9 ], 
								[this.handleGetDate(17), 10], [this.handleGetDate(16), 16], [this.handleGetDate(15), 17], [this.handleGetDate(14), 16], 
								[this.handleGetDate(13), 17], [this.handleGetDate(12), 16], [this.handleGetDate(11), 15], [this.handleGetDate(10), 14], 
								[this.handleGetDate(9) , 24], [this.handleGetDate(8) , 18], [this.handleGetDate(7) , 15], [this.handleGetDate(6) , 14], 
								[this.handleGetDate(5) , 16], [this.handleGetDate(4) , 16], [this.handleGetDate(3) , 17], [this.handleGetDate(2) , 7 ], 
								[this.handleGetDate(1) , 7 ], [this.handleGetDate(0) , 7 ]
							]
						},
						{ 
							name: 'Page Views', 
							data: [
								[this.handleGetDate(77), 14], [this.handleGetDate(76), 13], [this.handleGetDate(75), 15], 
								[this.handleGetDate(73), 14], [this.handleGetDate(72), 13], [this.handleGetDate(71), 15], [this.handleGetDate(70), 16], 
								[this.handleGetDate(69), 16], [this.handleGetDate(68), 14], [this.handleGetDate(67), 14], [this.handleGetDate(66), 13], 
								[this.handleGetDate(65), 12], [this.handleGetDate(64), 13], [this.handleGetDate(63), 13], [this.handleGetDate(62), 15], 
								[this.handleGetDate(61), 16], [this.handleGetDate(60), 16], [this.handleGetDate(59), 17], [this.handleGetDate(58), 17], 
								[this.handleGetDate(57), 18], [this.handleGetDate(56), 15], [this.handleGetDate(55), 15], [this.handleGetDate(54), 15], 
								[this.handleGetDate(53), 19], [this.handleGetDate(52), 19], [this.handleGetDate(51), 18], [this.handleGetDate(50), 18], 
								[this.handleGetDate(49), 17], [this.handleGetDate(48), 16], [this.handleGetDate(47), 18], [this.handleGetDate(46), 18], 
								[this.handleGetDate(45), 18], [this.handleGetDate(44), 16], [this.handleGetDate(43), 14], [this.handleGetDate(42), 14], 
								[this.handleGetDate(41), 13], [this.handleGetDate(40), 14], [this.handleGetDate(39), 13], [this.handleGetDate(38), 10], 
								[this.handleGetDate(37), 9 ], [this.handleGetDate(36), 10], [this.handleGetDate(35), 11], [this.handleGetDate(34), 11], 
								[this.handleGetDate(33), 11], [this.handleGetDate(32), 10], [this.handleGetDate(31), 9 ], [this.handleGetDate(30), 10], 
								[this.handleGetDate(29), 13], [this.handleGetDate(28), 14], [this.handleGetDate(27), 14], [this.handleGetDate(26), 13], 
								[this.handleGetDate(25), 12], [this.handleGetDate(24), 11], [this.handleGetDate(23), 13], [this.handleGetDate(22), 13], 
								[this.handleGetDate(21), 13], [this.handleGetDate(20), 13], [this.handleGetDate(19), 14], [this.handleGetDate(18), 13], 
								[this.handleGetDate(17), 13], [this.handleGetDate(16), 19], [this.handleGetDate(15), 21], [this.handleGetDate(14), 22],
								[this.handleGetDate(13), 25], [this.handleGetDate(12), 24], [this.handleGetDate(11), 24], [this.handleGetDate(10), 22], 
								[this.handleGetDate(9) , 16], [this.handleGetDate(8) , 15], [this.handleGetDate(7) , 12], [this.handleGetDate(6) , 12], 
								[this.handleGetDate(5) , 15], [this.handleGetDate(4) , 15], [this.handleGetDate(3) , 15], [this.handleGetDate(2) , 18], 
								[this.handleGetDate(2) , 18], [this.handleGetDate(0) , 17]
							] 
						}
					],
					options: {
						colors: [appVariable.color.red, appVariable.color.orange],
						fill: {
							opacity: .75,
							type: 'solid'
						},
						legend: {
							position: 'top',
							horizontalAlign: 'right',
							offsetY: 15,
							offsetX: 500,
							labels: {
								colors: appVariable.color.componentColor
							}
						},
						xaxis: {
							type: 'datetime',
							tickAmount: 6,
							labels: {
								style: {
									colors: appVariable.color.componentColor
								}
							}
						},
						yaxis: {
							labels: {
								style: {
									colors: appVariable.color.componentColor
								}
							}
						},
						tooltip: { y: { formatter: function (val) { return "$ " + val + " thousands" } } },
						chart: { height: '100%', type: 'area', toolbar: { show: false }, stacked: true },
						plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
						dataLabels: { enabled: false },
						grid: { 
							show: true, borderColor: 'rgba('+ appVariable.color.componentColorRgb +', .15)',
							xaxis: {
								lines: {
									show: true
								}
							},   
							yaxis: {
								lines: {
									show: true
								}
							},
							padding: {
									top: -40,
									right: 3,
									bottom: 0,
									left: 10
							},
						},
						stroke: { 
							show: false,
							curve: 'straight'
						}
					}
				}
			};
		},
	},
	created() {
		this.emitter.on('theme-reload', (evt) => {
			this.renderComponent = false;
			
			this.$nextTick(() => {
				this.lineChart = this.getLineChartData();
				this.doughnutChart = this.getDoughnutChartData();
				this.renderComponent = true;
				setTimeout(() => {
					this.renderMap();
				}, 50);
			});
    })
	},
	mounted() {
		axios.get('/assets/data/widgets/widget-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-7.json').then((response) => {
			this.code7 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-8.json').then((response) => {
			this.code8 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-9.json').then((response) => {
			this.code9 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-10.json').then((response) => {
			this.code10 = response.data;
		});
		axios.get('/assets/data/widgets/widget-code-11.json').then((response) => {
			this.code11 = response.data;
		});
	}
}
</script>
<template>
	<!-- BEGIN breadcrumb -->
	<ol class="breadcrumb float-xl-end">
		<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
		<li class="breadcrumb-item active">Widgets</li>
	</ol>
	<!-- END breadcrumb -->
	<!-- BEGIN page-header -->
	<h1 class="page-header">
		Widgets <small>header small text goes here...</small>
	</h1>
	<!-- END page-header -->

	<span class="btn-group float-end ms-20px  p-2px bg-black bg-opacity-20 rounded">
		<a href="javascript:;" class="btn btn-sm btn-white border-0" v-on:click.prevent="handleChangeWidgetTheme()" v-bind:class="{ 'active': !darkMode }"><i class="fa fa-sun" v-bind:class="{ 'text-blue': !darkMode }"></i> Light</a>
		<a href="javascript:;" class="btn btn-sm btn-white border-0" v-on:click.prevent="handleChangeWidgetTheme()" v-bind:class="{ 'active': darkMode }"><i class="fa fa-moon" v-bind:class="{ 'text-blue': darkMode }"></i> Dark</a>
	</span>
	<p class="mb-20px">
		All the widgets is reusable and responsive. You may use the predefined css to configure the padding, margin or background. Besides that, all the widgets have light and dark version. 
		Kindly add the <code>[data-bs-theme="dark"]</code> to the widget will change it to the dark version.
	</p>

	<!-- BEGIN row -->
	<div class="row">
		<!-- BEGIN col-4 -->
		<div class="col-lg-12 col-xl-4">
			<!-- BEGIN row -->
			<div class="row">
				<!-- BEGIN col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- BEGIN widget-list -->
					<div class="mb-10px mt-10px fs-10px">
						<a href="#modal-widget-list" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
						<b class="text-body">WIDGET LIST</b>
					</div>
					<div class="widget-list rounded mb-4" :data-bs-theme="darkMode ? 'dark' : ''">
						<!-- BEGIN widget-list-item -->
						<div class="widget-list-item">
							<div class="widget-list-media">
								<img src="/assets/img/user/user-12.jpg" width="50" alt="" class="rounded" />
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Christopher Struth</h4>
								<p class="widget-list-desc">Bank Transfer</p>
							</div>
							<div class="widget-list-action">
								<a href="#" data-bs-toggle="dropdown" class="text-body text-opacity-50"><i class="fa fa-ellipsis-h fs-14px"></i></a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#" class="dropdown-item">Option 1</a>
									<a href="#" class="dropdown-item">Option 2</a>
									<a href="#" class="dropdown-item">Option 3</a>
									<div class="dropdown-divider"></div>
									<a href="#" class="dropdown-item">Option 4</a>
								</div>
							</div>
						</div>
						<!-- END widget-list-item -->
						<!-- BEGIN widget-list-item -->
						<div class="widget-list-item">
							<div class="widget-list-media">
								<img src="/assets/img/user/user-13.jpg" width="50" alt="" class="rounded" />
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Janie Flowers</h4>
								<p class="widget-list-desc">Bank Transfer</p>
							</div>
							<div class="widget-list-action">
								<a href="#" data-bs-toggle="dropdown" class="text-body text-opacity-50"><i class="fa fa-ellipsis-h fs-14px"></i></a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#" class="dropdown-item">Option 1</a>
									<a href="#" class="dropdown-item">Option 2</a>
									<a href="#" class="dropdown-item">Option 3</a>
									<div class="dropdown-divider"></div>
									<a href="#" class="dropdown-item">Option 4</a>
								</div>
							</div>
						</div>
						<!-- END widget-list-item -->
						<!-- BEGIN widget-list-item -->
						<div class="widget-list-item">
							<div class="widget-list-media">
								<img src="/assets/img/user/user-14.jpg" width="50" alt="" class="rounded" />
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Janie Flowers</h4>
								<p class="widget-list-desc">Bank Transfer</p>
							</div>
							<div class="widget-list-action">
								<a href="#" data-bs-toggle="dropdown" class="text-body text-opacity-50"><i class="fa fa-ellipsis-h fs-14px"></i></a>
								<div class="dropdown-menu dropdown-menu-end">
									<a href="#" class="dropdown-item">Option 1</a>
									<a href="#" class="dropdown-item">Option 2</a>
									<a href="#" class="dropdown-item">Option 3</a>
									<div class="dropdown-divider"></div>
									<a href="#" class="dropdown-item">Option 4</a>
								</div>
							</div>
						</div>
						<!-- END widget-list-item -->
					</div>
					<!-- END widget-list -->
				</div>
				<!-- END col-12 -->
				<!-- BEGIN col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- BEGIN widget-list -->
					<div class="mb-10px mt-10px fs-10px">
						<a href="#modal-widget-list-with-icon" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
						<b class="text-body">WIDGET LIST WITH ICON</b>
					</div>
					<div class="widget-list rounded mb-4" :data-bs-theme="darkMode ? 'dark' : ''">
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-plane bg-dark text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Airplane Mode</h4>
							</div>
							<div class="widget-list-action text-end">
								<i class="fa fa-angle-right fa-lg text-body text-opacity-30"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-wifi bg-dark text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Wi-Fi</h4>
							</div>
							<div class="widget-list-action text-nowrap text-body text-opacity-50 fw-bold text-decoration-none">
								Connected
								<i class="fa fa-angle-right fa-lg ms-3 text-body text-opacity-30"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fab fa-bluetooth bg-indigo text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Bluetooth</h4>
							</div>
							<div class="widget-list-action text-nowrap text-body text-opacity-50 fw-bold text-decoration-none">
								On
								<i class="fa fa-angle-right text-body text-opacity-30 fa-lg ms-3"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-signal bg-pink text-white"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Cellular</h4>
							</div>
							<div class="widget-list-action text-decoration-none fw-bold">
								<i class="fa fa-angle-right text-gray-500 fa-lg"></i>
							</div>
						</a>
						<a href="#" class="widget-list-item">
							<div class="widget-list-media icon">
								<i class="fa fa-link bg-yellow text-gray-900"></i>
							</div>
							<div class="widget-list-content">
								<h4 class="widget-list-title">Personal Hotspot</h4>
							</div>
							<div class="widget-list-action text-nowrap text-body text-opacity-50 fw-bold text-decoration-none">
								Off
								<i class="fa fa-angle-right text-body text-opacity-30 fa-lg ms-3"></i>
							</div>
						</a>
					</div>
					<!-- END widget-list -->
				</div>
				<!-- END col-12 -->
				<!-- BEGIN col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- BEGIN widget-chat -->
					<div class="mb-10px mt-10px fs-10px">
						<a href="#modal-widget-chat-input" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
						<b class="text-body">WIDGET CHAT</b>
					</div>
					<div class="widget-chat rounded mb-4" :data-bs-theme="darkMode ? 'dark' : ''">
						<!-- BEGIN widget-chat-header -->
						<div class="widget-chat-header">
							<div class="widget-chat-header-icon">
								<i class="fab fa-earlybirds w-30px h-30px fs-20px bg-yellow text-gray-900 d-flex align-items-center justify-content-center rounded"></i>
							</div>
							<div class="widget-chat-header-content">
								<h4 class="widget-chat-header-title">Company Discussion Group</h4>
								<p class="widget-chat-header-desc">55 members, 4 online</p>
							</div>
						</div>
						<!-- END widget-chat-header -->
						<!-- BEGIN widget-chat-body -->
						<div class="widget-chat-body" data-scrollbar="true" data-height="235px">
							<!-- BEGIN widget-chat-item -->
							<div class="widget-chat-item with-media start">
								<div class="widget-chat-media">
									<img alt="" src="/assets/img/user/user-1.jpg" />
								</div>
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-name text-indigo">Hudson Mendes</div>
										<div class="widget-chat-message">Should we plan for a company trip this year?</div>
										<div class="widget-chat-time">6:00PM</div>
									</div>
								</div>
							</div>
							<!-- END widget-chat-item -->
							<!-- BEGIN widget-chat-item -->
							<div class="widget-chat-item with-media start">
								<div class="widget-chat-media">
									<img alt="" src="/assets/img/user/user-2.jpg" />
								</div>
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-name text-primary">Sam Sugerman</div>
										<div class="widget-chat-message">ok let's do it</div>
										<div class="widget-chat-time">6:01PM</div>
									</div>
								</div>
							</div>
							<!-- END widget-chat-item -->
							<!-- BEGIN widget-chat-item -->
							<div class="widget-chat-item end">
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-message">i'm ok with it</div>
										<div class="widget-chat-time">6:05PM</div>
									</div>
								</div>
							</div>
							<!-- END widget-chat-item -->
							<div class="text-center text-gray-500 m-2 fw-bold">Today</div>
							<!-- BEGIN widget-chat-item -->
							<div class="widget-chat-item with-media start">
								<div class="widget-chat-media">
									<img alt="" src="/assets/img/user/user-3.jpg" />
								</div>
								<div class="widget-chat-info">
									<div class="widget-chat-info-container">
										<div class="widget-chat-name text-orange">Jaxon Allwood</div>
										<div class="widget-chat-message">
											Here is some images for New Zealand
											<div class="row gx-1 mt-5px">
												<div class="col-md-4">
													<a href="#" class="widget-card widget-card-sm square mb-1">
														<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-51-thumb.jpg)"></div>
													</a>
													<a href="#" class="widget-card widget-card-sm square mb-1">
														<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-52-thumb.jpg)"></div>
													</a>
												</div>
												<div class="col-md-4">
													<a href="#" class="widget-card widget-card-sm square mb-1">
														<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-53-thumb.jpg)"></div>
													</a>
													<a href="#" class="widget-card widget-card-sm square mb-1">
														<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-54-thumb.jpg)"></div>
													</a>
												</div>
												<div class="col-md-4">
													<a href="#" class="widget-card widget-card-sm square mb-1">
														<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-59-thumb.jpg)"></div>
													</a>
													<a href="#" class="widget-card widget-card-sm square mb-1">
														<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-60-thumb.jpg)"></div>
													</a>
												</div>
											</div>
										</div>
										<div class="widget-chat-time">6:20PM</div>
									</div>
								</div>
							</div>
							<!-- END widget-chat-item -->
						</div>
						<!-- END widget-chat-body -->
						<!-- BEGIN widget-input -->
						<div class="widget-input">
							<form action="" method="POST" name="">
								<div class="widget-input-container">
									<div class="widget-input-icon"><a href="#" class="text-body text-opacity-50"><i class="fa fa-camera"></i></a></div>
									<div class="widget-input-box">
										<input type="text" class="form-control" placeholder="Write a message..." />
									</div>
									<div class="widget-input-icon"><a href="#" class="text-body text-opacity-50"><i class="fa fa-smile"></i></a></div>
									<div class="widget-input-divider"></div>
									<div class="widget-input-icon"><a href="#" class="text-body text-opacity-50"><i class="fa fa-microphone"></i></a></div>
								</div>
							</form>
						</div>
						<!-- END widget-input -->
					</div>
					<!-- END widget-chat -->
				</div>
				<!-- END col-12 -->
				<!-- BEGIN col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- BEGIN widget-todolist -->
					<div class="mb-10px mt-10px fs-10px">
						<a href="#modal-widget-todolist" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
						<b class="text-body">WIDGET TODOLIST</b>
					</div>
					<div class="widget-todolist rounded mb-4" :data-bs-theme="darkMode ? 'dark' : ''">
						<!-- BEGIN widget-todolist-header -->
						<div class="widget-todolist-header">
							<div class="widget-todolist-header-title">Todolist</div>
							<div class="widget-todolist-header-total"><span>0</span><small>Done</small></div>
						</div>
						<!-- END widget-todolist-header -->
						<!-- BEGIN widget-todolist-body -->
						<div class="widget-todolist-body">
							<!-- BEGIN widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="widget_todolist_1" />
									</div>
								</div>
								<div class="widget-todolist-content">
									<h6 class="mb-2px">Borrow Tony's travel guide</h6>
									<div class="text-body text-opacity-75 fw-bold fs-11px">Vacation in Rome</div>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- END widget-todolist-item -->
							<!-- BEGIN widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="widget_todolist_2" />
									</div>
								</div>
								<div class="widget-todolist-content">
									<h6 class="mb-2px">Finish expense report</h6>
									<div class="text-body text-opacity-75 fw-bold fs-11px">Today, 4:00PM, Daily</div>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- END widget-todolist-item -->
							<!-- BEGIN widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="widget_todolist_3" />
									</div>
								</div>
								<div class="widget-todolist-content">
									<h6 class="mb-2px">Confirm conference call for Wednesday</h6>
									<div class="text-body text-opacity-75 fw-bold fs-11px">Work</div>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- END widget-todolist-item -->
							<!-- BEGIN widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="widget_todolist_4" />
									</div>
								</div>
								<div class="widget-todolist-content">
									<h6 class="mb-2px"><b class="text-warning">!!</b> Mobile App WIP Presentation</h6>
									<div class="text-body text-opacity-75 fw-bold fs-11px">Today, 12:00PM</div>
								</div>
								<div class="widget-todolist-icon">
									<a href="#"><i class="fa fa-question-circle"></i></a>
								</div>
							</div>
							<!-- END widget-todolist-item -->
							<!-- BEGIN widget-todolist-item -->
							<div class="widget-todolist-item">
								<div class="widget-todolist-input">
									<i class="fa fa-plus text-body text-opacity-30 fa-fw"></i>
								</div>
								<div class="widget-todolist-content">
									<input type="text" class="form-control border-0 shadow-none rounded-0 p-0 h-20px bg-none" placeholder="Write your task here..." />
								</div>
							</div>
							<!-- END widget-todolist-item -->
						</div>
						<!-- END widget-todolist-body -->
					</div>
					<!-- END widget-todolist -->
				</div>
				<!-- END col-12 -->
				<!-- BEGIN col-12 -->
				<div class="col-xl-12 col-lg-6">
					<!-- BEGIN widget-map -->
					<div class="mb-10px mt-10px fs-10px">
						<a href="#modal-widget-map" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
						<b class="text-body">WIDGET MAP</b>
					</div>
					<div class="widget-map rounded mb-4" :data-bs-theme="darkMode ? 'dark' : ''">
						<!-- BEGIN widget-input-container -->
						<div class="widget-input-container">
							<div class="widget-input-icon"><a href="#" class="text-body text-opacity-50" data-id="widget-elm" data-light-class="text-body text-opacity-50" data-dark-class="text-white"><i class="fa fa-ellipsis-v"></i></a></div>
							<div class="widget-input-box">
								<input type="text" class="form-control" placeholder="Search here">
							</div>
							<div class="widget-input-icon"><a href="#" class="text-body text-opacity-50" data-id="widget-elm" data-light-class="text-body text-opacity-50" data-dark-class="text-white"><i class="fa fa-microphone"></i></a></div>
							<div class="widget-input-divider"></div>
							<div class="widget-input-icon"><a href="#" class="text-body text-opacity-50" data-id="widget-elm" data-light-class="text-body text-opacity-50" data-dark-class="text-white"><i class="fa fa-location-arrow"></i></a></div>
						</div>
						<!-- END widget-input-container -->
						<!-- BEGIN widget-map-body -->
						<div class="widget-map-body">
							<iframe class="d-block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5650178360584!2d-122.41879278478642!3d37.77679637975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2smy!4v1524046379645" width="100%" height="230" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
						<!-- END widget-map-body -->
						<!-- BEGIN widget-map-list -->
						<div class="widget-map-list" :data-bs-theme="darkMode ? 'dark' : ''">
							<div class="widget-list bg-none">
								<!-- BEGIN widget-list-item -->
								<div class="widget-list-item">
									<div class="widget-list-media text-center">
										<a href="#"><i class="fab fa-twitter fa-3x"></i></a>
									</div>
									<div class="widget-list-content">
										<h4 class="widget-list-title">Twitter Headquater</h4>
										<p class="widget-list-desc">Corporate Office</p>
									</div>
									<div class="widget-list-action">
										<a href="#" data-bs-toggle="dropdown" class="text-body text-opacity-50"><i class="fa fa-angle-right fa-2x"></i></a>
									</div>
								</div>
								<!-- END widget-list-item -->
							</div>
						</div>
						<!-- END widget-map-list -->
					</div>
					<!-- END widget-map -->
				</div>
				<!-- END col-12 -->
			</div>
			<!-- END row -->
		</div>
		<!-- END col-4 -->
		<!-- BEGIN col-8 -->
		<div class="col-lg-12 col-xl-8">
			<div class="mb-10px mt-10px fs-10px">
				<a href="#modal-widget-img-icon" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
				<b class="text-body">WIDGET IMAGE / ICON</b>
			</div>
			<!-- BEGIN row -->
			<div class="row mb-4">
				<!-- BEGIN col-6 -->
				<div class="col-sm-6">
					<div class="d-flex flex-wrap">
						<div class="widget-icon rounded bg-indigo me-5px mb-5px text-white">
							<i class="fab fa-digital-ocean"></i>
						</div>
						<div class="widget-icon rounded bg-blue me-5px mb-5px text-white">
							<i class="fab fa-twitter"></i>
						</div>
						<div class="widget-icon rounded bg-success me-5px mb-5px text-white">
							<i class="fab fa-android"></i>
						</div>
						<div class="widget-icon rounded bg-warning me-5px mb-5px text-white">
							<i class="fab fa-firefox"></i>
						</div>
						<div class="widget-icon rounded bg-danger me-5px mb-5px text-white">
							<i class="fab fa-google-plus-g"></i>
						</div>
						<div class="widget-icon rounded bg-pink me-5px mb-5px text-white">
							<i class="fab fa-pinterest"></i>
						</div>
					</div>
					<div class="clearfix">
						<div class="widget-icon widget-icon-xl user rounded float-start me-5px mb-5px" v-bind:class="darkMode ? 'bg-dark text-white text-opacity-50' : 'bg-gray-500 text-white'">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon widget-icon-lg user rounded float-start me-5px mb-5px" v-bind:class="darkMode ? 'bg-dark text-white text-opacity-50' : 'bg-gray-500 text-white'">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon user rounded float-start me-5px mb-5px" v-bind:class="darkMode ? 'bg-dark text-white text-opacity-50' : 'bg-gray-500 text-white'">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon widget-icon-sm user rounded float-start me-5px mb-5px" v-bind:class="darkMode ? 'bg-dark text-white text-opacity-50' : 'bg-gray-500 text-white'">
							<i class="fa fa-user"></i>
						</div>
						<div class="widget-icon widget-icon-xs user rounded float-start me-5px mb-5px" v-bind:class="darkMode ? 'bg-dark text-white text-opacity-50' : 'bg-gray-500 text-white'">
							<i class="fa fa-user"></i>
						</div>
					</div>
				</div>
				<!-- END col-6 -->
				<!-- BEGIN col-6 -->
				<div class="col-sm-6">
					<div class="float-start">
						<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-11-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-12-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-13-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-14-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-15-thumb.jpg)"
						></div>
						<div class="widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-16-thumb.jpg)"
						></div>
						<br />
						<div class="widget-img widget-img-xl rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-21-thumb.jpg)"
						></div>
						<div class="widget-img widget-img-lg rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-22-thumb.jpg)"
						></div>
						<div class="widget-img widget-img rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-23-thumb.jpg)"
						></div>
						<div class="widget-img widget-img-sm rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-24-thumb.jpg)"
						></div>
						<div class="widget-img widget-img-xs rounded bg-dark float-start me-5px mb-5px"
							style="background-image: url(../assets/img/gallery/gallery-25-thumb.jpg)"
						></div>
					</div>
				</div>
				<!-- END col-6 -->
			</div>
			<!-- END row -->
		
			<div class="mb-10px mt-10px fs-10px">
				<a href="#modal-widget-card" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
				<b class="text-body">WIDGET CARD</b>
			</div>
			<!-- BEGIN row -->
			<div class="row">
				<!-- BEGIN col-6 -->
				<div class="col-sm-6">
					<!-- BEGIN widget-card -->
					<a href="#" class="widget-card rounded mb-20px" :data-bs-theme="darkMode ? 'dark' : ''">
						<div class="widget-card-cover rounded" style="background-image: url(../assets/img/gallery/gallery-portrait-11-thumb.jpg)"></div>
						<div class="widget-card-content">
							<b class="text-white">Download and get free trial.</b>
						</div>
						<div class="widget-card-content bottom">
							<i class="fab fa-pushed fa-5x text-indigo"></i>
							<h4 class="text-white mt-10px"><b>Apple Draw<br /> Photo Booth</b></h4>
							<h5 class="fs-12px text-white text-opacity-75 mb-0"><b>EASILY DRAW ON PHOTOS</b></h5>
						</div>
					</a>
					<!-- END widget-card -->
				</div>
				<!-- END col-6 -->
				<!-- BEGIN col-6 -->
				<div class="col-sm-6">
					<!-- BEGIN widget-card -->
					<a href="#" class="widget-card rounded mb-20px" :data-bs-theme="darkMode ? 'dark' : ''">
						<div class="widget-card-cover rounded"></div>
						<div class="widget-card-content">
							<h5 class="fs-12px text-body"><b>MAKING A DIFFERENCE</b></h5>
							<h4 class="mb-10px text-pink"><b>Apple Heart<br /> Study App</b></h4>
							<i class="fa fa-heartbeat fa-5x text-pink text-opacity-50"></i>
						</div>
						<div class="widget-card-content bottom">
							<b class="text-body">Opt in and help heart research.</b>
						</div>
					</a>
					<!-- END widget-card -->
				</div>
				<!-- END col-6 -->
			</div>
			<!-- END row -->
		
			<div class="mb-10px mt-10px fs-10px">
				<a href="#modal-widget-card-square" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
				<b class="text-body">WIDGET CARD SQUARE</b>
			</div>
			<!-- BEGIN row -->
			<div class="row">
				<!-- BEGIN col-3 -->
				<div class="col-xs-6 col-sm-3">
					<!-- BEGIN row -->
					<div class="row gx-1 mb-1">
						<!-- BEGIN col-6 -->
						<div class="col-6">
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/login-bg/login-bg-1-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/login-bg/login-bg-2-thumb.jpg)"></div>
							</a>
						</div>
						<!-- END col-6 -->
						<!-- BEGIN col-6 -->
						<div class="col-6">
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/login-bg/login-bg-3-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/login-bg/login-bg-4-thumb.jpg)"></div>
							</a>
						</div>
						<!-- END col-6 -->
					</div>
					<!-- END row -->
					<div class="fs-12px fw-bold text-body">Camera Roll</div>
					<div class="fs-10px fw-bold text-body text-opacity-50 mb-3">2,711</div>
				</div>
				<!-- END col-3 -->
				<!-- BEGIN col-3 -->
				<div class="col-xs-6 col-sm-3">
					<a href="#" class="widget-card rounded square mb-5px">
						<div class="widget-card-cover" style="background-image: url(../assets/img/login-bg/login-bg-7-thumb.jpg)">
							<span class="widget-card-cover-icon"><i class="fa fa-play fa-lg"></i></span>
						</div>
					</a>
					<div class="fs-12px fw-bold text-body pt-2px">Videos</div>
					<div class="fs-10px fw-bold text-body text-opacity-50 mb-3">31</div>
				</div>
				<!-- END col-3 -->
				<!-- BEGIN col-3 -->
				<div class="col-xs-6 col-sm-3">
					<a href="#" class="widget-card rounded square mb-5px">
						<div class="widget-card-cover" style="background-image: url(../assets/img/login-bg/login-bg-10-thumb.jpg)">
							<div class="d-flex h-100 align-items-center justify-content-center">
								<div class="text-center">
									<div class="text-white fs-14px"><b>PORTRAITS OF</b></div>
									<div class="text-white text-opacity-75 fw-bold">2023</div>
								</div>
							</div>
						</div>
					</a>
					<div class="fs-12px fw-bold text-body pt-2px">Memory 2023</div>
					<div class="fs-10px fw-bold text-body text-opacity-50 mb-3">1,239</div>
				</div>
				<!-- END col-3 -->
				<!-- BEGIN col-3 -->
				<div class="col-xs-6 col-sm-3">
					<!-- BEGIN row -->
					<div class="row gx-1 mb-5px">
						<!-- BEGIN col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-1-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-2-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-3-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-4-thumb.jpg)"></div>
							</a>
						</div>
						<!-- END col-3 -->
						<!-- BEGIN col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-5-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-6-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-7-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-8-thumb.jpg)"></div>
							</a>
						</div>
						<!-- END col-3 -->
						<!-- BEGIN col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-9-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-10-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-11-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-12-thumb.jpg)"></div>
							</a>
						</div>
						<!-- END col-3 -->
						<!-- BEGIN col-3 -->
						<div class="col-3">
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-13-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-14-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-15-thumb.jpg)"></div>
							</a>
							<a href="#" class="widget-card rounded square mb-1">
								<div class="widget-card-cover" style="background-image: url(../assets/img/gallery/gallery-16-thumb.jpg)"></div>
							</a>
						</div>
						<!-- END col-3 -->
					</div>
					<!-- END row -->
					<div class="fs-12px fw-bold text-body">Albums</div>
					<div class="fs-10px fw-bold text-body text-opacity-50 mb-15px">8</div>
				</div>
				<!-- END col-3 -->
			</div>
			<!-- END row -->
		
			<div class="mb-10px mt-10px fs-10px">
				<a href="#modal-widget-stat" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
				<b class="text-body">WIDGET STAT</b>
			</div>
			<!-- BEGIN row -->
			<div class="row gx-2 mb-20px">
				<!-- BEGIN col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-teal mb-7px">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">TODAY'S VISITS</div>
							<div class="stats-number">7,842,900</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 70.1%;"></div>
							</div>
							<div class="stats-desc">Better than last week (70.1%)</div>
						</div>
					</div>
				</div>
				<!-- END col-4 -->
				<!-- BEGIN col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-blue mb-7px">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-dollar-sign fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">TODAY'S PROFIT</div>
							<div class="stats-number">180,200</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 40.5%;"></div>
							</div>
							<div class="stats-desc">Better than last week (40.5%)</div>
						</div>
					</div>
				</div>
				<!-- END col-4 -->
				<!-- BEGIN col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-purple mb-7px">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-archive fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">NEW ORDERS</div>
							<div class="stats-number">38,900</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 76.3%;"></div>
							</div>
							<div class="stats-desc">Better than last week (76.3%)</div>
						</div>
					</div>
				</div>
				<!-- END col-4 -->
				<!-- BEGIN col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-dark mb-7px">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-comment-alt fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">NEW COMMENTS</div>
							<div class="stats-number">3,988</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 54.9%;"></div>
							</div>
							<div class="stats-desc">Better than last week (54.9%)</div>
						</div>
					</div>
				</div>
				<!-- END col-4 -->
				<!-- BEGIN col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-orange mb-7px">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-file-alt fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">PENDING INVOICE</div>
							<div class="stats-number">20</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 23.5%;"></div>
							</div>
							<div class="stats-desc">More than last week (23.5%)</div>
						</div>
					</div>
				</div>
				<!-- END col-4 -->
				<!-- BEGIN col-4 -->
				<div class="col-lg-4 col-sm-6">
					<div class="widget widget-stats bg-pink mb-7px">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-exclamation-triangle fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">ERROR LOG</div>
							<div class="stats-number">5</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 10.5%;"></div>
							</div>
							<div class="stats-desc">More than last week (10.5%)</div>
						</div>
					</div>
				</div>
				<!-- END col-4 -->
			</div>
			<!-- END row -->
		
			<div class="mb-10px mt-10px fs-10px">
				<a href="#modal-widget-chart" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
				<b class="text-body">WIDGET CHART</b>
			</div>
			<!-- BEGIN widget-chart -->
			<div class="widget rounded mb-4" :data-bs-theme="darkMode ? 'dark' : ''">
				<!-- BEGIN widget-header -->
				<div class="widget-header">
					<h4 class="widget-header-title">Audience Overview</h4>
					<div class="widget-header-icon"><a href="#" class="text-body text-opacity-50"><i class="fa fa-fw fa-upload"></i></a></div>
					<div class="widget-header-icon"><a href="#" class="text-body text-opacity-50"><i class="fa fa-fw fa-cog"></i></a></div>
				</div>
				<!-- END widget-header -->
				<!-- BEGIN widget-content -->
				<div class="row m-0">
					<div class="col widget-chart-content">
						<apexchart type="bar" width="100%" height="350px" :options="visitorData.chart.options" :series="visitorData.chart.series"></apexchart>
					</div>
					<div class="col-lg-4 p-3">
						<div class="widget-chart-info">
							<h4 class="widget-chart-info-title">Total sales</h4>
							<p class="widget-chart-info-desc">Lorem ipsum dolor sit consectetur adipiscing elit.</p>
							<div class="widget-chart-info-progress">
								<b>Monthly Plan</b>
								<span class="float-end">70%</span>
							</div>
							<div class="progress h-10px">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill" style="width:70%;"></div>
							</div>
						</div>
						<hr />
						<div class="widget-chart-info">
							<h4 class="widget-chart-info-title">Task progress</h4>
							<p class="widget-chart-info-desc">Vestibulum sollicitudin in lectus a cursus.</p>
							<div class="widget-chart-info-progress">
								<b>Marketing Research</b>
								<span class="float-end">74%</span>
							</div>
							<div class="progress h-10px mb-15px">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-indigo" style="width: 74%"></div>
							</div>
							<div class="widget-chart-info-progress">
								<b>Mobile App Development</b>
								<span class="float-end">25%</span>
							</div>
							<div class="progress h-10px mb-15px">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-green" style="width: 25%"></div>
							</div>
							<div class="widget-chart-info-progress">
								<b>Website Redesign</b>
								<span class="float-end">95%</span>
							</div>
							<div class="progress h-10px">
								<div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-orange" style="width: 95%"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- END widget-content -->
			</div>
			<!-- END widget-chart -->
		
			<div class="mb-10px mt-10px fs-10px">
				<a href="#modal-widget-table" class="float-end text-body text-opacity-50 text-decoration-none me-3px fw-bold" data-bs-toggle="modal">source code</a>
				<b class="text-body">WIDGET TABLE</b>
			</div>
			<!-- BEGIN widget-table -->
			<div class="table-responsive">
				<!-- BEGIN widget-table -->
				<table class="table table-bordered widget-table rounded" :data-bs-theme="darkMode ? 'dark' : ''">
					<thead>
						<tr class="text-nowrap">
							<th width="1%">Image</th>
							<th>Product Info</th>
							<th>Price</th>
							<th>Qty</th>
							<th>Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src="/assets/img/product/product-6.png" width="100" />
							</td>
							<td>
								<h5 class="mb-1">Mavic Pro Combo</h5>
								<p class="fs-11px fw-bold text-body text-opacity-50 mb-3">Portable yet powerful, the Mavic Pro is your personal drone, ready to go with you everywhere.</p>
								<div class="progress h-10px rounded-pill mb-5px">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-orange fs-10px fw-bold" style="width: 30%;">30%</div>
								</div>
								<div class="clearfix fs-10px">
									status: 
									<b class="text-body">Shipped</b>
								</div>
							</td>
							<td class="text-nowrap">
								<b class="text-body">$999</b><br />
								<small><del>$1,202</del></small>
							</td>
							<td>1</td>
							<td>999.00</td>
							<td>
								<a href="#" class="btn btn-default btn-sm w-80px rounded-pill">Edit</a>
							</td>
						</tr>
						<tr>
							<td>
								<img src="/assets/img/product/product-7.png" width="100" />
							</td>
							<td>
								<h5 class="mb-1">Inspire 2</h5>
								<p class="fs-11px fw-bold text-body text-opacity-50 mb-3">Cinematic aerial performance for filmmakers.</p>
								<div class="progress h-10px rounded-pill mb-5px">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-success fs-10px fw-bold" style="width: 100%;">100%</div>
								</div>
								<div class="clearfix fs-10px">
									status: 
									<b class="text-body">received</b>
								</div>
							</td>
							<td class="text-nowrap">
								<b class="text-body">$999</b><br />
								<small><del>$1,202</del></small>
							</td>
							<td>1</td>
							<td>999.00</td>
							<td>
								<a href="#" class="btn btn-default btn-sm w-80px rounded-pill">Edit</a>
							</td>
						</tr>
					</tbody>
				</table>
				<!-- END widget-table -->
			</div>
			<!-- END table-responsive -->
		</div>
		<!-- END col-8 -->
	</div>
	<!-- END row -->

	<!-- BEGIN #modal-widget-list -->
	<div class="modal fade" id="modal-widget-list">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code1" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-list -->
	
	<!-- BEGIN #modal-widget-list-with-icon -->
	<div class="modal fade" id="modal-widget-list-with-icon">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List with Icon</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code2" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-list -->
	
	<!-- BEGIN #modal-widget-chat-input -->
	<div class="modal fade" id="modal-widget-chat-input">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Chat & Input</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code3" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-chat-input -->
	
	<!-- BEGIN #modal-widget-todolist -->
	<div class="modal fade" id="modal-widget-todolist">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Todolist</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code4" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-todolist -->
	
	<!-- BEGIN #modal-widget-map -->
	<div class="modal fade" id="modal-widget-map">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Map</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code5" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-map -->
	
	<!-- BEGIN #modal-widget-img-icon -->
	<div class="modal fade" id="modal-widget-img-icon">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Image / Icon</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code6" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-img-icon -->
	
	<!-- BEGIN #modal-widget-card -->
	<div class="modal fade" id="modal-widget-card">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List Card</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code7" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-card -->
	
	<!-- BEGIN #modal-widget-card-square -->
	<div class="modal fade" id="modal-widget-card-square">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget List Card Square</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code8" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-card-square -->
	
	<!-- BEGIN #modal-widget-stat -->
	<div class="modal fade" id="modal-widget-stat">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Stat</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code9" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-stat -->
	
	<!-- BEGIN #modal-widget-chart -->
	<div class="modal fade" id="modal-widget-chart">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Chart</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code10" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-chart -->
	
	<!-- BEGIN #modal-widget-table -->
	<div class="modal fade" id="modal-widget-table">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Widget Table</h4>
					<a href="#" data-bs-dismiss="modal" class="btn-close"></a>
				</div>
				<!-- BEGIN hljs-wrapper -->
				<highlightjs :code="code11" class="mb-0" />
				<!-- END hljs-wrapper -->
				<div class="modal-footer">
					<a href="#" data-bs-dismiss="modal" class="btn btn-default">Close</a>
				</div>
			</div>
		</div>
	</div>
	<!-- END #modal-widget-table -->
</template>