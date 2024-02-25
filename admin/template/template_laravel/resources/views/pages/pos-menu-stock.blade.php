@extends('layouts.default', [
	'paceTop' => true, 
	'appContentFullHeight' => true, 
	'appContentClass' => 'p-0',
	'appSidebarHide' => true,
	'appHeaderHide' => true
])

@section('title', 'POS - Menu Stock System')

@push('scripts')
	<script src="/assets/js/demo/pos-header.demo.js"></script>
@endpush

@section('content')
	<!-- BEGIN pos -->
	<div class="pos pos-with-header" id="pos">
		<!-- BEGIN pos-header -->
		<div class="pos-header">
			<div class="logo">
				<a href="/pos/counter-checkout">
					<div class="logo-img"><i class="fa fa-bowl-rice fs-2"></i></div>
					<div class="logo-text">Pine & Dine</div>
				</a>
			</div>
			<div class="time" id="time">00:00</div>
			<div class="nav">
				<div class="nav-item">
					<a href="/pos/kitchen-order" class="nav-link">
						<i class="far fa-clock nav-icon"></i>
					</a>
				</div>
				<div class="nav-item">
					<a href="/pos/table-booking" class="nav-link">
						<i class="far fa-calendar-check nav-icon"></i>
					</a>
				</div>
				<div class="nav-item">
					<a href="/pos/menu-stock" class="nav-link">
						<i class="fa fa-chart-pie nav-icon"></i>
					</a>
				</div>
			</div>
		</div>
		<!-- END pos-header -->
	
		<!-- BEGIN pos-content -->
		<div class="pos-content">
			<div class="pos-content-container">
				<div class="row gx-0">
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-1.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Grill Chicken Chop&reg;</div>
										<div class="desc">chicken, egg, mushroom, salad</div>
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="20" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product1" checked value="1" />
														<label class="form-check-label" for="product1"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-2.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Grill Pork Chop&reg;</div>
										<div class="desc">pork, egg, mushroom, salad</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="30" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product2" checked value="1" />
														<label class="form-check-label" for="product2"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-3.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Capellini Tomato Sauce&reg;</div>
										<div class="desc">spaghetti, tomato, mushroom</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="15" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product3" checked value="1" />
														<label class="form-check-label" for="product3"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-4.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Vegan Salad Bowl&reg;</div>
										<div class="desc">apple, carrot, tomato</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="10" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product4" checked value="1" />
														<label class="form-check-label" for="product4"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-5.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Hawaiian Pizza&reg;</div>
										<div class="desc">pizza, crab meat, pineapple</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="10" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product5" checked value="1" />
														<label class="form-check-label" for="product5"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-6.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Avocado Shake</div>
										<div class="desc">avocado, milk, vanilla</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="0" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product6" value="1" />
														<label class="form-check-label" for="product6"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-7.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Coffee Latte</div>
										<div class="desc">espresso, milk</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="50" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product7" checked value="1" />
														<label class="form-check-label" for="product7"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-8.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Vita C Detox Juice</div>
										<div class="desc">apricot, apple, carrot and ginger juice</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="50" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product8" checked value="1" />
														<label class="form-check-label" for="product8"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-9.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Pancake</div>
										<div class="desc">Non dairy, egg, baking soda, sugar, all purpose flour</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="13" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product9" checked value="1" />
														<label class="form-check-label" for="product9"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-10.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Mushroom soup</div>
										<div class="desc">Evaporated milk, marsala wine, beef cubes, chicken broth, butter</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="30" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product10" checked value="1" />
														<label class="form-check-label" for="product10"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-11.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Baked chicken wing</div>
										<div class="desc">Chicken wings, a1 steak sauce, honey, cayenne pepper</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="32" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product11" checked value="1" />
														<label class="form-check-label" for="product11"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-12.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Veggie Spaghetti</div>
										<div class="desc">Yellow squash, pasta, roasted red peppers, zucchini</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="7" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product12" checked value="1" />
														<label class="form-check-label" for="product12"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-13.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Vanilla Ice Cream</div>
										<div class="desc">Heavy whipping cream, white sugar, vanilla extract</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="50" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product13" checked value="1" />
														<label class="form-check-label" for="product13"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-14.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Perfect Yeast Doughnuts</div>
										<div class="desc">Chocolate hazelnut spread, bread flour, doughnuts, quick rise yeast, butter</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="10" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product14" checked value="1" />
														<label class="form-check-label" for="product14"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-15.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Macarons</div>
										<div class="desc">Almond flour, egg whites, heavy cream, food coloring, powdered sugar</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="20" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product15" checked value="1" />
														<label class="form-check-label" for="product15"></label>
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
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="pos-stock-product">
							<div class="pos-stock-product-container">
								<div class="product">
									<div class="product-img">
										<div class="img" style="background-image: url(/assets/img/pos/product-16.jpg)"></div>
									</div>
									<div class="product-info">
										<div class="title">Perfect Vanilla Cupcake</div>
										<div class="desc">Baking powder, all purpose flour, plain kefir, vanilla extract</div>
									
										<div class="product-option">
											<div class="option">
												<div class="option-label">Stock:</div>
												<div class="option-input">
													<input type="text" class="form-control" value="16" />
												</div>
											</div>
											<div class="option">
												<div class="option-label">Availability:</div>
												<div class="option-input">
													<div class="form-check form-switch">
														<input class="form-check-input" type="checkbox" name="" id="product16" checked value="1" />
														<label class="form-check-label" for="product16"></label>
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
	<!-- END pos -->
@endsection
