/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 5
Version: 5.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
			APPS CONTROLLER TABLE
	----------------------------
	 
	1.0 CONTROLLER - App
	2.0 CONTROLLER - Sidebar
	3.0 CONTROLLER - Right Sidebar
	4.0 CONTROLLER - Header
	5.0 CONTROLLER - Theme Panel
	6.0 CONTROLLER - Top Menu
	
	7.0 CONTROLLER - Dashboard v1
	8.0 CONTROLLER - Dashboard v2
	9.0 CONTROLLER - Dashboard v3
	
	10.0 CONTROLLER - Email Inbox
	11.0 CONTROLLER - Email Compose
	12.0 CONTROLLER - Email Detail
	
	13.0 CONTROLLER - UI Widget Boxes
	14.0 CONTROLLER - UI Typography
	15.0 CONTROLLER - UI FontAwesome
	16.0 CONTROLLER - UI Bootstrap Icons
	17.0 CONTROLLER - UI General
	18.0 CONTROLLER - UI Buttons
	19.0 CONTROLLER - UI Modal Notification
	20.0 CONTROLLER - UI Tree
	21.0 CONTROLLER - UI Language Bar
	22.0 CONTROLLER - UI Unlimited Tabs
	23.0 CONTROLLER - UI Tabs Accordions
	24.0 CONTROLLER - UI Media Object
	25.0 CONTROLLER - UI Simple Line Icons
	26.0 CONTROLLER - UI Social Buttons
	27.0 CONTROLLER - UI Tour
	28.0 CONTROLLER - UI Offcanvas Toasts
	29.0 CONTROLLER - UI Ionicons
	30.0 CONTROLLER - UI Duotone Icons
	
	31.0 CONTROLLER - Form Plugins
	32.0 CONTROLLER - Form Slider + Switcher
	33.0 CONTROLLER - Form Validation
	34.0 CONTROLLER - Form Elements
	35.0 CONTROLLER - Form Dropzone
	36.0 CONTROLLER - Form Wizards
	37.0 CONTROLLER - Form Summernote
	38.0 CONTROLLER - Form WYSIWYG
	39.0 CONTROLLER - Form Multiple File Upload
	40.0 CONTROLLER - Form X-Editable
	
	41.0 CONTROLLER - Table Basic
	42.0 CONTROLLER - Table Manage Default
	43.0 CONTROLLER - Table Manage Autofill
	44.0 CONTROLLER - Table Manage Buttons
	45.0 CONTROLLER - Table Manage ColReorder
	46.0 CONTROLLER - Table Manage Fixed Columns
	47.0 CONTROLLER - Table Manage Fixed Header
	48.0 CONTROLLER - Table Manage KeyTable
	49.0 CONTROLLER - Table Manage Responsive
	50.0 CONTROLLER - Table Manage RowReorder
	51.0 CONTROLLER - Table Manage Scroller
	52.0 CONTROLLER - Table Manage Select
	53.0 CONTROLLER - Table Manage Extension Combination
	
	54.0 CONTROLLER - Chart Flot
	55.0 CONTROLLER - Chart JS
	56.0 CONTROLLER - Chart d3
	57.0 CONTROLLER - Chart Apex
	
	58.0 CONTROLLER - Calendar
	
	59.0 CONTROLLER - Vector Map
	60.0 CONTROLLER - Google Map
	
	61.0 CONTROLLER - Gallery V1
	62.0 CONTROLLER - Gallery V2
	
	63.0 CONTROLLER - Page with Footer
	64.0 CONTROLLER - Page with Fixed Footer
	65.0 CONTROLLER - Page without Sidebar
	66.0 CONTROLLER - Page with Right Sidebar
	67.0 CONTROLLER - Page with Minified Sidebar
	68.0 CONTROLLER - Page with Two Sidebar
	69.0 CONTROLLER - Full Height Content
	70.0 CONTROLLER - Page with Wide Sidebar
	71.0 CONTROLLER - Page with Light Sidebar
	72.0 CONTROLLER - Page with Mega Menu
	73.0 CONTROLLER - Page with Top Menu
	74.0 CONTROLLER - Page with Boxed Layout
	75.0 CONTROLLER - Page with Mixed Menu
	76.0 CONTROLLER - Page Boxed Layout with Mixed Menu
	77.0 CONTROLLER - Page with Transparent Sidebar
	78.0 CONTROLLER - Page with Search Sidebar
	79.0 CONTROLLER - Page with Hover Sidebar
	
	80.0 CONTROLLER - Timeline
	81.0 CONTROLLER - Coming Soon
	82.0 CONTROLLER - Profile Page
	83.0 CONTROLLER - 404 Error
	84.0 CONTROLLER - Product Details
	85.0 CONTROLLER - File Manager
	86.0 CONTROLLER - Pricing Page
	87.0 CONTROLLER - Messenger Page
	88.0 CONTROLLER - Data Management
	89.0 CONTROLLER - Settings Page
	
	90.0 CONTROLLER - Login V1
	91.0 CONTROLLER - Login V2
	92.0 CONTROLLER - Login V3
	93.0 CONTROLLER - Register V3
	
	94.0 CONTROLLER - Widgets
	
	95.0 CONTROLLER - POS Counter Checkout
	96.0 CONTROLLER - POS Customer Order
	97.0 CONTROLLER - POS Kitchen Order
	98.0 CONTROLLER - POS Kitchen Order
	99.0 CONTROLLER - POS Kitchen Order

	100.0 CONTROLLER - Bootstrap 5
	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
*/

/* -------------------------------
   1.0 CONTROLLER - App
------------------------------- */
colorAdminApp.controller('appController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.$on('$includeContentLoaded', function () {
    App.restartGlobalFunction();
  });
  $scope.$on('$viewContentLoaded', function () {
  
  });
  $scope.$on('$stateChangeStart', function () {
    // reset layout setting
    $rootScope.setting.layout.paceTop = false;
    $rootScope.setting.layout.appTopMenu = false;
    $rootScope.setting.layout.appBoxedLayout = false;
    $rootScope.setting.layout.appSidebarMinified = false;
    $rootScope.setting.layout.appSidebarEnd = false;
    $rootScope.setting.layout.appSidebarTwo = false;
    $rootScope.setting.layout.appSidebarNone = false;
    $rootScope.setting.layout.appSidebarTransparent = false;
    $rootScope.setting.layout.appSidebarWide = false;
    $rootScope.setting.layout.appSidebarLight = false;
    $rootScope.setting.layout.appSidebarSearch = false;
    $rootScope.setting.layout.appSidebarHover = false;
    $rootScope.setting.layout.appHeaderDark = false;
    $rootScope.setting.layout.appHeaderMegaMenu = false;
    $rootScope.setting.layout.appHeaderLanguageBar = false;
    $rootScope.setting.layout.appHeaderNone = false;
    $rootScope.setting.layout.appContentFullHeight = false;
    $rootScope.setting.layout.appContentClass = '';
    $rootScope.setting.layout.appFooterFixed = false;

    App.scrollTop();
    $('.pace .pace-progress').addClass('hide');
    $('.pace').removeClass('pace-inactive');
  });
  $scope.$on('$stateChangeSuccess', function () {
    Pace.restart();
    App.initPageLoad();
    
    $('[data-dismiss="app-sidebar-mobile"]').trigger('click');
    setTimeout(function () {
      App.initLocalStorage();
      App.initComponent();
    }, 0);
    if ($('#top-menu').length !== 0) {
      $('#top-menu').removeAttr('style');
    }
  });
  $scope.$on('$stateNotFound', function () {
    Pace.stop();
  });
  $scope.$on('$stateChangeError', function () {
    Pace.stop();
  });
}]);


/* -------------------------------
   2.0 CONTROLLER - Sidebar
------------------------------- */
colorAdminApp.controller('sidebarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	App.initSidebar();
  });
});


/* -------------------------------
   3.0 CONTROLLER - Right Sidebar
------------------------------- */
colorAdminApp.controller('rightSidebarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   4.0 CONTROLLER - Header
------------------------------- */
colorAdminApp.controller('headerController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   5.0 CONTROLLER - Theme Panel
------------------------------- */
colorAdminApp.controller('themePanelController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	App.initThemePanel();
  });
});


/* -------------------------------
   6.0 CONTROLLER - Top Menu
------------------------------- */
colorAdminApp.controller('topMenuController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    handleUnlimitedTopMenuRender();
  });
});


/* -------------------------------
   7.0 CONTROLLER - Dashboard v1
------------------------------- */
colorAdminApp.controller('dashboardController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
   $.getScript('../assets/js/demo/dashboard.js');
  });
});


/* -------------------------------
   8.0 CONTROLLER - Dashboard v2
------------------------------- */
colorAdminApp.controller('dashboardV2Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/dashboard-v2.js');
  });
});


/* -------------------------------
   9.0 CONTROLLER - Dashboard v3
------------------------------- */
colorAdminApp.controller('dashboardV3Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/dashboard-v3.js');
  });
});


/* -------------------------------
   10.0 CONTROLLER - Email Inbox
------------------------------- */
colorAdminApp.controller('emailInboxController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0';
  $rootScope.setting.layout.appContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/email-inbox.demo.js');
  });
});


/* -------------------------------
   11.0 CONTROLLER - Email Compose
------------------------------- */
colorAdminApp.controller('emailComposeController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0';
  $rootScope.setting.layout.appContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/email-compose.demo.js');
  });
});


/* -------------------------------
   12.0 CONTROLLER - Email Detail
------------------------------- */
colorAdminApp.controller('emailDetailController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0';
  $rootScope.setting.layout.appContentFullHeight = true;
});


/* -------------------------------
   13.0 CONTROLLER - UI Widget Boxes
------------------------------- */
colorAdminApp.controller('uiWidgetBoxesController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   14.0 CONTROLLER - UI Typography
------------------------------- */
colorAdminApp.controller('uiTypographyController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   15.0 CONTROLLER - UI FontAwesome
------------------------------- */
colorAdminApp.controller('uiIconFontAwesomeController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   16.0 CONTROLLER - UI Bootstrap Icons
------------------------------- */
colorAdminApp.controller('uiIconBootstrapIconsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   17.0 CONTROLLER - UI General
------------------------------- */
colorAdminApp.controller('uiGeneralController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   18.0 CONTROLLER - UI Buttons
------------------------------- */
colorAdminApp.controller('uiButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   19.0 CONTROLLER - UI Modal Notification
------------------------------- */
colorAdminApp.controller('uiModalNotificationController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/ui-modal-notification.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   20.0 CONTROLLER - UI Tree
------------------------------- */
colorAdminApp.controller('uiTreeController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/ui-tree.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   21.0 CONTROLLER - UI Language Bar
------------------------------- */
colorAdminApp.controller('uiLanguageBarIconController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderLanguageBar = true;
  
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   22.0 CONTROLLER - UI Unlimited Tabs
------------------------------- */
colorAdminApp.controller('uiUnlimitedTabsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	handleUnlimitedTabsRender();
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   23.0 CONTROLLER - UI Tabs Accordions
------------------------------- */
colorAdminApp.controller('uiTabsAccordionsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   24.0 CONTROLLER - UI Media Object
------------------------------- */
colorAdminApp.controller('uiMediaObjectController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   25.0 CONTROLLER - UI Simple Line Icons
------------------------------- */
colorAdminApp.controller('uiIconSimpleLineIconsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   26.0 CONTROLLER - UI Social Buttons
------------------------------- */
colorAdminApp.controller('uiSocialButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   27.0 CONTROLLER - UI Tour
------------------------------- */
colorAdminApp.controller('uiTourController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   28.0 CONTROLLER - UI Offcanvas Toasts
------------------------------- */
colorAdminApp.controller('uiOffcanvasToastsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   29.0 CONTROLLER - UI Ionicons
------------------------------- */
colorAdminApp.controller('uiIconIoniconsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   30.0 CONTROLLER - UI Duotone Icons
------------------------------- */
colorAdminApp.controller('uiIconDuotoneController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   31.0 CONTROLLER - Form Plugins
------------------------------- */
colorAdminApp.controller('formPluginsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-plugins.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   32.0 CONTROLLER - Form Slider + Switcher
------------------------------- */
colorAdminApp.controller('formSliderSwitcherController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-slider-switcher.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   33.0 CONTROLLER - Form Validation
------------------------------- */
colorAdminApp.controller('formValidationController', function ($scope, $rootScope, $state) {
  $scope.submitForm = function (form) {
    if (!form.$valid) {
      $('form[name="' + form.$name + '"] *').tooltip('dispose');
      angular.forEach(form.$error, function (field) {
        angular.forEach(field, function (errorField) {
          errorField.$setTouched();
          var targetContainer = 'form[name="' + form.$name + '"] [name="' + errorField.$name + '"]';
          var targetMessage = (errorField.$error.required) ? 'This is required' : '';
          targetMessage = (errorField.$error.email) ? 'Invalid email' : targetMessage;
          targetMessage = (errorField.$error.url) ? 'Invalid website url' : targetMessage;
          targetMessage = (errorField.$error.number) ? 'Only number is allowed' : targetMessage;
          targetMessage = (errorField.$name == 'alphabets') ? 'Only alphabets is allowed' : targetMessage;
          targetMessage = (errorField.$error.minlength) ? 'You must provide at least 20 characters for this field' : targetMessage;
          targetMessage = (errorField.$error.maxlength) ? 'You must not exceed the maximum of 200 characters for this field' : targetMessage;

          $(targetContainer).first().tooltip({
            placement: 'top',
            trigger: 'normal',
            title: targetMessage,
            container: 'body',
            animation: false
          });
          $(targetContainer).first().tooltip('show');
        });
      });
    }
  };
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   34.0 CONTROLLER - Form Elements
------------------------------- */
colorAdminApp.controller('formElementsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   35.0 CONTROLLER - Form Dropzone
------------------------------- */
colorAdminApp.controller('dropzoneController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
    new Dropzone("#demo-upload");
  });
});


/* -------------------------------
   36.0 CONTROLLER - Form Wizards
------------------------------- */
colorAdminApp.controller('formWizardsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   37.0 CONTROLLER - Form Summernote
------------------------------- */
colorAdminApp.controller('summernoteController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-summernote.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   38.0 CONTROLLER - Form WYSIWYG
------------------------------- */
colorAdminApp.controller('wysiwygController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-wysiwyg.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   39.0 CONTROLLER - Form Multiple File Upload
------------------------------- */
colorAdminApp.controller('multipleFileUploadController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-multiple-upload.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   40.0 CONTROLLER - Form X-Editable
------------------------------- */
colorAdminApp.controller('xEditableController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-editable.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   41.0 CONTROLLER - Table Basic
------------------------------- */
colorAdminApp.controller('tableBasicController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   42.0 CONTROLLER - Table Manage Default
------------------------------- */
colorAdminApp.controller('tableManageDefaultController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-default.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   43.0 CONTROLLER - Table Manage Autofill
------------------------------- */
colorAdminApp.controller('tableManageAutofillController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-autofill.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   44.0 CONTROLLER - Table Manage Buttons
------------------------------- */
colorAdminApp.controller('tableManageButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-buttons.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   45.0 CONTROLLER - Table Manage ColReorder
------------------------------- */
colorAdminApp.controller('tableManageColReorderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-colreorder.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   46.0 CONTROLLER - Table Manage Fixed Columns
------------------------------- */
colorAdminApp.controller('tableManageFixedColumnsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-fixed-columns.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   47.0 CONTROLLER - Table Manage Fixed Header
------------------------------- */
colorAdminApp.controller('tableManageFixedHeaderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-fixed-header.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   48.0 CONTROLLER - Table Manage KeyTable
------------------------------- */
colorAdminApp.controller('tableManageKeyTableController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-keytable.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   49.0 CONTROLLER - Table Manage Responsive
------------------------------- */
colorAdminApp.controller('tableManageResponsiveController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-responsive.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   50.0 CONTROLLER - Table Manage RowReorder
------------------------------- */
colorAdminApp.controller('tableManageRowReorderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-rowreorder.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   51.0 CONTROLLER - Table Manage Scroller
------------------------------- */
colorAdminApp.controller('tableManageScrollerController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-scroller.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   52.0 CONTROLLER - Table Manage Select
------------------------------- */
colorAdminApp.controller('tableManageSelectController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-select.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   53.0 CONTROLLER - Table Manage Extension Combination
------------------------------- */
colorAdminApp.controller('tableManageCombineController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-combine.demo.js');
    $.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   54.0 CONTROLLER - Chart Flot
------------------------------- */
colorAdminApp.controller('chartFlotController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
		$.getScript('../assets/js/demo/chart-flot.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   55.0 CONTROLLER - Chart JS
------------------------------- */
colorAdminApp.controller('chartJsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/chart-js.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   56.0 CONTROLLER - Chart d3
------------------------------- */
colorAdminApp.controller('chartD3Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/chart-d3.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   57.0 CONTROLLER - Chart Apex
------------------------------- */
colorAdminApp.controller('chartApexController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/chart-apex.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   58.0 CONTROLLER - Calendar
------------------------------- */
colorAdminApp.controller('calendarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/calendar.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   59.0 CONTROLLER - Vector Map
------------------------------- */
colorAdminApp.controller('mapVectorController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0 position-relative';
	$rootScope.setting.layout.appContentFullHeight = true;
	
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/map-vector.demo.js');
  });
});


/* -------------------------------
   60.0 CONTROLLER - Google Map
------------------------------- */
colorAdminApp.controller('mapGoogleController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentClass = 'p-0 position-relative';
	$rootScope.setting.layout.appContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/map-google.demo.js');
  });
});


/* -------------------------------
   61.0 CONTROLLER - Gallery V1
------------------------------- */
colorAdminApp.controller('galleryController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/gallery.demo.js');
  });
});


/* -------------------------------
   62.0 CONTROLLER - Gallery V2
------------------------------- */
colorAdminApp.controller('galleryV2Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  });
});


/* -------------------------------
   63.0 CONTROLLER - Page with Footer
------------------------------- */
colorAdminApp.controller('pageWithFooterController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   64.0 CONTROLLER - Page with Fixed Footer
------------------------------- */
colorAdminApp.controller('pageWithFixedFooterController', function ($scope, $rootScope, $state) {
	$rootScope.setting.layout.appContentFullHeight = true;
	$rootScope.setting.layout.appContentClass = 'p-0';
	
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   65.0 CONTROLLER - Page without Sidebar
------------------------------- */
colorAdminApp.controller('pageWithoutSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarNone = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   66.0 CONTROLLER - Page with Right Sidebar
------------------------------- */
colorAdminApp.controller('pageWithRightSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarEnd = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   67.0 CONTROLLER - Page with Minified Sidebar
------------------------------- */
colorAdminApp.controller('pageWithMinifiedSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarMinified = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   68.0 CONTROLLER - Page with Two Sidebar
------------------------------- */
colorAdminApp.controller('pageWithTwoSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarTwo = true;
  
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/page-with-two-sidebar.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   69.0 CONTROLLER - Full Height Content
------------------------------- */
colorAdminApp.controller('pageFullHeightContentController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';
  
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   70.0 CONTROLLER - Page with Wide Sidebar
------------------------------- */
colorAdminApp.controller('pageWithWideSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarWide = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   71.0 CONTROLLER - Page with Light Sidebar
------------------------------- */
colorAdminApp.controller('pageWithLightSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderDark = true;
  $rootScope.setting.layout.appSidebarLight = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   72.0 CONTROLLER - Page with Mega Menu
------------------------------- */
colorAdminApp.controller('pageWithMegaMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderMegaMenu = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   73.0 CONTROLLER - Page with Top Menu
------------------------------- */
colorAdminApp.controller('pageWithTopMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appTopMenu = true;
  $rootScope.setting.layout.appSidebarNone = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   74.0 CONTROLLER - Page with Boxed Layout
------------------------------- */
colorAdminApp.controller('pageWithBoxedLayoutController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appBoxedLayout = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   75.0 CONTROLLER - Page with Mixed Menu
------------------------------- */
colorAdminApp.controller('pageWithMixedMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appTopMenu = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   76.0 CONTROLLER - Page Boxed Layout with Mixed Menu
------------------------------- */
colorAdminApp.controller('pageBoxedLayoutWithMixedMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appBoxedLayout = true;
  $rootScope.setting.layout.appTopMenu = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   77.0 CONTROLLER - Page with Transparent Sidebar
------------------------------- */
colorAdminApp.controller('pageWithTransparentSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarTransparent = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   78.0 CONTROLLER - Page with Search Sidebar
------------------------------- */
colorAdminApp.controller('pageWithSearchSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarSearch = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
		App.initSidebar();
	});
});


/* -------------------------------
   79.0 CONTROLLER - Page with Hover Sidebar
------------------------------- */
colorAdminApp.controller('pageWithHoverSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appSidebarHover = true;
  
	angular.element(document).ready(function () {
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
	});
});


/* -------------------------------
   80.0 CONTROLLER - Timeline
------------------------------- */
colorAdminApp.controller('extraTimelineController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/timeline.demo.js');
  });
});


/* -------------------------------
   81.0 CONTROLLER - Coming Soon
------------------------------- */
colorAdminApp.controller('comingSoonController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appBgWhite = true;
  $rootScope.setting.layout.paceTop = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/coming-soon.demo.js');
  });
});


/* -------------------------------
   82.0 CONTROLLER - Profile Page
------------------------------- */
colorAdminApp.controller('profileController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/profile.demo.js');
  });
});


/* -------------------------------
   83.0 CONTROLLER - 404 Error
------------------------------- */
colorAdminApp.controller('errorController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';
});


/* -------------------------------
   84.0 CONTROLLER - Product Details
------------------------------- */
colorAdminApp.controller('productDetailsController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/product-details.demo.js');
  });
});


/* -------------------------------
   85.0 CONTROLLER - File Manager
------------------------------- */
colorAdminApp.controller('fileManagerController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderDark = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appSidebarMinified = true;
  
	angular.element(document).ready(function () {
		$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');
    $.getScript('../assets/js/demo/file-manager.demo.js');
  });
});


/* -------------------------------
   86.0 CONTROLLER - Pricing Page
------------------------------- */
colorAdminApp.controller('pricingPageController', function ($scope, $rootScope, $state) {
	$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');
});


/* -------------------------------
   87.0 CONTROLLER - Messenger Page
------------------------------- */
colorAdminApp.controller('messengerPageController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderDark = true;
  $rootScope.setting.layout.appContentClass = 'p-0 bg-component';
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appSidebarMinified = true;
  
	$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');
});


/* -------------------------------
   88.0 CONTROLLER - Data Management
------------------------------- */
colorAdminApp.controller('dataManagementController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderDark = true;
  $rootScope.setting.layout.appContentClass = 'p-0 bg-component';
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appSidebarMinified = true;
  
	$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');
	$.getScript('../assets/js/demo/page-data-management.demo.js');
});


/* -------------------------------
   89.0 CONTROLLER - Settings Page
------------------------------- */
colorAdminApp.controller('settingsPageController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
		$.getScript('https://code.iconify.design/3/3.1.1/iconify.min.js');
		$.getScript('../assets/js/demo/sidebar-scrollspy.demo.js');
  });
});


/* -------------------------------
   90.0 CONTROLLER - Login V1
------------------------------- */
colorAdminApp.controller('loginV1Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   91.0 CONTROLLER - Login V2
------------------------------- */
colorAdminApp.controller('loginV2Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/login-v2.demo.js');
  });
});


/* -------------------------------
   92.0 CONTROLLER - Login V3
------------------------------- */
colorAdminApp.controller('loginV3Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   93.0 CONTROLLER - Register V3
------------------------------- */
colorAdminApp.controller('registerV3Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   94.0 CONTROLLER - Widgets
------------------------------- */
colorAdminApp.controller('widgetController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/widget.demo.js');
		$.getScript('../assets/plugins/@highlightjs/cdn-assets/highlight.min.js', function() {
			$.getScript('../assets/js/demo/render.highlight.js');
		});
  });
});


/* -------------------------------
   95.0 CONTROLLER - POS Counter Checkout
------------------------------- */
colorAdminApp.controller('posCounterCheckoutController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-header.demo.js');
  	$.getScript('../assets/js/demo/pos-counter-checkout.demo.js');
  });
});


/* -------------------------------
   96.0 CONTROLLER - POS Customer Order
------------------------------- */
colorAdminApp.controller('posCustomerOrderController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-customer-order.demo.js');
  });
});


/* -------------------------------
   97.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posKitchenOrderController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-header.demo.js');
  });
});


/* -------------------------------
   98.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posMenuStockController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-header.demo.js');
  });
});


/* -------------------------------
   99.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posTableBookingController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.appHeaderNone = true;
  $rootScope.setting.layout.appSidebarNone = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.appContentFullHeight = true;
  $rootScope.setting.layout.appContentClass = 'p-0';

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-header.demo.js');
  });
});


/* -------------------------------
   100.0 CONTROLLER - Bootstrap 5
------------------------------- */
colorAdminApp.controller('bootstrap5Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
		$.getScript('../assets/plugins/masonry-layout/dist/masonry.pkgd.min.js', function() {
		});
  });
});