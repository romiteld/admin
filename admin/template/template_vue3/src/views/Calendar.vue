<script>
import { useAppVariableStore } from '@/stores/app-variable';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

const appVariable = useAppVariableStore();

export default {
	components: {
    FullCalendar
	},
  data() {
  	var d = new Date();
		var month = d.getMonth() + 1;
				month = (month < 10) ? '0' + month : month;
		var year = d.getFullYear();
		var day = d.getDate();
		
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, bootstrapPlugin ],
        initialView: 'dayGridMonth',
        headerToolbar: {
					left: 'dayGridMonth,timeGridWeek,timeGridDay',
					center: 'title',
					right: 'prev,next today'
				},
				buttonText: {
					today:    'Today',
					month:    'Month',
					week:     'Week',
					day:      'Day'
				},
				initialView: 'dayGridMonth',
				editable: true,
				droppable: true,
				themeSystem: 'bootstrap',
				eventLimit: true, 
				views: {
					timeGrid: {
						eventLimit: 6
					}
				},
				events: [{
					title: 'Trip to London',
					start: year + '-'+ month +'-01',
					end: year + '-'+ month +'-05',
					color: appVariable.color.theme
				},{
					title: 'Meet with Sean Ngu',
					start: year + '-'+ month +'-02T06:00:00',
					color: appVariable.color.blue
				},{
					title: 'Mobile Apps Brainstorming',
					start: year + '-'+ month +'-10',
					end: year + '-'+ month +'-12',
					color: appVariable.color.pink
				},{
					title: 'Stonehenge, Windsor Castle, Oxford',
					start: year + '-'+ month +'-05T08:45:00',
					end: year + '-'+ month +'-06T18:00',
					color: appVariable.color.indigo
				},{
					title: 'Paris Trip',
					start: year + '-'+ month +'-12',
					end: year + '-'+ month +'-16'
				},{
					title: 'Domain name due',
					start: year + '-'+ month +'-15',
					end: year + '-'+ month +'-15',
					color: appVariable.color.blue
				},{
					title: 'Cambridge Trip',
					start: year + '-'+ month +'-19',
					end: year + '-'+ month +'-19'
				},{
					title: 'Visit Apple Company',
					start: year + '-'+ month +'-22T05:00:00',
					color: appVariable.color.green
				},{
					title: 'Exercise Class',
					start: year + '-'+ month +'-22T07:30:00',
					color: appVariable.color.orange
				},{
					title: 'Live Recording',
					start: year + '-'+ month +'-22T03:00:00',
					color: appVariable.color.blue
				},{
					title: 'Announcement',
					start: year + '-'+ month +'-22T15:00:00',
					color: appVariable.color.red
				},{
					title: 'Dinner',
					start: year + '-'+ month +'-22T18:00:00'
				},{
					title: 'New Android App Discussion',
					start: year + '-'+ month +'-25T08:00:00',
					end: year + '-'+ month +'-25T10:00:00',
					color: appVariable.color.red
				},{
					title: 'Marketing Plan Presentation',
					start: year + '-'+ month +'-25T12:00:00',
					end: year + '-'+ month +'-25T14:00:00',
					color: appVariable.color.blue
				},{
					title: 'Chase due',
					start: year + '-'+ month +'-26T12:00:00',
					color: appVariable.color.orange
				},{
					title: 'Heartguard',
					start: year + '-'+ month +'-26T08:00:00',
					color: appVariable.color.orange
				},{
					title: 'Lunch with Richard',
					start: year + '-'+ month +'-28T14:00:00',
					color: appVariable.color.blue
				},{
					title: 'Web Hosting due',
					start: year + '-'+ month +'-30',
					color: appVariable.color.blue
				}]
      }
    }
  },
	mounted() {
		var containerEl = document.getElementById('external-events');
		new Draggable(containerEl, {
			itemSelector: '.fc-event',
			eventData: function(eventEl) {
				return {
					title: eventEl.innerText,
					color: eventEl.getAttribute('data-color')
				};
			}
		});
		
		window.dispatchEvent(new Event('resize'));
	}
}
</script>
<template>
	<div>
		<!-- BEGIN breadcrumb -->
		<ol class="breadcrumb float-xl-end">
			<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
			<li class="breadcrumb-item active">Calendar</li>
		</ol>
		<!-- END breadcrumb -->
		<!-- BEGIN page-header -->
		<h1 class="page-header">Calendar <small>header small text goes here...</small></h1>
		<!-- END page-header -->
		<hr />
		
		<!-- BEGIN row -->
		<div class="row">
			<!-- BEGIN event-list -->
			<div class="d-none d-lg-block" style="width: 215px">
				<div id="external-events" class="fc-event-list">
					<h5 class="mb-3">Draggable Events</h5>
					<div class="fc-event" data-color="#00acac">
						<div class="fc-event-text">Meeting with Client</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-success"></i></div>
					</div>
					<div class="fc-event" data-color="#348fe2">
						<div class="fc-event-text">IOS App Development</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-blue"></i></div>
					</div>
					<div class="fc-event" data-color="#f59c1a">
						<div class="fc-event-text">Group Discussion</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-warning"></i></div>
					</div>
					<div class="fc-event" data-color="#ff5b57">
						<div class="fc-event-text">New System Briefing</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-danger"></i></div>
					</div>
					<div class="fc-event">
						<div class="fc-event-text">Brainstorming</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-dark"></i></div>
					</div>
					<hr class="bg-grey-lighter my-3" />
					<h5 class="mb-3">Other Events</h5>
					<div class="fc-event" data-color="#b6c2c9">
						<div class="fc-event-text">Other Event 1</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
					</div>
					<div class="fc-event" data-color="#b6c2c9">
						<div class="fc-event-text">Other Event 2</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
					</div>
					<div class="fc-event" data-color="#b6c2c9">
						<div class="fc-event-text">Other Event 3</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
					</div>
					<div class="fc-event" data-color="#b6c2c9">
						<div class="fc-event-text">Other Event 4</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
					</div>
					<div class="fc-event" data-color="#b6c2c9">
						<div class="fc-event-text">Other Event 5</div>
						<div class="fc-event-icon"><i class="fas fa-circle fa-fw fs-9px text-gray-500"></i></div>
					</div>
				</div>
			</div>
			<!-- END event-list -->
			<div class="col-lg">
				<!-- BEGIN calendar -->
				<FullCalendar :events="events" :options="calendarOptions"></FullCalendar>
				<!-- END calendar -->
			</div>
		</div>
		<!-- END row -->
	</div>
</template>