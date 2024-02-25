<script>
import { useAppOptionStore } from '@/stores/app-option';
import { useAppVariableStore } from '@/stores/app-variable';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/css/jsvectormap.min.css';

const appOption = useAppOptionStore();
const appVariable = useAppVariableStore();

export default {
	data() {
		appOption.appContentFullHeight = true;
		appOption.appContentClass = 'p-0 position-relative';
	},
	mounted() {
		this.renderMap();
	},
	beforeRouteLeave (to, from, next) {
		appOption.appContentFullHeight = false;
		appOption.appContentClass = '';
		next();
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
	}
}
</script>
<template>
	<div class="position-absolute w-100 h-100 top-0 start-0 bottom-0 end-0 bg-gray-900">
		<div id="map-container" class="w-100 h-100"></div>
	</div>

	<div class="app-content-padding position-relative">
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;" class="text-white">Home</a></li>
			<li class="breadcrumb-item active text-gray-500">Map</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header text-white">Map <small class="text-white text-opacity-50">header small text goes here...</small></h1>
		<!-- END page-header -->
	</div>
		
	<div class="position-absolute end-0 bottom-0 d-none d-xl-block p-3 m-3 bg-gray-800 rounded-3 shadow-lg w-300px">
		<h4 class="text-white"><i class="fa fa-globe-africa opacity-3 me-1"></i> Vector Map</h4>
		<!-- BEGIN scrollbar -->
		<perfect-scrollbar class="h-400px mx-n3">
			<table class="table table-dark table-panel mb-0">
				<thead>
					<tr>
						<th>Country</th>
						<th>Total Visitors</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Vatican City</td>
						<td><span class="text-success">9,820 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Monaco</td>
						<td>1,920</td>
					</tr>
					<tr>
						<td>Nauru</td>
						<td><span class="text-danger">1,346 <i class="fa fa-arrow-down"></i></span></td>
					</tr>
					<tr>
						<td>Tuvalu</td>
						<td><span class="text-success">6,543 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>San Marino</td>
						<td><span class="text-success">7,321 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Liechtenstein</td>
						<td>3,434</td>
					</tr>
					<tr>
						<td>Marshall Islands</td>
						<td>1,922</td>
					</tr>
					<tr>
						<td>Saint Kitts and Nevis</td>
						<td><span class="text-danger">9,812 <i class="fa fa-arrow-down"></i></span></td>
					</tr>
					<tr>
						<td>Maldives</td>
						<td><span class="text-danger">4,182 <i class="fa fa-arrow-down"></i></span></td>
					</tr>
					<tr>
						<td>Malta</td>
						<td>9,188</td>
					</tr>
					<tr>
						<td>Grenada</td>
						<td>11,198</td>
					</tr>
					<tr>
						<td>Saint Vincent</td>
						<td><span class="text-success">9,101 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Barbados</td>
						<td><span class="text-success">9,192 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Antigua and Barbuda</td>
						<td><span class="text-success">5,282 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Seychelles</td>
						<td><span class="text-success">8,283 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Palau</td>
						<td><span class="text-danger">1,222 <i class="fa fa-arrow-down"></i></span></td>
					</tr>
					<tr>
						<td>Andorra</td>
						<td>146</td>
					</tr>
					<tr>
						<td>Saint Lucia</td>
						<td>3,923</td>
					</tr>
					<tr>
						<td>Federated States</td>
						<td>9,827</td>
					</tr>
					<tr>
						<td>Singapore</td>
						<td>7,293</td>
					</tr>
					<tr>
						<td>Kiribati</td>
						<td>9,238</td>
					</tr>
					<tr>
						<td>Tonga</td>
						<td>6,422</td>
					</tr>
					<tr>
						<td>Dominica</td>
						<td><span class="text-success">3,341 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Mauritius</td>
						<td><span class="text-success">532 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>Bahrain</td>
						<td><span class="text-success">8,754 <i class="fa fa-arrow-up"></i></span></td>
					</tr>
					<tr>
						<td>São Tomé and Príncipe</td>
						<td>5,742</td>
					</tr>
				</tbody>
			</table>
		</perfect-scrollbar>
		<!-- END scrollbar -->
	</div>
</template>