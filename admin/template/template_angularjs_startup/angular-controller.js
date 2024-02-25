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
	 
	 7.0 CONTROLLER - Home
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
   7.0 CONTROLLER - Home
------------------------------- */
colorAdminApp.controller('homeController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    // javascript / jQuery here
  });
});