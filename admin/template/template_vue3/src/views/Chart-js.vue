<script>
import highlightjs from '@/components/plugins/Highlightjs.vue';
import chartjs from '@/components/plugins/Chartjs.vue';
import axios from 'axios';
import { useAppVariableStore } from '@/stores/app-variable';
import { ScrollSpy } from 'bootstrap';

const appVariable = useAppVariableStore();

export default {
	methods: {
		getChart1Data() {
			return {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [{
					color: appVariable.color.blue,
					backgroundColor: 'rgba('+ appVariable.color.blueRgb +', .2)',
					borderColor: appVariable.color.blue,
					borderWidth: 1.5,
					pointBackgroundColor: appVariable.color.blue,
					pointBorderWidth: 1.5,
					pointRadius: 4,
					pointHoverBackgroundColor: appVariable.color.blue,
					pointHoverBorderColor: appVariable.color.blue,
					pointHoverRadius: 7,
					label: 'Total Sales',
					data: [12, 19, 4, 5, 2, 3]
				}]
			};
		},
		getChart2Data() {
			return {
				labels: ['Jan','Feb','Mar','Apr','May','Jun'],
				datasets: [{
					label: 'Total Visitors',
					data: [37,31,36,34,43,31],
					backgroundColor: 'rgba('+ appVariable.color.blueRgb +', .5)',
					borderColor: appVariable.color.blue,
					borderWidth: 1.5
				},{
					label: 'New Visitors',
					data: [12,16,20,14,23,21],
					backgroundColor: 'rgba('+ appVariable.color.componentColorRgb +', .2)' +', .5)',
					borderColor: 'rgba('+ appVariable.color.componentColorRgb +', .65)',
					borderWidth: 1.5
				}]
			};
		},
		getChart3Data() {
			return {
				labels: ['United States', 'Canada', 'Australia', 'Netherlands', 'Germany', 'New Zealand', 'Singapore'],
				datasets: [
					{
						label: 'Mobile',
						backgroundColor: 'rgba('+ appVariable.color.blueRgb +', .2)',
						borderColor: appVariable.color.blue,
						pointBackgroundColor: appVariable.color.blue,
						pointBorderColor: appVariable.color.blue,
						pointHoverBackgroundColor: appVariable.color.blue,
						pointHoverBorderColor: appVariable.color.blue,
						data: [65, 59, 90, 81, 56, 55, 40],
						borderWidth: 1.5
					},
					{
						label: 'Desktop',
						backgroundColor: 'rgba('+ appVariable.color.gray500Rgb +', .2)',
						borderColor: appVariable.color.gray500,
						pointBackgroundColor: appVariable.color.gray500,
						pointBorderColor: appVariable.color.gray500,
						pointHoverBackgroundColor: appVariable.color.gray500,
						pointHoverBorderColor: appVariable.color.gray500,
						data: [28, 48, 40, 19, 96, 27, 100],
						borderWidth: 1.5
					}
				]
			};
		},
		getChart4Data() {
			return {
				datasets: [{
					data: [11, 16, 7, 3, 14],
					backgroundColor: ['rgba('+ appVariable.color.blueRgb +', .5)', 'rgba('+ appVariable.color.gray100Rgb +', .2)' +', .5)', 'rgba('+ appVariable.color.gray300Rgb +', .5)', 'rgba('+ appVariable.color.gray500Rgb +', .5)', 'rgba('+ appVariable.color.gray800Rgb +', .5)'],
					borderWidth: 0
				}],
				labels: ['IE', 'Safari', 'Chrome', 'Firefox', 'Opera']
			};
		},
		getChart5Data() {
			return {
				labels: ['Total Visitor', 'New Visitor', 'Returning Visitor'],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: ['rgba('+ appVariable.color.blueRgb +', .5)', 'rgba('+ appVariable.color.gray500Rgb +', .2)' +', .5)', 'rgba('+ appVariable.color.blueRgb +', .5)'],
					hoverBackgroundColor: ['rgba('+ appVariable.color.blueRgb +', 1)', 'rgba('+ appVariable.color.gray500Rgb +', 1)', 'rgba('+ appVariable.color.gray900Rgb +', 1)'],
					borderWidth: 0
				}]
			};
		},
		getChart6Data() {
			return {
				labels: ['Total Visitor', 'New Visitor', 'Returning Visitor'],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: ['rgba('+ appVariable.color.blueRgb +', .5)', 'rgba('+ appVariable.color.gray500Rgb +', .2)' +', .5)', 'rgba('+ appVariable.color.blueRgb +', .5)'],
					hoverBackgroundColor: [appVariable.color.blue, appVariable.color.gray500, appVariable.color.gray900],
					borderWidth: 0
				}]
			};
		}
	},
	data () {
		return {
			renderComponent: true,
			code1: '',
			code2: '',
			code3: '',
			code4: '',
			code5: '',
			code6: '',
			chart1: {
				type: 'line',
				data: this.getChart1Data(),
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			},
			chart2: {
				type: 'bar',
				data: this.getChart2Data(),
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			},
			chart3: {
				type: 'radar',
				data: this.getChart3Data(),
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			},
			chart4: {
				type: 'polarArea',
				data: this.getChart4Data(),
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			},
			chart5: {
				type: 'pie',
				data: this.getChart5Data(),
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			},
			chart6: {
				type: 'doughnut',
				data: this.getChart6Data(),
				options: {
					responsive: true, 
					maintainAspectRatio: false
				}
			}
		}
	},
	components: {
		highlightjs: highlightjs,
		chartjs: chartjs
	},
	mounted() {
		axios.get('/assets/data/chart/chartjs-code-1.json').then((response) => {
			this.code1 = response.data;
		});
		axios.get('/assets/data/chart/chartjs-code-2.json').then((response) => {
			this.code2 = response.data;
		});
		axios.get('/assets/data/chart/chartjs-code-3.json').then((response) => {
			this.code3 = response.data;
		});
		axios.get('/assets/data/chart/chartjs-code-4.json').then((response) => {
			this.code4 = response.data;
		});
		axios.get('/assets/data/chart/chartjs-code-5.json').then((response) => {
			this.code5 = response.data;
		});
		axios.get('/assets/data/chart/chartjs-code-6.json').then((response) => {
			this.code6 = response.data;
		});
		
		new ScrollSpy(document.body, {
			target: '#sidebar-bootstrap',
			offset: 200
		})
	},
	created() {
		this.emitter.on('theme-reload', (evt) => {
			this.renderComponent = false;
			this.$nextTick(() => {
				this.chart1.data = this.getChart1Data();
				this.chart2.data = this.getChart2Data();
				this.chart3.data = this.getChart3Data();
				this.chart4.data = this.getChart4Data();
				this.chart5.data = this.getChart5Data();
				this.chart6.data = this.getChart6Data();
				this.renderComponent = true;
			});
    })
	}
}
</script>
<template>
	<div v-if="renderComponent">
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item"><a href="javascript:;">Chart</a></li>
			<li class="breadcrumb-item active">Chart JS</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Chart JS <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Line Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>
							A line chart is a way of plotting data points on a line.
							Often, it is used to show trend data, and the comparison of two data sets.
						</p>
						<chartjs :type="chart1.type" :data="chart1.data" />
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
						<panel-title>Bar Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>
							A bar chart is a way of showing data as bars.
							It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
						</p>
						<chartjs :type="chart2.type" :data="chart2.data" />
					</panel-body>
					<highlightjs :code="code2" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-xl-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Radar Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>
							A radar chart is a way of showing multiple data points and the variation between them.
							They are often useful for comparing the points of two or more different data sets.
						</p>
						<div class="w-300px h-300px mx-auto">
							<chartjs :type="chart3.type" :data="chart3.data" />
						</div>
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
						<panel-title>Polar Area Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>
							Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment 
							differs depending on the value.
						</p>
						<div class="w-300px h-300px mx-auto">
							<chartjs :type="chart4.type" :data="chart4.data" />
						</div>
					</panel-body>
					<highlightjs :code="code4" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN col-6 -->
			<div class="col-md-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Pie Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>
							Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
						</p>
						<div class="w-300px h-300px mx-auto">
							<chartjs :type="chart5.type" :data="chart5.data" />
						</div>
					</panel-body>
					<highlightjs :code="code5" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
			<!-- BEGIN col-6 -->
			<div class="col-md-6">
				<!-- BEGIN panel -->
				<panel>
					<panel-header>
						<panel-title>Doughnut Chart</panel-title>
						<panel-toolbar />
					</panel-header>
					<panel-body>
						<p>
							Pie and doughnut charts are registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.
						</p>
						<div class="w-300px h-300px mx-auto">
							<chartjs :type="chart6.type" :data="chart6.data" />
						</div>
					</panel-body>
					<highlightjs :code="code6" />
				</panel>
				<!-- END panel -->
			</div>
			<!-- END col-6 -->
		</div>
		<!-- END row -->
	</div>
</template>