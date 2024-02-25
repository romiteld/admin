import { defineStore } from "pinia";

export const useAppSidebarMenuStore = defineStore({
  id: "appSidebarMenu",
  state: () => {
    return [{
    	text: 'Navigation',
    	is_header: true
    },
    { 
    	url: '/dashboard', icon: 'fa fa-sitemap', title: 'Dashboard',
			children: [
				{ url: '/dashboard/v1', title: 'Dashboard v1' },
				{ url: '/dashboard/v2', title: 'Dashboard v2' },
				{ url: '/dashboard/v3', title: 'Dashboard v3' }
			]
		},
		{ url: '/email', icon: 'fa fa-hdd', title: 'Email', badge: '10',
			children: [
				{ url: '/email/inbox', title: 'Inbox' },
				{ url: '/email/compose', title: 'Compose' },
				{ url: '/email/detail', title: 'Detail' }
			]
		},
		{ url: '/widgets', icon: 'fab fa-simplybuilt', title: 'Widgets', label: 'NEW' },
		{ url: '/ui', icon: 'fa fa-gem', title: 'UI Elements', label: 'NEW',
			children: [
				{ url: '/ui/general', title: 'General', highlight: true },
				{ url: '/ui/typography', title: 'Typograhy' },
				{ url: '/ui/tabs-accordions', title: 'Tabs & Accordions' },
				{ url: '/ui/modal-notification', title: 'Modal & Notification' },
				{ url: '/ui/widget-boxes', title: 'Widget Boxes' },
				{ url: '/ui/media-object', title: 'Media Object' },
				{ url: '/ui/buttons', title: 'Buttons', highlight: true },
				{ url: '/ui/icon-duotone', title: 'Duotone Icons', highlight: true },
				{ url: '/ui/icon-fontawesome', title: 'FontAwesome' },
				{ url: '/ui/icon-bootstrap-icons', title: 'Bootstrap Icons' },
				{ url: '/ui/icon-simple-line-icons', title: 'Simple Line Icons' },
				{ url: '/ui/language-bar-icon', title: 'Language Bar & Icon' },
				{ url: '/ui/social-buttons', title: 'Social Buttons' }
			]
		},
		{ url: '/bootstrap-5', img: '/assets/img/logo/logo-bs5.png', title: 'Bootstrap 5', label: 'NEW' },
		{ url: '/form', icon: 'fa fa-list-ol', title: 'Form Stuff', label: 'NEW',
			children: [
				{ url: '/form/elements', title: 'Form Elements', highlight: true },
				{ url: '/form/plugins', title: 'Form Plugins', highlight: true },
				{ url: '/form/wizards', title: 'Form Wizards', highlight: true }
			]
		},
		{ url: '/table', icon: 'fa fa-table', title: 'Tables',
			children: [
				{ url: '/table/elements', title: 'Table Elements' },
				{ url: '/table/plugins', title: 'Table Plugins' }
			]
		},
		{ url: '/pos', icon: 'fa fa-cash-register', title: 'POS System', label: 'NEW',
			children: [
				{ url: '/pos/customer-order', title: 'Customer Order' },
				{ url: '/pos/counter-checkout', title: 'Counter Checkout' },
				{ url: '/pos/kitchen-order', title: 'Kitchen Order' },
				{ url: '/pos/table-booking', title: 'Table Booking' },
				{ url: '/pos/menu-stock', title: 'Menu Stock' }
			]
		},
		{ url: '/chart', icon: 'fa fa-chart-pie', title: 'Chart', label: 'NEW',
			children: [
				{ url: '/chart/js', title: 'Chart JS' },
				{ url: '/chart/apex', title: 'Apex Chart' }
			]
		},
		{ url: '/calendar', icon: 'fa fa-calendar', title: 'Calendar' },
		{ url: '/map', icon: 'fa fa-map', title: 'Map' },
		{ url: '/gallery', icon: 'fa fa-image', title: 'Gallery' },
		{ url: '/page-option', icon: 'fa fa-cogs', title: 'Page Options', label: 'NEW',
			children: [
				{ url: '/page-option/blank', title: 'Blank Page' },
				{ url: '/page-option/with-footer', title: 'Page with Footer' },
				{ url: '/page-option/with-fixed-footer', title: 'Page with Fixed Footer', highlight: true },
				{ url: '/page-option/without-sidebar', title: 'Page without Sidebar' },
				{ url: '/page-option/with-right-sidebar', title: 'Page with Right Sidebar' },
				{ url: '/page-option/with-minified-sidebar', title: 'Page with Minified Sidebar' },
				{ url: '/page-option/with-two-sidebar', title: 'Page with Two Sidebar' },
				{ url: '/page-option/full-height', title: 'Full Height Content' },
				{ url: '/page-option/with-wide-sidebar', title: 'Page with Wide Sidebar' },
				{ url: '/page-option/with-light-sidebar', title: 'Page with Light Sidebar' },
				{ url: '/page-option/with-mega-menu', title: 'Page with Mega Menu' },
				{ url: '/page-option/with-top-menu', title: 'Page with Top Menu' },
				{ url: '/page-option/with-boxed-layout', title: 'Page with Boxed Layout' },
				{ url: '/page-option/with-mixed-menu', title: 'Page with Mixed Menu' },
				{ url: '/page-option/boxed-layout-with-mixed-menu', title: 'Boxed Layout with Mixed Menu' },
				{ url: '/page-option/with-transparent-sidebar', title: 'Page with Transparent Sidebar' },
				{ url: '/page-option/with-search-sidebar', title: 'Page with Search Sidebar', highlight: true },
				{ url: '/page-option/with-hover-sidebar', title: 'Page with Hover Sidebar', highlight: true },
			]
		},
		{ url: '/extra', icon: 'fa fa-gift', title: 'Extra', label: 'NEW',
			children: [
				{ url: '/extra/timeline', title: 'Timeline' },
				{ url: '/extra/coming-soon', title: 'Coming Soon Page' },
				{ url: '/extra/search', title: 'Search Results' },
				{ url: '/extra/invoice', title: 'Invoice' },
				{ url: '/extra/error', title: '404 Error Page' },
				{ url: '/extra/profile', title: 'Profile Page' },
				{ url: '/extra/scrum-board', title: 'Scrum Board', highlight: true },
				{ url: '/extra/cookie-acceptance-banner', title: 'Cookie Acceptance Banner', highlight: true },
				{ url: '/extra/orders', title: 'Orders', highlight: true },
				{ url: '/extra/order-details', title: 'Order Details', highlight: true },
				{ url: '/extra/products', title: 'Products', highlight: true },
				{ url: '/extra/product-details', title: 'Product Details', highlight: true },
				{ url: '/extra/file-manager', title: 'File Manager', highlight: true },
				{ url: '/extra/pricing-page', title: 'Pricing Page', highlight: true },
				{ url: '/extra/messenger-page', title: 'Messenger Page', highlight: true },
				{ url: '/extra/data-management', title: 'Data Management', highlight: true },
				{ url: '/extra/settings-page', title: 'Settings Page', highlight: true }
			]
		},
		{ url: '/user', icon: 'fa fa-key', title: 'Login & Register',
			children: [
				{ url: '/user/login-v1', title: 'Login' },
				{ url: '/user/login-v2', title: 'Login v2' },
				{ url: '/user/login-v3', title: 'Login v3' },
				{ url: '/user/register-v3', title: 'Register v3' }
			]
		},
		{ url: '/helper', icon: 'fa fa-medkit', title: 'Helper',
			children: [
				{ url: '/helper/css', title: 'Predefined CSS Classes' }
			]
		},
		{ url: '/menu', icon: 'fa fa-align-left', title: 'Menu Level',
			children: [
				{ url: '/menu/menu-1-1', title: 'Menu 1.1',
					children: [
						{ url: '/menu/menu-1-1/menu-2-1', title: 'Menu 2.1',
							children: [
								{ url: '/menu/menu-1-1/menu-2-1/menu-3-1', title: 'Menu 3.1' },
								{ url: '/menu/menu-1-1/menu-2-1/menu-3-2', title: 'Menu 3.2' }
							]
						},
						{ url: '/menu/menu-1-1/menu-2-2', title: 'Menu 2.2' },
						{ url: '/menu/menu-1-1/menu-2-3', title: 'Menu 2.3' },
					]
				},
				{ url: '/menu/menu-1-2', title: 'Menu 1.2' },
				{ url: '/menu/menu-1-3', title: 'Menu 1.3' },
			]
		}]
  }
});