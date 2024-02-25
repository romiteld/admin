<!-- BEGIN #sidebar-right -->
<div id="sidebar-right" class="app-sidebar app-sidebar-end" data-bs-theme="dark">
	<!-- BEGIN sidebar scrollbar -->
	<div data-scrollbar="true" data-height="100%">
		<!-- BEGIN sidebar user -->
		<div class="p-20px text-body">
			<p class="fw-bold mb-10px">Server Status</p>
			<hr class="mt-0 mb-15px text-body text-opacity-35" />
			<div class="d-flex align-items-center">
				<div class="position-relative d-flex w-35px h-35px">
					<input class="knob" data-width="35" data-height="35" data-thickness=".2" data-readonly="true" data-min="10" data-displayInput="false" value="44" data-fgColor="@@if(context.theme=='default'){#00acac}@@if(context.theme=='material' || context.theme=='google'){#009688}@@if(context.theme=='apple'){#4cd964}@@if(context.theme=='facebook'){#0f9e3e}@@if(context.theme =='transparent'){#01caca}" data-bgColor="@@if(context.theme!='facebook' && context.theme!='google'){rgba(0,0,0,0.5)}@@if(context.theme == 'google' || context.theme == 'facebook'){rgba(0,0,0,0.1)}" />
				</div>
				<div class="flex-grow-1 ps-3">
					<div class="fw-bold mb-5px d-flex small"><span class="flex-grow-1">CPU Usage</span><span>44%</span></div>
					<div class="progress rounded-0 rounded-pill" style="height: 4px">
						<div class="progress-bar bg-teal rounded-pill" style="width: 44%;"></div>
					</div>
					<div class="text-body text-opacity-50 mt-3px fw-bold"><small>Speed: <span class="text-body">3.8GHz</span></small></div>
				</div>
			</div>
			<hr class="my-15px text-body text-opacity-35" />
			<div class="d-flex align-items-center">
				<div class="position-relative d-flex w-35px h-35px">
					<input class="knob" data-width="35" data-height="35" data-thickness=".2" data-readonly="true" data-min="10" data-displayInput="false" value="67" data-fgColor="@@if(context.theme=='default'){#348fe2}@@if(context.theme=='material' || context.theme=='google'){#2196f3}@@if(context.theme=='apple'){#007aff}@@if(context.theme=='facebook'){#0078ff}@@if(context.theme =='transparent'){#006cff}" data-bgColor="@@if(context.theme!='facebook' && context.theme!='google'){rgba(0,0,0,0.5)}@@if(context.theme == 'google' || context.theme == 'facebook'){rgba(0,0,0,0.1)}" />
				</div>
				<div class="flex-grow-1 ps-3">
					<div class="fw-bold mb-5px d-flex small"><span class="flex-grow-1">Memory Usage</span><span>67%</span></div>
					<div class="progress rounded-0 rounded-pill" style="height: 4px">
						<div class="progress-bar bg-blue rounded-pill" style="width: 67%;"></div>
					</div>
					<div class="text-body text-opacity-50 mt-3px fw-bold"><small>Available: <span class="text-body">1.25Tb</span></small></div>
				</div>
			</div>
			<hr class="my-15px text-body text-opacity-35" />
			<div class="d-flex align-items-center">
				<div class="position-relative d-flex w-35px h-35px">
					<input class="knob" data-width="35" data-height="35" data-thickness=".2" data-readonly="true" data-min="10" data-displayInput="false" value="70" data-fgColor="@@if(context.theme=='default'){#ff5b57}@@if(context.theme=='material' || context.theme=='google'){#e91e63}@@if(context.theme=='apple'){#ff3b30}@@if(context.theme=='facebook'){#ff1b30}@@if(context.theme =='transparent'){#ff3502}" data-bgColor="@@if(context.theme!='facebook' && context.theme!='google'){rgba(0,0,0,0.5)}@@if(context.theme == 'google' || context.theme == 'facebook'){rgba(0,0,0,0.1)}" />
				</div>
				<div class="flex-grow-1 ps-3">
					<div class="fw-bold mb-5px d-flex small"><span class="flex-grow-1">Disk Usage</span><span>70%</span></div>
					<div class="progress rounded-0 rounded-pill" style="height: 4px">
						<div class="progress-bar bg-danger rounded-pill" style="width: 70%;"></div>
					</div>
					<div class="text-body text-opacity-50 mt-3px fw-bold"><small>Performance: <span class="text-body">30%</span></small></div>
				</div>
			</div>
			<hr class="my-15px text-body text-opacity-35" />
			<div class="d-flex align-items-center">
				<div class="position-relative d-flex w-35px h-35px">
					<input class="knob" data-width="35" data-height="35" data-thickness=".2" data-readonly="true" data-min="10" data-displayInput="false" value="52" data-fgColor="@@if(context.theme=='default'){#727cb6}@@if(context.theme=='material' || context.theme=='google'){#3f51b5}@@if(context.theme=='apple'){#5856d6}@@if(context.theme=='facebook'){#7b2cff}@@if(context.theme =='transparent'){#9800ff}" data-bgColor="@@if(context.theme!='facebook' && context.theme!='google'){rgba(0,0,0,0.5)}@@if(context.theme == 'google' || context.theme == 'facebook'){rgba(0,0,0,0.1)}" />
				</div>
				<div class="flex-grow-1 ps-3">
					<div class="fw-bold mb-5px d-flex small"><span class="flex-grow-1">Ethernet </span><span>52Mbps</span></div>
					<div class="progress rounded-0 rounded-pill" style="height: 4px">
						<div class="progress-bar bg-purple rounded-pill" style="width: 52%;"></div>
					</div>
					<div class="text-body text-opacity-50 mt-3px fw-bold"><small>Quota left: <span class="text-body">1.5Tb</span></small></div>
				</div>
			</div>
			<hr class="my-15px text-body text-opacity-35" />
			
			<p class="mb-2 fw-bold">Total Visitors</p>
			<div id="sidebar-sparkline-1" class="d-flex justify-content-center"></div>
			<hr class="my-15px text-body text-opacity-35" />
			<p class="mb-2 fw-bold">Total Page Views</p>
			<div id="sidebar-sparkline-2" class="d-flex justify-content-center"></div>
			<hr class="my-15px text-body text-opacity-35" />
			<p class="mb-2 fw-bold">Total Unique Visitors</p>
			<div id="sidebar-sparkline-3" class="d-flex justify-content-center"></div>
			<hr class="my-15px text-body text-opacity-35" />
			<p class="mb-2 fw-bold">Bounce Rate</p>
			<div id="sidebar-sparkline-4" class="d-flex justify-content-center"></div>
			<hr class="my-15px text-body text-opacity-35" />
			
			<div class="accordion" id="accordionExample">
				<div class="accordion-item panel panel-inverse mb-0 rounded-0 rounded-top overflow-hidden">
					<h2 class="accordion-header panel-heading" id="headingOne">
						<button class="accordion-button panel-title p-0 bg-none border-0 shadow-none text-reset" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Accordion Item #1
						</button>
					</h2>
					<div id="collapseOne" class="accordion-collapse collapse show border-0" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div class="accordion-body panel-body text-body @@if(context.theme != 'google' && context.theme != 'facebook'){ bg-gray-700}">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
						</div>
					</div>
				</div>
				<div class="accordion-item panel panel-inverse mb-0 rounded-0">
					<h2 class="accordion-header panel-heading rounded-0" id="headingTwo">
						<button class="accordion-button collapsed panel-title p-0 bg-none border-0 shadow-none text-reset" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Accordion Item #2
						</button>
					</h2>
					<div id="collapseTwo" class="accordion-collapse collapse border-0" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div class="accordion-body panel-body text-body @@if(context.theme != 'google' && context.theme != 'facebook'){ bg-gray-700}">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
						</div>
					</div>
				</div>
				<div class="accordion-item panel panel-inverse mb-0 rounded-0 rounded-bottom overflow-hidden">
					<h2 class="accordion-header panel-heading rounded-0" id="headingThree">
						<button class="accordion-button collapsed panel-title p-0 bg-none border-0 shadow-none text-reset" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							Accordion Item #3
						</button>
					</h2>
					<div id="collapseThree" class="accordion-collapse collapse border-0" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div class="accordion-body panel-body text-body @@if(context.theme != 'google' && context.theme != 'facebook'){ bg-gray-700}">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END sidebar user -->
	</div>
	<!-- END sidebar scrollbar -->
</div>
<div class="app-sidebar-bg app-sidebar-end" data-bs-theme="dark"></div>
<div class="app-sidebar-mobile-backdrop app-sidebar-end">
	<a href="#" data-dismiss="app-sidebar-end-mobile" class="stretched-link"></a>
</div>
<!-- END #sidebar-right -->