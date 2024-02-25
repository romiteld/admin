import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppMenuService {
	getAppMenus() {
		return [{
			'icon': 'fa fa-sitemap',
			'title': 'Dashboard',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': 'dashboard/v1',
				'title': 'Dashboard v1'
			},{
				'url': 'dashboard/v2',
				'title': 'Dashboard v2'
			},{
				'url': 'dashboard/v3',
				'title': 'Dashboard v3'
			}]
		},{
			'icon': 'fa fa-hdd',
			'title': 'Email',
			'url': '',
			'badge': '10',
			'submenu': [{
				'url': 'email/inbox',
				'title': 'Inbox'
			},{
				'url': 'email/compose',
				'title': 'Compose'
			},{
				'url': 'email/detail',
				'title': 'Detail'
			}]
		},{
			'icon': 'fab fa-simplybuilt',
			'title': 'Widgets',
			'label': 'NEW',
			'url': 'widget'
		},{
			'icon': 'fa fa-gem',
			'title': 'UI Elements',
			'url': '',
			'label': 'NEW',
			'caret': 'true',
			'submenu': [{
				'url': 'ui/general',
				'title': 'General',
				'highlight': 'true'
			},{
				'url': 'ui/typography',
				'title': 'Typography'
			},{
				'url': 'ui/tabs-accordions',
				'title': 'Tabs & Accordions'
			},{
				'url': 'ui/modal-notification',
				'title': 'Modal & Notification',
				'highlight': 'true'
			},{
				'url': 'ui/widget-boxes',
				'title': 'Widget Boxes'
			},{
				'url': 'ui/media-object',
				'title': 'Media Object'
			},{
				'url': 'ui/buttons',
				'title': 'Buttons',
				'highlight': 'true'
			},{
				'url': 'ui/icon-fontawesome',
				'title': 'FontAwesome'
			},{
				'url': 'ui/icon-duotone',
				'title': 'Duotone Icons'
			},{
				'url': 'ui/icon-bootstrap',
				'title': 'Bootstrap Icons',
				'highlight': 'true'
			},{
				'url': 'ui/icon-simple-line-icons',
				'title': 'Simple Line Ioncs'
			},{
				'url': 'ui/language-icon',
				'title': 'Language Icon'
			},{
				'url': 'ui/social-buttons',
				'title': 'Social Buttons'
			}]
		},{
			'img': '/assets/img/logo/logo-bs5.png',
			'title': 'Bootstrap 5',
			'url': 'bootstrap-5',
			'label': 'NEW'
		},{
			'icon': 'fa fa-list-ol',
			'title': 'Form Stuff',
			'url': '',
			'caret': 'true',
			'label': 'NEW',
			'submenu': [{
				'url': 'form/elements',
				'title': 'Form Elements'
			}, {
				'url': 'form/plugins',
				'title': 'Form Plugins',
				'highlight': 'true'
			}, {
				'url': 'form/wizards',
				'title': 'Form Wizards'
			}]
		},{
			'icon': 'fa fa-table',
			'title': 'Tables',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': 'table/basic',
				'title': 'Basic Table'
			}, {
				'url': 'table/data',
				'title': 'Ngx DataTable'
			}]
		},{
			'icon': 'fa fa-cash-register',
			'title': 'POS System',
			'url': '',
			'caret': 'true',
			'label': 'NEW',
			'submenu': [{
				'url': 'pos/customer-order',
				'title': 'Customer Order'
			}, {
				'url': 'pos/kitchen-order',
				'title': 'Kitchen Order'
			}, {
				'url': 'pos/counter-checkout',
				'title': 'Counter Checkout'
			}, {
				'url': 'pos/table-booking',
				'title': 'Table Booking'
			}, {
				'url': 'pos/menu-stock',
				'title': 'Menu Stock'
			}]
		},{
			'icon': 'fa fa-chart-pie',
			'title': 'Chart',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': 'chart/apex',
				'title': 'Chart Apex'
			}, {
				'url': 'chart/js',
				'title': 'Chart JS'
			}, {
				'url': 'chart/ngx',
				'title': 'Chart Ngx'
			}]
		},{
			'icon': 'fa fa-calendar',
			'title': 'Calendar',
			'url': 'calendar'
		},{
			'icon': 'fa fa-map',
			'title': 'Map',
			'url': '/map'
		},{
			'icon': 'fa fa-image',
			'title': 'Gallery',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': 'gallery/v1',
				'title': 'Gallery v1'
			},{
				'url': 'gallery/v2',
				'title': 'Gallery v2'
			}]
		},{
			'icon': 'fa fa-cogs',
			'title': 'Page Options',
			'url': '',
			'caret': 'true',
			'label': 'NEW',
			'submenu': [{
				'url': 'page-option/page-blank',
				'title': 'Blank Page'
			},{
				'url': 'page-option/page-with-footer',
				'title': 'Page with Footer'
			},{
				'url': 'page-option/page-with-fixed-footer',
				'title': 'Page with Fixed Footer',
				'highlight': 'true'
			},{
				'url': 'page-option/page-without-sidebar',
				'title': 'Page without Sidebar'
			},{
				'url': 'page-option/page-with-right-sidebar',
				'title': 'Page with Right Sidebar'
			},{
				'url': 'page-option/page-with-minified-sidebar',
				'title': 'Page with Minified Sidebar'
			},{
				'url': 'page-option/page-with-two-sidebar',
				'title': 'Page with Two Sidebar'
			},{
				'url': 'page-option/page-full-height',
				'title': 'Full Height Content'
			},{
				'url': 'page-option/page-with-wide-sidebar',
				'title': 'Page with Wide Sidebar'
			},{
				'url': 'page-option/page-with-light-sidebar',
				'title': 'Page with Light Sidebar'
			},{
				'url': 'page-option/page-with-mega-menu',
				'title': 'Page with Mega Menu'
			},{
				'url': 'page-option/page-with-top-menu',
				'title': 'Page with Top Menu'
			},{
				'url': 'page-option/page-with-boxed-layout',
				'title': 'Page with Boxed Layout'
			},{
				'url': 'page-option/page-with-mixed-menu',
				'title': 'Page with Mixed Menu'
			},{
				'url': 'page-option/boxed-layout-with-mixed-menu',
				'title': 'Boxed Layout with Mixed Menu'
			},{
				'url': 'page-option/page-with-transparent-sidebar',
				'title': 'Page with Transparent Sidebar'
			},{
				'url': 'page-option/page-with-search-sidebar',
				'title': 'Page with Search Sidebar',
				'highlight': 'true'
			}]
		},{
			'icon': 'fa fa-gift',
			'title': 'Extra',
			'url': '',
			'caret': 'true',
			'label': 'NEW',
			'submenu': [{
				'url': 'extra/timeline',
				'title': 'Timeline'
			},{
				'url': 'extra/coming-soon',
				'title': 'Coming Soon Page'
			},{
				'url': 'extra/search-results',
				'title': 'Search Results'
			},{
				'url': 'extra/invoice',
				'title': 'Invoice'
			},{
				'url': 'extra/error-page',
				'title': '404 Error Page'
			},{
				'url': 'extra/profile',
				'title': 'Profile Page'
			},{
				'url': 'extra/scrum-board',
				'title': 'Scrum Board',
				'highlight': 'true'
			},{
				'url': 'extra/cookie-acceptance-banner',
				'title': 'Cookie Acceptance Banner',
				'highlight': 'true'
			},{
				'url': 'extra/orders',
				'title': 'Orders',
				'highlight': 'true'
			},{
				'url': 'extra/order-details',
				'title': 'Order Details',
				'highlight': 'true'
			},{
				'url': 'extra/products',
				'title': 'Products',
				'highlight': 'true'
			},{
				'url': 'extra/product-details',
				'title': 'Product Details',
				'highlight': 'true'
			},{
				'url': 'extra/file-manager',
				'title': 'File Manager',
				'highlight': 'true'
			},{
				'url': 'extra/pricing-page',
				'title': 'Pricing Page',
				'highlight': 'true'
			},{
				'url': 'extra/messenger-page',
				'title': 'Messenger Page',
				'highlight': 'true'
			},{
				'url': 'extra/data-management',
				'title': 'Data Management',
				'highlight': 'true'
			},{
				'url': 'extra/settings-page',
				'title': 'Settings Page',
				'highlight': 'true'
			}]
		},{
			'icon': 'fa fa-key',
			'title': 'Login & Register',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': 'login/v1',
				'title': 'Login'
			},{
				'url': 'login/v2',
				'title': 'Login v2'
			},{
				'url': 'login/v3',
				'title': 'Login v3'
			},{
				'url': 'register/v3',
				'title': 'Register v3'
			}]
		},{
			'icon': 'fa fa-medkit',
			'title': 'Helper',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': 'helper/css',
				'title': 'Predefined CSS Classes'
			}]
		},{
			'icon': 'fa fa-align-left',
			'title': 'Menu Level',
			'url': '',
			'caret': 'true',
			'submenu': [{
				'url': '',
				'title': 'Menu 1.1',
				'caret': 'true',
				'submenu': [{
					'url': '',
					'title': 'Menu 2.1',
					'caret': 'true',
					'submenu': [{
						'url': '',
						'title': 'Menu 3.1',
					},{
						'url': '',
						'title': 'Menu 3.2'
					}]
				},{
					'url': '',
					'title': 'Menu 2.2'
				},{
					'url': '',
					'title': 'Menu 2.3'
				}]
			},{
				'url': '',
				'title': 'Menu 1.2'
			},{
				'url': '',
				'title': 'Menu 1.3'
			}]
		}]
	}
}