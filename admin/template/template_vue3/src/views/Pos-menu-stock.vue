<script>
import { useAppOptionStore } from '@/stores/app-option';
import { RouterLink } from 'vue-router';
import { Modal } from 'bootstrap';
import axios from 'axios';

const appOption = useAppOptionStore();

export default {
	data() {
		return {
			menu: ''
		}
	},
	mounted() {
		appOption.appSidebarHide = true;
		appOption.appHeaderHide = true;
		appOption.appContentClass = 'p-0';
		appOption.appContentFullHeight = true;
		
		axios.get('/assets/data/pos/menu-stock.json').then((response) => {
			this.menu = response.data.menu;
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
		}
	}
}
</script>
<template>
	<!-- BEGIN pos -->
	<div class="pos pos-vertical pos-with-header" id="pos">
		<!-- BEGIN pos-container -->
		<div class="pos-container">
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
				<div class="pos-content-container p-3">
					<div class="row gx-0">
						<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6" v-if="menu" v-for="(menu, index) in menu">
							<div class="pos-stock-product">
								<div class="pos-stock-product-container">
									<div class="product">
										<div class="product-img">
											<div class="img" v-bind:style="{ backgroundImage: 'url('+ menu.image +')' }"></div>
										</div>
										<div class="product-info">
											<div class="title">{{ menu.title }}</div>
											<div class="desc">{{ menu.description }}</div>
											<div class="product-option">
												<div class="option">
													<div class="option-label">Stock:</div>
													<div class="option-input">
														<input type="text" class="form-control" v-bind:value="menu.stock" />
													</div>
												</div>
												<div class="option">
													<div class="option-label">Availability:</div>
													<div class="option-input">
														<div class="form-check form-switch">
															<input class="form-check-input" type="checkbox" name="qty" v-bind:id="'product' + index" v-bind:checked="menu.available" value="1" />
															<label class="form-check-label" v-bind:for="'product' + index"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="product-action">
											<a href="#" class="btn btn-default"><i class="fa fa-times fa-fw"></i> Cancel</a>
											<a href="#" class="btn btn-success"><i class="fa fa-check fa-fw"></i> Update</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- END pos-content -->
		</div>
		<!-- END pos-container -->
	</div>
	<!-- END pos -->
</template>
