<script>
import { useAppOptionStore } from '@/stores/app-option';
import { RouterLink } from 'vue-router';
import { Modal } from 'bootstrap';
import axios from 'axios';

const appOption = useAppOptionStore();

export default {
	data() {
		return {
			order: ''
		}
	},
	mounted() {
		appOption.appSidebarHide = true;
		appOption.appHeaderHide = true;
		appOption.appContentClass = 'p-0';
		appOption.appContentFullHeight = true;
		
		axios.get('/assets/data/pos/kitchen-order.json').then((response) => {
			this.order = response.data.order;
		});
	},
	beforeUnmount() {
		appOption.appSidebarHide = false;
		appOption.appHeaderHide = false;
		appOption.appContentClass = '';
		appOption.appContentFullHeight = false;
	},
	methods: {
		checkTime(i) {
			if (i < 10) {i = "0" + i};
			return i;
		},
		getTime() {
			var today = new Date();
			var h = today.getHours();
			var m = today.getMinutes();
			var s = today.getSeconds();
			var a;
			m = this.checkTime(m);
			s = this.checkTime(s);
			a = (h > 11) ? 'pm' : 'am';
			h = (h > 12) ? h - 12 : h;
			
			setTimeout(this.getTime, 500);
			
			return h + ":" + m + a;
		},
		getTotalCompletedItems(items) {
			var count = 0;
			for (var i = 0; i < items.length; i++) {
				if (items[i].status == 'Completed') {
					count++;
				}
			}
			return count;
		},
		setItemStatus(event, item, status) {
			event.preventDefault();
			
			if (confirm('Confirm set this order to ' + status + '?') === true) {
				item.status = status;
			}
		}
	}
}
</script>
<template>
	<!-- BEGIN pos -->
	<div class="pos pos-with-header" id="pos">
		<!-- BEGIN pos-header -->
		<div class="pos-header">
			<div class="logo">
				<RouterLink to="/pos/counter-checkout">
					<div class="logo-img"><i class="fa fa-bowl-rice" style="font-size: 1.5rem;"></i></div>
					<div class="logo-text">Pine & Dine</div>
				</RouterLink>
			</div>
			<div class="time" id="time">{{ getTime() }}</div>
			<div class="nav">
				<div class="nav-item">
					<RouterLink to="/pos/kitchen-order" class="nav-link">
						<i class="far fa-clock nav-icon"></i>
					</RouterLink>
				</div>
				<div class="nav-item">
					<RouterLink to="/pos/table-booking" class="nav-link">
						<i class="far fa-calendar-check nav-icon"></i>
					</RouterLink>
				</div>
				<div class="nav-item">
					<RouterLink to="/pos/menu-stock" class="nav-link">
						<i class="fa fa-chart-pie nav-icon"></i>
					</RouterLink>
				</div>
			</div>
		</div>
		<!-- END pos-header -->
		
		<!-- BEGIN pos-content -->
		<div class="pos-content">
			<div class="pos-content-container">
				<div class="pos-task-row" v-if="order">
					<div class="pos-task" v-for="order in order">
						<div class="pos-task-info">
							<div class="table-no">Table <b>{{ order.tableNo }}</b></div>
							<div class="order-no">Order No: #{{ order.orderNo }}</div>
							<div class="order-type">
								<span class="badge" v-bind:class="{ 'bg-theme text-theme-color': order.orderStatus != 'Completed', 'bg-gray-500 text-white': order.orderStatus == 'Completed'}">{{ order.orderType }}</span>
							</div>
							<div class="time-pass" v-if="order.orderTime">{{ order.orderTime }} time</div>
							<div v-if="order.totalOrderTime" class="mt-2">
								All dish served<br />{{ order.totalOrderTime }} total time
							</div>
						</div>
						<div class="pos-task-body">
							<div class="pos-task-completed">
								Completed: <b>({{ getTotalCompletedItems(order.items) }}/{{ order.items.length }})</b>
							</div>
							<div class="pos-task-product-row">
								<template v-for="item in order.items">
									<div class="pos-task-product" v-bind:class="{ 'completed': item.status == 'Completed' || item.status == 'Cancelled' }">
										<div class="pos-task-product-img">
											<div class="cover" v-bind:style="{ backgroundImage: 'url('+ item.image +')' }"></div>
											<div class="caption" v-if="item.status == 'Completed'">
												<div>Completed</div>
											</div>
											<div class="caption" v-if="item.status == 'Cancelled'">
												<div>Cancelled</div>
											</div>
										</div>
										<div class="pos-task-product-info">
											<div class="info">
												<div class="title">{{ item.title }}</div>
												<div class="desc">
													<div v-for="note in item.note">- {{ note }}</div>
												</div>
											</div>
											<div class="qty">
												x{{ item.quantity }}
											</div>
										</div>
										<div class="pos-task-product-action">
											<a href="#" class="btn btn-success" 
												v-on:click="(event) => setItemStatus(event, item, 'Completed')"
												v-bind:class="{ 'disabled': item.status == 'Completed' || item.status == 'Cancelled' }">
												Complete
											</a>
											<a href="#" class="btn btn-outline-inverse" 
												v-on:click="(event) => setItemStatus(event, item, 'Cancelled')"
												v-bind:class="{ 'disabled': item.status == 'Completed' || item.status == 'Cancelled' }">
												Cancel
											</a>
										</div>
									</div>
								</template>
							</div>
						</div>
					</div>
				</div>
				<div class="px-3 py-5 text-center" v-else>
					No order found
				</div>
			</div>
		</div>
		<!-- END pos-content -->
	</div>
	<!-- END pos -->
</template>
