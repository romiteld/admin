/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.3.2
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var handleDataTableButtons = function() {
	"use strict";
    
	if ($('#data-table-buttons').length !== 0) {
		$('#data-table-buttons').DataTable({
			dom: '<"row"<"col-md-6"B><"col-md-6"fr>>t<"row"<"col-md-5"i><"col-md-7"p>>',
			buttons: [
				{ extend: 'copy', className: 'btn-sm' },
				{ extend: 'csv', className: 'btn-sm' },
				{ extend: 'excel', className: 'btn-sm' },
				{ extend: 'pdf', className: 'btn-sm' },
				{ extend: 'print', className: 'btn-sm' }
			],
			responsive: true
		});
	}
};

var TableManageButtons = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleDataTableButtons();
		}
	};
}();

$(document).ready(function() {
	TableManageButtons.init();
});