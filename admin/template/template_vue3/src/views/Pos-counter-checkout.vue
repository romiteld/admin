<script>
import { useAppOptionStore } from '@/stores/app-option';
import { RouterLink } from 'vue-router';
import { Modal } from 'bootstrap';
import axios from 'axios';

const appOption = useAppOptionStore();

export default {
	data() {
		return {
			tables: '',
			selectedTable: '',
			mobileSidebarToggled: false
		}
	},
	mounted() {
		appOption.appSidebarHide = true;
		appOption.appHeaderHide = true;
		appOption.appContentClass = 'p-0';
		appOption.appContentFullHeight = true;
		
		axios.get('/assets/data/pos/counter-checkout.json').then((response) => {
			this.tables = response.data.tables;
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
		getTotalPrice(orders) {
			var total = 0;
			for (var i = 0; i < orders.length; i++) {
				total += parseFloat(orders[i].price);
			}
			return total.toFixed(2);
		},
		toggleTable(event, table) {
			event.preventDefault();
			
			this.toggleMobileSidebar();
			
			if (table.selected) {
				this.selectedTable = '';
				
				for (var i = 0; i < this.tables.length; i++) {
					this.tables[i].selected = false;
				}
			} else {
				this.selectedTable = table;
				
				for (var i = 0; i < this.tables.length; i++) {
					this.tables[i].selected = (this.tables[i].id == table.id) ? true : false;
				}
			}
		},
		getPrice(orders, type) {
			var price = 0;
			
			if (orders) {
				for (var i = 0; i < orders.length; i++) {
					if (type == 'subtotal') {
						price += parseFloat(orders[i].price);
					} else if (type == 'taxes') {
						price += parseFloat(orders[i].price) * 0.06;
					} else if (type == 'total') {
						price += parseFloat(orders[i].price);
						price += parseFloat(orders[i].price) * 0.06
					}
				}
			}
			
			return price.toFixed(2);
		},
		toggleMobileSidebar() {
			this.mobileSidebarToggled = !this.mobileSidebarToggled;
			
			if (!this.mobileSidebarToggled) {
				this.selectedTable = '';
				
				for (var i = 0; i < this.tables.length; i++) {
					this.tables[i].selected = false;
				}
			}
		}
	}
}
</script>
<template>
	<!-- BEGIN pos -->
	<div class="pos pos-with-header pos-with-sidebar" v-bind:class="{ 'pos-sidebar-mobile-toggled': mobileSidebarToggled }">
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
				<div class="d-md-flex align-items-center mb-4">
					<div class="pos-booking-title flex-1">
						<div class="fs-24px mb-1">Available Table (13/20)</div>
						<div class="mb-2 mb-md-0 d-flex">
							<div class="d-flex align-items-center me-3">
								<i class="fa fa-circle fa-fw text-gray-500 fs-9px me-1"></i> Reserved
							</div>
							<div class="d-flex align-items-center me-3">
								<i class="fa fa-circle fa-fw text-warning fs-9px me-1"></i> Table In-use
							</div>
							<div class="d-flex align-items-center me-3">
								<i class="fa fa-circle fa-fw text-theme fs-9px me-1"></i> Table Available
							</div>
						</div>
					</div>
				</div>
				
				<div class="pos-table-row">
					<template v-if="tables">
						<template v-for="table in tables">
							<div class="pos-table" v-bind:class="{
								'selected': table.selected,
								'available': !table.orders && table.status != 'Reserved', 
								'in-use': table.orders, 
								'disabled': table.status == 'Reserved' 
							}">
								<a href="#" class="pos-table-container" v-on:click="(event) => toggleTable(event, table)">
									<div class="pos-table-status"></div>
									<div class="pos-table-name">
										<div class="name">Table</div>
										<div class="no">{{ table.tableNo }}</div>
										<div class="order">
											<span v-if="table.orders">{{ table.orders.length }} order</span>
											<span v-if="table.status == 'Reserved'">Reserved for {{ table.reserveName }}</span>
											<span v-if="!table.orders && table.status != 'Reserved'">max {{ table.totalPax }} pax</span>
										</div>
									</div>
									
									<div class="pos-table-info-row">
										<div class="pos-table-info-col">
											<div class="pos-table-info-container">
												<span class="icon opacity-50"><i class="far fa-user"></i></span>
												<span class="text">{{ table.pax }} / {{ table.totalPax }}</span>
											</div>
										</div>
										<div class="pos-table-info-col">
											<div class="pos-table-info-container">
												<span class="icon opacity-50"><i class="far fa-clock"></i></span>
												<span class="text">{{ (table.totalTime) ? table.totalTime : '-' }}</span>
											</div>
										</div>
									</div>
									<div class="pos-table-info-row">
										<div class="pos-table-info-col">
											<div class="pos-table-info-container">
												<span class="icon opacity-50"><i class="fa fa-receipt"></i></span>
												<span class="text">
													<span v-if="table.orders">${{ getTotalPrice(table.orders) }}</span>
													<span v-else>-</span>
												</span>
											</div>
										</div>
										<div class="pos-table-info-col">
											<div class="pos-table-info-container">
												<span class="icon opacity-50"><i class="far fa-dollar-sign"></i></span>
												<span class="text" v-bind:class="{ 'text-success' : table.status == 'Paid'}">{{ (table.status != 'Reserved') ? table.status : '-' }}</span>
											</div>
										</div>
									</div>
								</a>
							</div>
						</template>
					</template>
					<template v-else>
						<div class="col-12 pb-3">
							No records found
						</div>
					</template>
				</div>
			</div>
		</div>
		<!-- END pos-content -->
		
		<!-- BEGIN pos-sidebar -->
		<div class="pos-sidebar" id="pos-sidebar">
			<!-- BEGIN pos-sidebar-header -->
			<div class="pos-sidebar-header">
				<div class="back-btn">
					<button type="button" v-on:click="toggleMobileSidebar()" class="btn">
						<i class="bi bi-chevron-left"></i>
					</button>
				</div>
				<div class="icon"><i class="fa fa-plate-wheat"></i></div>
				<div class="title">Table {{ (selectedTable && selectedTable.tableNo) ? selectedTable.tableNo : '-' }}</div>
				<div class="order">Order: <b>#{{ (selectedTable && selectedTable.orderNo) ? selectedTable.orderNo : '-' }}</b></div>
			</div>
			<!-- END pos-sidebar-header -->
			<hr class="m-0 opacity-1">
			<!-- BEGIN pos-sidebar-body -->
			<perfect-scrollbar class="pos-sidebar-body h-100">
				<template v-if="selectedTable && selectedTable.orders">
					<div class="pos-table">
						<div class="row pos-table-row" v-for="order in selectedTable.orders">
							<div class="col-8">
								<div class="pos-product-thumb">
									<div class="img" v-bind:style="{ backgroundImage: 'url('+ order.image +')' }"></div>
									<div class="info">
										<div class="title">{{ order.title }}</div>
										<div class="desc"><div v-for="option in order.options"> - {{ option }}</div></div>
									</div>
								</div>
							</div>
							<div class="col-1 total-qty">x{{ order.quantity }}</div>
							<div class="col-3 total-price">${{ (parseFloat(order.price) * order.quantity).toFixed(2) }}</div>
						</div>
					</div>
				</template>
				<template v-else>
					<div class="p-4">No records found</div>
				</template>
				<!-- END pos-order -->
			</perfect-scrollbar>
			<!-- END pos-sidebar-body -->
			<!-- BEGIN pos-sidebar-footer -->
			<div class="pos-sidebar-footer">
				<div class="d-flex align-items-center mb-2">
					<div>Subtotal</div>
					<div class="flex-1 text-end h6 mb-0">${{ getPrice(selectedTable.orders, 'subtotal') }}</div>
				</div>
				<div class="d-flex align-items-center">
					<div>Taxes (6%)</div>
					<div class="flex-1 text-end h6 mb-0">${{ getPrice(selectedTable.orders, 'taxes') }}</div>
				</div>
				<hr class="opacity-1 my-10px">
				<div class="d-flex align-items-center mb-2">
					<div>Total</div>
					<div class="flex-1 text-end h4 mb-0">${{ getPrice(selectedTable.orders, 'total') }}</div>
				</div>
				<div class="mt-3">
					<div class="d-flex">
						<a href="#" class="btn btn-default w-70px me-10px px-0 d-flex align-items-center justify-content-center">
							<span>
								<i class="fab fa-paypal fa-lg my-10px d-block"></i>
								<span class="small fw-semibold">E-Wallet</span>
							</span>
						</a>
						<a href="#" class="btn btn-default w-70px me-10px d-flex align-items-center justify-content-center">
							<span>
								<i class="fa fa-credit-card fa-fw fa-lg my-10px d-block"></i>
								<span class="small fw-semibold">Bill</span>
							</span>
						</a>
						<a href="#" class="btn btn-theme flex-fill d-flex align-items-center justify-content-center">
							<span>
								<i class="fa fa-wallet fa-lg my-10px d-block"></i>
								<span class="small fw-semibold">Cash</span>
							</span>
						</a>
					</div>
				</div>
			</div>
			<!-- END pos-sidebar-footer -->
		</div>
		<!-- END pos-sidebar -->
	</div>
	<!-- END pos -->
</template>
