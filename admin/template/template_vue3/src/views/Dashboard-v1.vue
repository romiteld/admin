<script>
import chartjs from '@/components/plugins/Chartjs.vue';
import apexchart from '@/components/plugins/Apexcharts.vue';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/css/jsvectormap.min.css';
import { useAppVariableStore } from '@/stores/app-variable';

const appVariable = useAppVariableStore();

export default {
	components: {
		chartjs: chartjs,
		apexchart: apexchart
	},
	data() {
		return {
			renderComponent: true,
			lineChart: this.getLineChartData(),
			doughnutChart: this.getDoughnutChartData(),
			date: new Date(),
			sparkline1: {
				series: [{
					name: 'Unique Visitor', 
					data: [50,30,45,40,50,20,35,40,50,70,90,40]
				}],
				options: {
					chart: { sparkline: { enabled: true } },
					stroke: { width: 2 },
					colors: [appVariable.color.red],
				},
				height: 25
      },
			sparkline2: {
				series: [{
					name: 'Bounce Rate', 
					data: [50,30,45,40,50,20,35,40,50,70,90,40]
				}],
				options: {
					chart: { sparkline: { enabled: true } },
					stroke: { width: 2 },
					colors: [appVariable.color.orange],
				},
				height: 25
      },
			sparkline3: {
				series: [{
					name: 'Total Page Views', 
					data: [50,30,45,40,50,20,35,40,50,70,90,40]
				}],
				options: {
					chart: { sparkline: { enabled: true } },
					stroke: { width: 2 },
					colors: [appVariable.color.teal],
				},
				height: 25
      },
			sparkline4: {
				series: [{
					name: 'Avg Time On Site', 
					data: [50,30,45,40,50,20,35,40,50,70,90,40]
				}],
				options: {
					chart: { sparkline: { enabled: true } },
					stroke: { width: 2 },
					colors: [appVariable.color.blue],
				},
				height: 25
      },
			sparkline5: {
				series: [{
					name: '% New Visits', 
					data: [50,30,45,40,50,20,35,40,50,70,90,40]
				}],
				options: {
					chart: { sparkline: { enabled: true } },
					stroke: { width: 2 },
					colors: [appVariable.color.gray300],
				},
				height: 25
      },
			sparkline6: {
				series: [{
					name: 'Return Visitor', 
					data: [50,30,45,40,50,20,35,40,50,70,90,40]
				}],
				options: {
					chart: { sparkline: { enabled: true } },
					stroke: { width: 2 },
					colors: [appVariable.color.dark],
				},
				height: 25
      }
		}
	},
	methods: {
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
		},
		getLineChartData() {
			return {
				type: 'line',
				data: {
					labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
					datasets: [{
						label: 'Page Views',
						backgroundColor: 'rgba(52, 143, 226, 0.2)',
						borderColor: appVariable.color.blue,
						pointBackgroundColor: appVariable.color.componentBg,
						pointRadius: 4,
						borderWidth: 2,
						data: [45, 60, 48, 55, 49, 58, 50, 45, 52, 39, 43, 67]
					}, {
						label: 'Visitors',
						backgroundColor: 'rgba(45, 53, 60, 0.2)',
						borderColor: appVariable.color.componentColor,
						pointBackgroundColor: appVariable.color.componentBg,
						pointRadius: 4,
						borderWidth: 2,
						data: [22, 18, 20, 18, 20, 23, 20, 18, 22, 18, 20, 23]
					}]
				},
				options: {
					responsive: true, 
					maintainAspectRatio: false,
					hover: {
						mode: 'nearest',
						intersect: true
					},
					tooltips: {
						mode: 'index',
						intersect: false,
					},
					scales: {
						x: {
							grid: {
								color: 'rgba('+ appVariable.color.componentColorRgb + ', .15)',
							}
						},
						y: {
							grid: {
								color: 'rgba('+ appVariable.color.componentColorRgb + ', .15)',
							}
						}
					},
					borderColor: appVariable.color.componentBg
				}
			}
		},
		getDoughnutChartData() {
			return {
				type: 'doughnut',
				data: {
					labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE'],
					datasets: [{
						backgroundColor: ['#5b6392', '#727cb6', '#8e96c5', '#348fe2', '#2a72b5'],
						data: [35, 30, 15, 10, 5],
						label: 'My dataset'
					}]
				},
				options: {
					responsive: true, 
					maintainAspectRatio: false,
					cutoutPercentage: 70,
					borderColor: appVariable.color.componentBg
				}
			}
		}
	},
	mounted() {
		this.renderMap();
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
	}
}
</script>

<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item active">Dashboard</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Dashboard <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		
		<!-- BEGIN row -->
		<div class="row" v-if="renderComponent">
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-blue">
					<div class="stats-icon"><i class="fa fa-desktop"></i></div>
					<div class="stats-info">
						<h4>TOTAL VISITORS</h4>
						<p>3,291,922</p>	
					</div>
					<div class="stats-link">
						<a href="javascript:;">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- END col-3 -->
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-info">
					<div class="stats-icon"><i class="fa fa-link"></i></div>
					<div class="stats-info">
						<h4>BOUNCE RATE</h4>
						<p>20.44%</p>	
					</div>
					<div class="stats-link">
						<a href="javascript:;">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- END col-3 -->
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-orange">
					<div class="stats-icon"><i class="fa fa-users"></i></div>
					<div class="stats-info">
						<h4>UNIQUE VISITORS</h4>
						<p>1,291,922</p>	
					</div>
					<div class="stats-link">
						<a href="javascript:;">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- END col-3 -->
			<!-- BEGIN col-3 -->
			<div class="col-xl-3 col-md-6">
				<div class="widget widget-stats bg-red">
					<div class="stats-icon"><i class="fa fa-clock"></i></div>
					<div class="stats-info">
						<h4>AVG TIME ON SITE</h4>
						<p>00:12:23</p>	
					</div>
					<div class="stats-link">
						<a href="javascript:;">View Detail <i class="fa fa-arrow-alt-circle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- END col-3 -->
		</div>
		<!-- END row -->
		
		<!-- BEGIN row -->
		<div class="row" v-if="renderComponent">
			<!-- BEGIN col-8 -->
			<div class="col-xl-8">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Website Analytics (Last 7 Days)</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
					<chartjs :type="lineChart.type" :data="lineChart.data" :options="lineChart.options" class="h-250px" />
					</panel-body>
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN tabs -->
				<ul class="nav nav-tabs nav-tabs-inverse nav-justified" data-sortable-id="index-2">
					<li class="nav-item"><a href="#latest-post" data-bs-toggle="tab" class="nav-link active"><i class="fa fa-camera fa-lg me-5px"></i> <span class="d-none d-md-inline">Latest Post</span></a></li>
					<li class="nav-item"><a href="#purchase" data-bs-toggle="tab" class="nav-link"><i class="fa fa-archive fa-lg me-5px"></i> <span class="d-none d-md-inline">Purchase</span></a></li>
					<li class="nav-item"><a href="#email" data-bs-toggle="tab" class="nav-link"><i class="fa fa-envelope fa-lg me-5px"></i> <span class="d-none d-md-inline">Email</span></a></li>
				</ul>
				<div class="tab-content panel rounded-0 rounded-bottom mb-20px" data-sortable-id="index-3">
					<div class="tab-pane fade active show" id="latest-post">
						<perfect-scrollbar class="h-300px p-3">
							<div class="d-sm-flex">
								<a href="javascript:;" class="w-sm-200px">
									<img class="mw-100 rounded" src="/assets/img/gallery/gallery-1.jpg" alt="" />
								</a>
								<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
									<h5>Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at, ornare ac eros.</h5>
									Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.
								</div>
							</div>
							<hr class="bg-gray-500" />
							<div class="d-sm-flex">
								<a href="javascript:;" class="w-sm-200px">
									<img class="mw-100 rounded" src="/assets/img/gallery/gallery-10.jpg" alt="" />
								</a>
								<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
									<h5>Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.</h5>
									Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.
								</div>
							</div>
							<hr class="bg-gray-500" />
							<div class="d-sm-flex">
								<a href="javascript:;" class="w-sm-200px">
									<img class="mw-100 rounded" src="/assets/img/gallery/gallery-7.jpg" alt="" />
								</a>
								<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
									<h5>Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
									Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla. Morbi a porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
								</div>
							</div>
							<hr class="bg-gray-500" />
							<div class="d-sm-flex">
								<a href="javascript:;" class="w-sm-200px">
									<img class="mw-100 rounded" src="/assets/img/gallery/gallery-8.jpg" alt="" />
								</a>
								<div class="flex-1 ps-sm-3 pt-3 pt-sm-0">
									<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor accumsan rutrum.</h5>
									Fusce augue diam, vestibulum a mattis sit amet, vehicula eu ipsum. Vestibulum eu mi nec purus tempor consequat. Vestibulum porta non mi quis cursus. Fusce vulputate cursus magna, tincidunt sodales ipsum lobortis tincidunt. Mauris quis lorem ligula. Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.
								</div>
							</div>
						</perfect-scrollbar>
					</div>
					<div class="tab-pane fade" id="purchase">
						<perfect-scrollbar class="h-300px">
							<table class="table table-panel mb-0">
								<thead>
									<tr>
										<th>Date</th>
										<th class="hidden-sm text-center">Product</th>
										<th></th>
										<th>Amount</th>
										<th>User</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="fw-bold text-muted">13/02/2022</td>
										<td class="hidden-sm text-center">
											<a href="javascript:;">
												<img src="/assets/img/product/product-1.png" alt="" width="32"  />
											</a>
										</td>
										<td class="text-nowrap">
											<h6><a href="javascript:;" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
										</td>
										<td class="text-blue fw-bold">$349.00</td>
										<td class="text-nowrap"><a href="javascript:;" class="text-dark text-decoration-none">Derick Wong</a></td>
									</tr>
									<tr>
										<td class="fw-bold text-muted">13/02/2022</td>
										<td class="hidden-sm text-center">
											<a href="javascript:;">
												<img src="/assets/img/product/product-2.png" alt="" width="32" />
											</a>
										</td>
										<td class="text-nowrap">
											<h6><a href="javascript:;" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
										</td>
										<td class="text-blue fw-bold">$399.00</td>
										<td class="text-nowrap"><a href="javascript:;" class="text-dark text-decoration-none">Derick Wong</a></td>
									</tr>
									<tr>
										<td class="fw-bold text-muted">13/02/2022</td>
										<td class="hidden-sm text-center">
											<a href="javascript:;">
												<img src="/assets/img/product/product-3.png" alt="" width="32" />
											</a>
										</td>
										<td class="text-nowrap">
											<h6><a href="javascript:;" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
										</td>
										<td class="text-blue fw-bold">$499.00</td>
										<td class="text-nowrap"><a href="javascript:;" class="text-dark text-decoration-none">Derick Wong</a></td>
									</tr>
									<tr>
										<td class="fw-bold text-muted">13/02/2022</td>
										<td class="hidden-sm text-center">
											<a href="javascript:;">
												<img src="/assets/img/product/product-4.png" alt="" width="32" />
											</a>
										</td>
										<td class="text-nowrap">
											<h6><a href="javascript:;" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
										</td>
										<td class="text-blue fw-bold">$230.00</td>
										<td class="text-nowrap"><a href="javascript:;" class="text-dark text-decoration-none">Derick Wong</a></td>
									</tr>
									<tr>
										<td class="fw-bold text-muted">13/02/2022</td>
										<td class="hidden-sm text-center">
											<a href="javascript:;">
												<img src="/assets/img/product/product-5.png" alt="" width="32" />
											</a>
										</td>
										<td class="text-nowrap">
											<h6><a href="javascript:;" class="text-dark text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
										</td>
										<td class="text-blue fw-bold">$500.00</td>
										<td class="text-nowrap"><a href="javascript:;" class="text-dark text-decoration-none">Derick Wong</a></td>
									</tr>
								</tbody>
							</table>
						</perfect-scrollbar>
					</div>
					<div class="tab-pane fade" id="email">
						<perfect-scrollbar class="h-300px p-3">
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-1.jpg" alt="" class="mw-100 rounded-pill" />
								</a>
								<div class="flex-1 ps-3">
									<a href="javascript:;" class="text-dark text-decoration-none"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5></a>
									<p class="mb-5px">
										Aenean mollis arcu sed turpis accumsan dignissim. Etiam vel tortor at risus tristique convallis. Donec adipiscing euismod arcu id euismod. Suspendisse potenti. Aliquam lacinia sapien ac urna placerat, eu interdum mauris viverra.
									</p>
									<span class="text-muted fs-11px fw-bold">Received on 04/16/2022, 12.39pm</span>
								</div>
							</div>
							<hr class="bg-gray-500" />
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-2.jpg" alt="" class="mw-100 rounded-pill" />
								</a>
								<div class="flex-1 ps-3">
									<a href="javascript:;" class="text-dark text-decoration-none"><h5>Praesent et sem porta leo tempus tincidunt eleifend et arcu.</h5></a>
									<p class="mb-5px">
										Proin adipiscing dui nulla. Duis pharetra vel sem ac adipiscing. Vestibulum ut porta leo. Pellentesque orci neque, tempor ornare purus nec, fringilla venenatis elit. Duis at est non nisl dapibus lacinia.
									</p>
									<span class="text-muted fs-11px fw-bold">Received on 04/16/2022, 12.39pm</span>
								</div>
							</div>
							<hr class="bg-gray-500" />
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-3.jpg" alt="" class="mw-100 rounded-pill" />
								</a>
								<div class="flex-1 ps-3">
									<a href="javascript:;" class="text-dark text-decoration-none"><h5>Ut mi eros, varius nec mi vel, consectetur convallis diam.</h5></a>
									<p class="mb-5px">
										Ut mi eros, varius nec mi vel, consectetur convallis diam. Nullam eget hendrerit eros. Duis lacinia condimentum justo at ultrices. Phasellus sapien arcu, fringilla eu pulvinar id, mattis quis mauris.
									</p>
									<span class="text-muted fs-11px fw-bold">Received on 04/16/2022, 12.39pm</span>
								</div>
							</div>
							<hr class="bg-gray-500" />
							<div class="d-flex">
								<a class="w-60px" href="javascript:;">
									<img src="/assets/img/user/user-4.jpg" alt="" class="mw-100 rounded-pill" />
								</a>
								<div class="flex-1 ps-3">
									<a href="javascript:;" class="text-dark text-decoration-none"><h5>Aliquam nec dolor vel nisl dictum ullamcorper.</h5></a>
									<p class="mb-5px">
										Aliquam nec dolor vel nisl dictum ullamcorper. Duis vel magna enim. Aenean volutpat a dui vitae pulvinar. Nullam ligula mauris, dictum eu ullamcorper quis, lacinia nec mauris.
									</p>
									<span class="text-muted fs-11px fw-bold">Received on 04/16/2022, 12.39pm</span>
								</div>
							</div>
						</perfect-scrollbar>
					</div>
				</div>
				<!-- END tabs -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Quick Post</panel-title>
						<panel-toolbar />
					</panel-header>
					<div class="panel-toolbar">
						<div class="btn-group me-5px">
							<a class="btn btn-white" href="javascript:;"><i class="fa fa-bold"></i></a>
							<a class="btn btn-white active" href="javascript:;"><i class="fa fa-italic"></i></a>
							<a class="btn btn-white" href="javascript:;"><i class="fa fa-underline"></i></a>
						</div>
						<div class="btn-group">
							<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-left"></i></a>
							<a class="btn btn-white active" href="javascript:;"><i class="fa fa-align-center"></i></a>
							<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-right"></i></a>
							<a class="btn btn-white" href="javascript:;"><i class="fa fa-align-justify"></i></a>
						</div>
					</div>
					<hr class="m-0" />
					<textarea class="form-control rounded-0 border-0 shadow-none bg-light p-3" rows="14">Enter some comment.</textarea>
					<panel-footer class="text-end">
						<a href="javascript:;" class="btn btn-white btn-sm">Cancel</a>
						<a href="javascript:;" class="btn btn-primary btn-sm ms-5px">Action</a>
					</panel-footer>
				</panel>
				<!-- END panel -->
									
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Message</panel-title>
						<panel-toolbar />
					</panel-header>
					<perfect-scrollbar class="h-300px p-3">
						<div class="d-flex">
							<a href="javascript:;" class="w-60px">
								<img src="/assets/img/user/user-5.jpg" alt="" class="mw-100 rounded-pill" />
							</a>
							<div class="flex-1 ps-3">
								<h5>John Doe</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nunc non eros fermentum vestibulum ut id felis. Nunc molestie libero eget urna aliquet, vitae laoreet felis ultricies. Fusce sit amet massa malesuada, tincidunt augue vitae, gravida felis.</p>
							</div>
						</div>
						<hr class="bg-gray-500" />
						<div class="d-flex">
							<a href="javascript:;" class="w-60px">
								<img src="/assets/img/user/user-6.jpg" alt="" class="mw-100 rounded-pill" />
							</a>
							<div class="flex-1 ps-3">
								<h5>Terry Ng</h5>
								<p>Sed in ante vel ipsum tristique euismod posuere eget nulla. Quisque ante sem, scelerisque iaculis interdum quis, eleifend id mi. Fusce congue leo nec mauris malesuada, id scelerisque sapien ultricies.</p>
							</div>
						</div>
						<hr class="bg-gray-500" />
						<div class="d-flex">
							<a href="javascript:;" class="w-60px">
								<img src="/assets/img/user/user-8.jpg" alt="" class="mw-100 rounded-pill" />
							</a>
							<div class="flex-1 ps-3">
								<h5>Fiona Log</h5>
								<p>Pellentesque dictum in tortor ac blandit. Nulla rutrum eu leo vulputate ornare. Nulla a semper mi, ac lacinia sapien. Sed volutpat ornare eros, vel semper sem sagittis in. Quisque risus ipsum, iaculis quis cursus eu, tristique sed nulla.</p>
							</div>
						</div>
						<hr class="bg-gray-500" />
						<div class="d-flex">
							<a href="javascript:;" class="w-60px">
								<img src="/assets/img/user/user-7.jpg" alt="" class="mw-100 rounded-pill" />
							</a>
							<div class="flex-1 ps-3">
								<h5>John Doe</h5>
								<p>Morbi molestie lorem quis accumsan elementum. Morbi condimentum nisl iaculis, laoreet risus sed, porta neque. Proin mi leo, dapibus at ligula a, aliquam consectetur metus.</p>
							</div>
						</div>
					</perfect-scrollbar>
					<panel-footer>
						<form>
							<div class="input-group">
								<input type="text" class="form-control bg-light" placeholder="Enter message" />
								<button class="btn btn-primary" type="button"><i class="fa fa-pencil-alt"></i></button>
							</div>
						</form>
					</panel-footer>
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-8 -->
			<!-- BEGIN col-4 -->
			<div class="col-xl-4">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Analytics Details</panel-title>
						<panel-toolbar />
					</panel-header>
					<div class="table-responsive mb-0">
						<table class="table table-panel align-middle mb-0">
							<thead>
								<tr>	
									<th>Source</th>
									<th>Total</th>
									<th>Trend</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td nowrap><label class="badge bg-danger">Unique Visitor</label></td>
									<td>13,203 <span class="text-success"><i class="fa fa-arrow-up"></i></span></td>
									<td>
										<div class="w-100px my-n1">
											<apexchart :height="sparkline1.height" :options="sparkline1.options" :series="sparkline1.series"></apexchart>
										</div>
									</td>
								</tr>
								<tr>
									<td nowrap><label class="badge bg-warning">Bounce Rate</label></td>
									<td>28.2%</td>
									<td>
										<div class="w-100px my-n1">
											<apexchart :height="sparkline2.height" :options="sparkline2.options" :series="sparkline2.series"></apexchart>
										</div>
									</td>
								</tr>
								<tr>
									<td nowrap><label class="badge bg-success">Total Page Views</label></td>
									<td>1,230,030</td>
									<td>
										<div class="w-100px my-n1">
											<apexchart :height="sparkline3.height" :options="sparkline3.options" :series="sparkline3.series"></apexchart>
										</div>
									</td>
								</tr>
								<tr>
									<td nowrap><label class="badge bg-blue">Avg Time On Site</label></td>
									<td>00:03:45</td>
									<td>
										<div class="w-100px my-n1">
											<apexchart :height="sparkline4.height" :options="sparkline4.options" :series="sparkline4.series"></apexchart>
										</div>
									</td>
								</tr>
								<tr>
									<td nowrap><label class="badge bg-default text-gray-900">% New Visits</label></td>
									<td>40.5%</td>
									<td>
										<div class="w-100px my-n1">
											<apexchart :height="sparkline5.height" :options="sparkline5.options" :series="sparkline5.series"></apexchart>
										</div>
									</td>
								</tr>
								<tr>
									<td nowrap><label class="badge bg-inverse">Return Visitors</label></td>
									<td>73.4%</td>
									<td>
										<div class="w-100px my-n1">
											<apexchart :height="sparkline6.height" :options="sparkline6.options" :series="sparkline6.series"></apexchart>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Visitors User Agent</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<chartjs :type="doughnutChart.type" :data="doughnutChart.data" :options="doughnutChart.options" class="h-300px" />
					</panel-body>
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Todo List</panel-title>
						<panel-toolbar />
					</panel-header>
					<div class="todolist">
						<div class="todolist-item active">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist1" data-change="todolist" checked />
								</div>
							</div>
							<label class="todolist-label" for="todolist1">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</label>
						</div>
						<div class="todolist-item">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist2" data-change="todolist" />
								</div>
							</div>
							<label class="todolist-label" for="todolist2">Duis a ullamcorper massa.</label>
						</div>
						<div class="todolist-item">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist3" data-change="todolist" />
								</div>
							</div>
							<label class="todolist-label" for="todolist3">Phasellus bibendum, odio nec vestibulum ullamcorper.</label>
						</div>
						<div class="todolist-item">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist4" data-change="todolist" />
								</div>
							</div>
							<label class="todolist-label" for="todolist4">Duis pharetra mi sit amet dictum congue.</label>
						</div>
						<div class="todolist-item">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist5" data-change="todolist" />
								</div>
							</div>
							<label class="todolist-label" for="todolist5">Duis pharetra mi sit amet dictum congue.</label>
						</div>
						<div class="todolist-item">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist6" data-change="todolist" />
								</div>
							</div>
							<label class="todolist-label" for="todolist6">Phasellus bibendum, odio nec vestibulum ullamcorper.</label>
						</div>
						<div class="todolist-item">
							<div class="todolist-input">
								<div class="form-check">
									<input type="checkbox" class="form-check-input" id="todolist7" data-change="todolist" />
								</div>
							</div>
							<label class="todolist-label" for="todolist7">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</label>
						</div>
					</div>
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>World Visitors</panel-title>
						<panel-toolbar />
					</panel-header>
					<div id="map-container" class="bg-dark h-300px"></div>
				</panel>
				<!-- END panel -->
				
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Calendar</panel-title>
						<panel-toolbar />
					</panel-header>
					<v-date-picker class="w-100 border-0 bg-none" v-model="date" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-4 -->
		</div>
		<!-- END row -->
	</div>
</template>