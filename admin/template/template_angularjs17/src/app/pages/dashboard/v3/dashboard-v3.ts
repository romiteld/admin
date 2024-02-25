import { Component, OnInit, ViewChild } from '@angular/core';
import { AppVariablesService } from '../../../service/app-variables.service';
import * as moment from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from 'ngx-daterangepicker-material';

@Component({
  selector: 'dashboard-v3',
  templateUrl: './dashboard-v3.html'
})

export class DashboardV3Page implements OnInit {
  appVariables = this.appVariablesService.getAppVariables();
  
  lat: number = 25.304304;
  lng: number = -90.06591800000001;
  mapStyles = [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}];

  /* Daterangepicker */
  selected: {startDate: moment.Moment, endDate: moment.Moment};
  @ViewChild(DaterangepickerDirective, {static: true}) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  prevDate: any = moment().subtract('days', 15).format('D MMMM') + ' - ' + moment().subtract('days', 8).format('D MMMM YYYY');
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment()
        .subtract(1, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ]
  };
  locale: any = {
    format: 'D MMMM YYYY',
    displayFormat: 'D MMMM YYYY',
    separator: ' - ',
    cancelLabel: 'Cancel',
    applyLabel: 'Apply'
  };
  visitorChart: any;
  salesChart: any;
  conversionChart: any;
  sessionChart: any;
  
  constructor(private appVariablesService: AppVariablesService) {
		this.appVariablesService.variablesReload.subscribe(() => {
			this.appVariables = this.appVariablesService.getAppVariables();
		});
    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {
      startDate: moment().subtract('days', 7),
      endDate: moment()
    };
  }
  
	convertNumberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
  
	handleGetDate(minusDate) {
		var d = new Date();
		var a = d.setDate(d.getDate() - minusDate);
		return a;
	}

  ngOnInit() {
    this.picker = this.pickerDirective.picker;
    this.visitorChart = {
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
			colors: [this.appVariables.color.teal, this.appVariables.color.primary],
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
					colors: this.appVariables.color.white
				}
			},
			xaxis: {
				type: 'datetime',
				tickAmount: 6,
				labels: {
					style: {
						colors: this.appVariables.color.white
					}
				}
			},
			yaxis: {
				labels: {
					style: {
						colors: this.appVariables.color.white
					}
				}
			},
			tooltip: { y: { formatter: function (val) { return "$ " + val + " thousands" } } },
			chart: { height: '236', width: '100%', type: 'area', toolbar: { show: false }, stacked: true },
			plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
			dataLabels: { enabled: false },
			grid: { 
				show: true, borderColor: 'rgba('+ this.appVariables.color.whiteRgb +', .15)',
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
		};
		this.salesChart = {
			series: [{
				data: [9452.37, 11018.87, 7296.37, 6274.29, 7924.05, 6581.34, 12918.14]
			}],
			xaxis: {
				axisBorder: {
					show: false
				}
			},
			chart: {
				type: 'line',
				width: 100,
				height: 36,
				sparkline: {
					enabled: true
				},
				stacked: true
			},
			stroke: {
				curve: 'smooth',
				width: 3
			},
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 1,
					opacityTo: 1,
					colorStops: [{
						offset: 0,
						color: this.appVariables.color.primary,
						opacity: 1
					},
					{
						offset: 100,
						color: this.appVariables.color.indigo,
						opacity: 1
					}]
				},
			},
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: false
				},
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function (seriesName) {
							return ''
						}
					},
					formatter: (value) => { return '$'+ this.convertNumberWithCommas(value) },
				},
				marker: {
					show: false
				}
			},
			responsive: [{
				breakpoint: 3000,
				options: {
					chart: {
						width: 130
					}
				}
			},{
				breakpoint: 1450,
				options: {
					chart: {
						width: 100
					}
				}
			},{
				breakpoint: 1300,
				options: {
					chart: {
						width: 90
					}
				}
			},{
				breakpoint: 1200,
				options: {
					chart: {
						width: 200
					}
				}
			},{
				breakpoint: 576,
				options: {
					chart: {
						width: 180
					}
				}
			},{
				breakpoint: 400,
				options: {
					chart: {
						width: 120
					}
				}
			}]
		};
		this.conversionChart = {
			series: [{
				data: [2.68, 2.93, 2.04, 1.61, 1.88, 1.62, 2.80]
			}],
			xaxis: {
				axisBorder: {
					show: false
				},
				crosshairs: {
					width: 1
				},
			},
			chart: {
				type: 'line',
				width: 160,
				height: 28,
				sparkline: {
					enabled: true
				}
			},
			stroke: {
				curve: 'smooth',
				width: 3
			},
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 1,
					opacityTo: 1,
					colorStops: [{
						offset: 0,
						color: this.appVariables.color.danger,
						opacity: 1
					},
					{
						offset: 50,
						color: this.appVariables.color.warning,
						opacity: 1
					},
					{
						offset: 100,
						color: this.appVariables.color.lime,
						opacity: 1
					}]
				},
			},
			labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: false
				},
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function (seriesName) {
							return ''
						}
					},
					formatter: (value) => { return value + '%' },
				},
				marker: {
					show: false
				}
			},
			responsive: [{
				breakpoint: 3000,
				options: {
					chart: {
						width: 120
					}
				}
			},{
				breakpoint: 1450,
				options: {
					chart: {
						width: 100
					}
				}
			},{
				breakpoint: 1300,
				options: {
					chart: {
						width: 90
					}
				}
			},{
				breakpoint: 1200,
				options: {
					chart: {
						width: 160
					}
				}
			},{
				breakpoint: 900,
				options: {
					chart: {
						width: 120
					}
				}
			},{
				breakpoint: 576,
				options: {
					chart: {
						width: 180
					}
				}
			},{
				breakpoint: 400,
				options: {
					chart: {
						width: 120
					}
				}
			}]
		};
		this.sessionChart = {
			series: [{
				data: [10812, 11393, 7311, 6834, 9612, 11200, 13557]
			}],
			xaxis: {
				axisBorder: {
					show: false
				},
				crosshairs: {
					width: 1
				},
			},
			chart: {
				type: 'line',
				width: 160,
				height: 28,
				sparkline: {
					enabled: true
				}
			},
			stroke: {
				curve: 'smooth',
				width: 3
			},
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 1,
					opacityTo: 1,
					colorStops: [{
						offset: 0,
						color: this.appVariables.color.teal,
						opacity: 1
					},
					{
						offset: 50,
						color: this.appVariables.color.primary,
						opacity: 1
					},
					{
						offset: 100,
						color: this.appVariables.color.cyan,
						opacity: 1
					}]
				},
			},
			labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: false
				},
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function (seriesName) {
							return ''
						}
					},
					formatter: (value) => { return value + '%' },
				},
				marker: {
					show: false
				}
			},
			responsive: [{
				breakpoint: 3000,
				options: {
					chart: {
						width: 120
					}
				}
			},{
				breakpoint: 1450,
				options: {
					chart: {
						width: 100
					}
				}
			},{
				breakpoint: 1300,
				options: {
					chart: {
						width: 90
					}
				}
			},{
				breakpoint: 1200,
				options: {
					chart: {
						width: 160
					}
				}
			},{
				breakpoint: 900,
				options: {
					chart: {
						width: 120
					}
				}
			},{
				breakpoint: 576,
				options: {
					chart: {
						width: 180
					}
				}
			},{
				breakpoint: 400,
				options: {
					chart: {
						width: 120
					}
				}
			}]
		};
  }

  ngModelChange(e) {
    var gap = (e.endDate).diff((e.startDate), 'days');
		this.prevDate = moment(e.startDate).subtract('days', gap).format('D MMMM') + ' - ' + moment(e.startDate).subtract('days', 1).format('D MMMM YYYY');
  }
  choosedDate(e) {
    this.inlineDate = e;
  }
  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
  open(e) {
    this.pickerDirective.open(e);
  }
  clear(e) {
    this.selected = null;
  }
}
