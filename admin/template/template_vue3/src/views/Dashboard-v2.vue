<script>
import { useAppVariableStore } from '@/stores/app-variable';
import apexchart from '@/components/plugins/Apexcharts.vue';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/css/jsvectormap.min.css';

const appVariable = useAppVariableStore();

export default {
	name: 'dashboard-v2',
	components: {
		apexchart: apexchart
	},
	data() {
		return {
			visitor: this.getVisitorData(),
			date: new Date()
		}
	},
	methods: {
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
						colors: [appVariable.color.teal, appVariable.color.blue],
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
								colors: appVariable.color.white
							}
						},
						xaxis: {
							type: 'datetime',
							tickAmount: 6,
							labels: {
								style: {
									colors: appVariable.color.white
								}
							}
						},
						yaxis: {
							labels: {
								style: {
									colors: appVariable.color.white
								}
							}
						},
						tooltip: { y: { formatter: function (val) { return "$ " + val + " thousands" } } },
						chart: { height: '100%', type: 'area', toolbar: { show: false }, stacked: true },
						plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
						dataLabels: { enabled: false },
						grid: { 
							show: true, borderColor: 'rgba('+ appVariable.color.whiteRgb +', .15)',
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
				},
				pieChart: {
					height: 180,
					series: [416747,784466],
					options: {
						labels: ['New Visitors', 'Return Visitors'],
						chart: { type: 'donut' },
						dataLabels: { dropShadow: { enabled: false }, style: { colors: ['#fff'] } },
						stroke: { show: false },
						colors: [ appVariable.color.blue, appVariable.color.teal ],
						legend: { show: false }
					}
				}
			};
		},
		renderMap() {
			document.getElementById('map-container').innerHTML = '<div id="map"></div>';
			var map = new jsVectorMap({
				selector: '#map',
				map: 'world',
				zoomButtons: false,
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.5,
				hoverColor: false,
				zoomOnScroll: false,
				selectedRegions: ['IN', 'US', 'MN', 'RU'],
				series: { regions: [{ normalizeFunction: 'polynomial' }] },
				labels: { markers: { render: (marker) => marker.name } },
				focusOn: { x: 0.5, y: 0.5, scale: 1 },
				markerStyle: { initial: { fill: appVariable.color.theme, stroke: 'none', r: 5 }, hover: { fill: appVariable.color.theme } },
				markerLabelStyle: { initial: { fontFamily: appVariable.font.family, fontSize: '12px', fill: 'rgba('+ appVariable.color.whiteRgb + ', .75)' } },
				regionStyle: { 
					initial: { fill: appVariable.color.gray700, fillOpacity: 4, stroke: 'none', strokeWidth: 0.4, strokeOpacity: 1 }, 
					hover: { fillOpacity: 0.5 },
					selected: { fill: appVariable.color.teal, fillOpacity: 1 }
				},
				backgroundColor: 'transparent',
			});
		}
	},
	mounted() {
		this.renderMap();
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
			<li class="breadcrumb-item active">Dashboard v2</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Dashboard v2 <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-teal">
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
			<!-- END col-3 -->
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-blue">
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
			<!-- END col-3 -->
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-indigo">
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
			<!-- END col-3 -->
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-dark">
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
			<!-- END col-3 -->
		</div>
		<!-- END row -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-8 -->
			<div class="col-xl-8">
				<div class="widget-chart with-sidebar inverse-mode">
					<div class="widget-chart-content bg-gray-800">
						<h4 class="chart-title">
							Visitors Analytics
							<small>Where do our visitors come from</small>
						</h4>
						<div class="widget-chart-full-width dark-mode overflow-hidden" style="height: 260px;">
							<apexchart type="bar" width="100%" height="260" :options="visitor.chart.options" :series="visitor.chart.series"></apexchart>
						</div>
					</div>
					<div class="widget-chart-sidebar bg-gray-900">
						<div class="chart-number">
							1,225,729
							<small>Total visitors</small>
						</div>
						<div class="flex-grow-1 d-flex align-items-center">
							<div class="nvd3-inverse-mode" style="height: 180px;">
								<apexchart :height="visitor.pieChart.height" :options="visitor.pieChart.options" :series="visitor.pieChart.series"></apexchart>
							</div>
						</div>
						<ul class="chart-legend fs-11px">
							<li><i class="fa fa-circle fa-fw text-blue fs-9px me-5px t-minus-1"></i> 34.0% <span>New Visitors</span></li>
							<li><i class="fa fa-circle fa-fw text-teal fs-9px me-5px t-minus-1"></i> 56.0% <span>Return Visitors</span></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- END col-8 -->
			<!-- BEGIN col-4 -->
			<div class="col-xl-4">
				<panel>
					<panel-header>
						<panel-title>Visitors Origin</panel-title>
					</panel-header>
					<div id="map-container" class="bg-gray-900" data-bs-theme="dark" style="height: 170px">
					
					</div>
					<div class="list-group list-group-flush "  data-bs-theme="dark">
						<a href="javascript:;" class="list-group-item list-group-item-action d-flex">
							<span class="flex-1">1. United State</span>
							<span class="badge bg-teal fs-10px">20.95%</span>
						</a>
						<a href="javascript:;" class="list-group-item list-group-item-action d-flex">
							<span class="flex-1">2. India</span>
							<span class="badge bg-blue fs-10px">16.12%</span>
						</a>
						<a href="javascript:;" class="list-group-item list-group-item-action d-flex rounded-bottom">
							<span class="flex-1">3. Mongolia</span>
							<span class="badge bg-gray-600 fs-10px">14.99%</span>
						</a>
					</div>
				</panel>
			</div>
			<!-- END col-4 -->
		</div>
		<!-- END row -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- BEGIN panel -->
				<panel class="bg-light">
					<panel-header>
						<panel-title>Chat History</panel-title>
						<span class="badge bg-teal">4 message</span>
					</panel-header>
					<perfect-scrollbar class="chats" style="height: 225px">
						<div class="chats-item start">
							<span class="date-time">yesterday 11:23pm</span>
							<a href="javascript:;" class="name">Sowse Bawdy</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-12.jpg" /></a>
							<div class="message">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.
							</div>
						</div>
						<div class="chats-item end">
							<span class="date-time">08:12am</span>
							<a href="javascript:;" class="name"><span class="badge bg-blue">ADMIN</span> Me</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-13.jpg" /></a>
							<div class="message">
								Nullam posuere, nisl a varius rhoncus, risus tellus hendrerit neque.
							</div>
						</div>
						<div class="chats-item start">
							<span class="date-time">09:20am</span>
							<a href="javascript:;" class="name">Neck Jolly</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-10.jpg" /></a>
							<div class="message">
								Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</div>
						</div>
						<div class="chats-item start">
							<span class="date-time">11:15am</span>
							<a href="javascript:;" class="name">Shag Strap</a>
							<a href="javascript:;" class="image"><img alt="" src="/assets/img/user/user-14.jpg" /></a>
							<div class="message">
								Nullam iaculis pharetra pharetra. Proin sodales tristique sapien mattis placerat.
							</div>
						</div>
					</perfect-scrollbar>
					<panel-footer>
						<form name="send_message_form" data-id="message-form">
							<div class="input-group">
								<input type="text" class="form-control" name="message" placeholder="Enter your message here.">
								<button class="btn btn-primary" type="button"><i class="fa fa-camera"></i></button>
								<button class="btn btn-primary" type="button"><i class="fa fa-link"></i></button>
							</div>
						</form>
					</panel-footer>
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-4 -->
			<!-- BEGIN col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- BEGIN panel -->
				<panel class="rounded overflow-hidden">
					<panel-header>
						<panel-title>Today's Schedule</panel-title>
					</panel-header>
					<v-date-picker class="w-100 border-0 bg-none" v-model="date" />
					<hr class="m-0 bg-gray-500" />
					<div class="list-group list-group-flush">
						<a href="javascript:;" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
							Sales Reporting
							<span class="badge fs-10px bg-teal">9:00am</span>
						</a>
						<a href="javascript:;" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-ellipsis">
							Have a meeting with sales team
							<span class="badge fs-10px bg-blue">2:45pm</span>
						</a>
					</div>
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-4 -->
			<!-- BEGIN col-4 -->
			<div class="col-xl-4 col-lg-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>New Registered Users</panel-title>
						<span class="badge bg-teal">24 new users</span>
					</panel-header>
					<ul class="registered-users-list">
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-5.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Savory Posh
								<small>Algerian</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-3.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Ancient Caviar
								<small>Korean</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-1.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Marble Lungs
								<small>Indian</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-8.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Blank Bloke
								<small>Japanese</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-2.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Hip Sculling
								<small>Cuban</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-6.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Flat Moon
								<small>Nepalese</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-4.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Packed Puffs
								<small>Malaysian</small>
							</h4>
						</li>
						<li>
							<a href="javascript:;"><img src="/assets/img/user/user-9.jpg" alt="" /></a>
							<h4 class="username text-ellipsis">
								Clay Hike
								<small>Swedish</small>
							</h4>
						</li>
					</ul>
					<panel-footer class="text-center">
						<a href="javascript:;" class="text-decoration-none text-inverse">View All</a>
					</panel-footer>
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-4 -->
		</div>
		<!-- END row -->
	</div>
</template>