/*
	TASK LIST
	------------------
	01. font-fontawesome
	02. font-bootstrap
	03. js-demo
	04. js-vendor
	05. js-app
	06. plugins
	07. css-vendor
	
	08. default-css
	09. default-css-rtl
	10. default-css-image
	11. default-watch
	12. default
	
	13. material-css
	14. material-css-rtl
	15. material-css-image
	16. material-watch
	17. material
	
	18. apple-css
	19. apple-css-rtl
	20. apple-css-image
	21. apple-watch
	22. apple
	
	23. transparent-css
	24. transparent-css-rtl
	25. transparent-css-image
	26. transparent-watch
	27. transparent
	
	28. facebook-css
	29. facebook-css-rtl
	30. facebook-css-image
	31. facebook-watch
	32. facebook
	
	33. google-css
	34. google-css-rtl
	35. google-css-image
	36. google-watch
	37. google
	
	38. all-css
*/


var gulp         = require('gulp');
var sass         = require('gulp-sass')(require('sass'));
var minifyCSS    = require('gulp-clean-css');
var concat       = require('gulp-concat');
var livereload   = require('gulp-livereload');
var connect      = require('gulp-connect');
var header       = require('gulp-header');
var uglify       = require('gulp-uglify-es').default;
var merge        = require('merge-stream');
var fileinclude  = require('gulp-file-include');
var autoprefixer = require('gulp-autoprefixer');
var distPath     = './wwwroot';


// 01. font-fontawesome
gulp.task('font-fontawesome', function() {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
  	.pipe(gulp.dest(distPath + '/webfonts/'));
});


// 02. font-bootstrap
gulp.task('font-bootstrap', function() {
	return gulp.src(['node_modules/bootstrap-icons/font/fonts/*'])
  	.pipe(gulp.dest(distPath + '/css/fonts/'));
});


// 03. js-demo
gulp.task('js-demo', function(){
	return gulp.src([ './src/js/demo/**' ])
		.pipe(gulp.dest(distPath + '/js/demo'));
});


// 04. js-vendor
gulp.task('js-vendor', function(){
  return gulp.src([
  	'node_modules/pace-js/pace.min.js',
  	'node_modules/jquery/dist/jquery.min.js',
  	'node_modules/jquery-ui-dist/jquery-ui.min.js',
  	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  	'node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js',
  	'node_modules/js-cookie/dist/js.cookie.js'
		])
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(distPath + '/js/'))
		.pipe(livereload());
});


// 05. js-app
gulp.task('js-app', function(){
  return gulp.src([
  	'./src/js/app.js',
  	])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distPath + '/js/'))
    .pipe(livereload());
});


// 06. plugins
gulp.task('plugins', function() {
	var pluginFiles = [
  	'node_modules/@fortawesome/**',
  	'node_modules/@fullcalendar/**',
		'node_modules/@highlightjs/**',
		'node_modules/@ckeditor/**',
		'node_modules/abpetkov-powerange/**',
		'node_modules/angular/**',
		'node_modules/angular-ui-bootstrap/**',
		'node_modules/angular-ui-router/**',
  	'node_modules/animate.css/**',
		'node_modules/apexcharts/**',
		'node_modules/blueimp-file-upload/**',
		'node_modules/blueimp-gallery/**',
		'node_modules/blueimp-canvas-to-blob/**',
		'node_modules/blueimp-load-image/**',
		'node_modules/blueimp-tmpl/**',
  	'node_modules/bootstrap/**',
		'node_modules/bootstrap-datepicker/**',
		'node_modules/bootstrap-daterangepicker/**',
		'node_modules/bootstrap-datetime-picker/**',
  	'node_modules/bootstrap-icons/**',
		'node_modules/bootstrap-social/**',
		'node_modules/bootstrap-timepicker/**',
		'node_modules/bootstrap3-wysihtml5-bower/**',
		'node_modules/chart.js/**',
		'node_modules/clipboard/**',
		'node_modules/d3/**',
		'node_modules/datatables.net/**',
		'node_modules/datatables.net-autofill/**',
		'node_modules/datatables.net-autofill-bs5/**',
		'node_modules/datatables.net-bs5/**',
		'node_modules/datatables.net-buttons/**',
		'node_modules/datatables.net-buttons-bs5/**',
		'node_modules/datatables.net-colreorder/**',
		'node_modules/datatables.net-colreorder-bs5/**',
		'node_modules/datatables.net-fixedcolumns/**',
		'node_modules/datatables.net-fixedcolumns-bs5/**',
		'node_modules/datatables.net-fixedheader/**',
		'node_modules/datatables.net-fixedheader-bs5/**',
		'node_modules/datatables.net-keytable/**',
		'node_modules/datatables.net-keytable-bs5/**',
		'node_modules/datatables.net-responsive/**',
		'node_modules/datatables.net-responsive-bs5/**',
		'node_modules/datatables.net-rowreorder/**',
		'node_modules/datatables.net-rowreorder-bs5/**',
		'node_modules/datatables.net-scroller/**',
		'node_modules/datatables.net-scroller-bs5/**',
		'node_modules/datatables.net-select/**',
		'node_modules/datatables.net-select-bs5/**',
		'node_modules/datepickk/**',
		'node_modules/dropzone/**',
		'node_modules/flag-icons/**',
		'node_modules/flot/**',
		'node_modules/gritter/**',
		'node_modules/intro.js/**',
		'node_modules/ion-rangeslider/**',
		'node_modules/ionicons/**',
		'node_modules/isotope-layout/**',
  	'node_modules/jquery/**',
		'node_modules/jquery-knob/**',
		'node_modules/jquery-migrate/**',
		'node_modules/jquery-mockjax/**',
		'node_modules/jquery-sparkline/**',
  	'node_modules/jquery-ui-dist/**',
		'node_modules/jquery.maskedinput/**',
  	'node_modules/js-cookie/**',
		'node_modules/jstree/**',
		'node_modules/jszip/**',
		'node_modules/jvectormap-content/**',
		'node_modules/jvectormap-next/**',
		'node_modules/kbw-countdown/**',
		'node_modules/lightbox2/**',
		'node_modules/lity/**',
		'node_modules/masonry-layout/**',
		'node_modules/moment/**',
		'node_modules/nvd3/**',
		'node_modules/oclazyload/**',
  	'node_modules/pace-js/**',
		'node_modules/parsleyjs/**',
		'node_modules/pdfmake/**',
  	'node_modules/perfect-scrollbar/**',
  	'node_modules/photoswipe/**',
		'node_modules/raphael/**',
		'node_modules/select-picker/**',
		'node_modules/select2/**',
		'node_modules/simple-line-icons/**',
		'node_modules/spectrum-colorpicker2/**',
		'node_modules/summernote/**',
		'node_modules/sweetalert/**',
		'node_modules/swiper/**',
		'node_modules/switchery/**',
		'node_modules/tag-it/**',
		'node_modules/x-editable-bs4/**'
	];
	
	return gulp.src(pluginFiles, { base: './node_modules/' })
		.pipe(gulp.dest(distPath + '/lib'));
});


// 07. css-vendor
gulp.task('css-vendor', function(){
  return gulp.src([
		'node_modules/animate.css/animate.min.css',
		'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
		'node_modules/jquery-ui-dist/jquery-ui.min.css',
		'node_modules/pace-js/themes/black/pace-theme-flash.css',
		'node_modules/perfect-scrollbar/css/perfect-scrollbar.css'
		])
		.pipe(concat('vendor.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/'))
		.pipe(livereload());
});




// 08. default-css
gulp.task('default-css', function(){
  return gulp.src([
		'./src/scss/default/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/default/'))
	.pipe(livereload());
});


// 09. default-css-rtl
gulp.task('default-css-rtl', function(){
	return gulp.src([
		'./src/scss/default/styles.scss'
	])
	.pipe(header('$enable-rtl: true;'))
	.pipe(sass())
	.pipe(concat('app-rtl.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/default/'))
	.pipe(livereload());
});


// 10. default-css-image
gulp.task('default-css-image', function(){
	return gulp.src([ './src/scss/default/images/**' ])
		.pipe(gulp.dest(distPath + '/css/default/images'));
});


// 11. default-watch
gulp.task('watch-default', function () {
	livereload.listen();
	
  gulp.watch('./src/scss/default/**/*.scss', gulp.series(gulp.parallel(['default-css'])));
  gulp.watch('js/**/*.js', gulp.series(gulp.parallel(['js-app', 'js-demo'])));
});


// 12. default
gulp.task('default', gulp.series(gulp.parallel([
	'font-fontawesome', 
	'font-bootstrap',
	'js-demo', 
	'js-vendor', 
	'js-app', 
	'css-vendor', 
	'default-css',
	'default-css-rtl',
	'default-css-image'
])));




// 13. material-css
gulp.task('material-css', function(){
  return gulp.src([
		'./src/scss/material/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/material/'))
	.pipe(livereload());
});


// 14. material-css-rtl
gulp.task('material-css-rtl', function(){
	return gulp.src([
		'./src/scss/material/styles.scss'
	])
	.pipe(header('$enable-rtl: true;'))
	.pipe(sass())
	.pipe(concat('app-rtl.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/material/'));
});


// 15. material-css-image
gulp.task('material-css-image', function(){
	return gulp.src([ './src/scss/material/images/**' ])
		.pipe(gulp.dest(distPath + '/css/material/images'));
});


// 16. material-watch
gulp.task('material-watch', function () {
	livereload.listen();
  gulp.watch('./src/scss/**/**.scss', gulp.series(gulp.parallel(['material-css'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js-app', 'js-demo'])));
});


// 17. material
gulp.task('material', gulp.series(gulp.parallel([
	'font-fontawesome',
	'font-bootstrap',
	'js-demo', 
	'js-vendor', 
	'js-app', 
	'css-vendor', 
	'material-css',
	'material-css-rtl',
	'material-css-image'
])));




// 18. apple-css
gulp.task('apple-css', function(){
  return gulp.src([
		'./src/scss/apple/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/apple/'))
	.pipe(livereload());
});


// 19. apple-css-rtl
gulp.task('apple-css-rtl', function(){
	return gulp.src([
		'./src/scss/apple/styles.scss'
	])
	.pipe(header('$enable-rtl: true;'))
	.pipe(sass())
	.pipe(concat('app-rtl.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/apple/'));
});


// 20. apple-css-image
gulp.task('apple-css-image', function(){
	return gulp.src([ './src/scss/apple/images/**' ])
		.pipe(gulp.dest(distPath + '/css/apple/images'));
});


// 21. apple-watch
gulp.task('apple-watch', function () {
	livereload.listen();
  gulp.watch('./src/scss/**/**.scss', gulp.series(gulp.parallel(['apple-css'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js-app', 'js-demo'])));
});


// 22. apple
gulp.task('apple', gulp.series(gulp.parallel([
	'font-fontawesome',
	'font-bootstrap',
	'js-demo', 
	'js-vendor', 
	'js-app', 
	'css-vendor', 
	'apple-css',
	'apple-css-rtl',
	'apple-css-image'
])));




// 23. transparent-css
gulp.task('transparent-css', function(){
  return gulp.src([
		'./src/scss/transparent/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/transparent/'))
	.pipe(livereload());
});


// 24. transparent-css-rtl
gulp.task('transparent-css-rtl', function(){
	return gulp.src([
		'./src/scss/transparent/styles.scss'
	])
	.pipe(header('$enable-rtl: true;'))
	.pipe(sass())
	.pipe(concat('app-rtl.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/transparent/'));
});


// 25. transparent-css-image
gulp.task('transparent-css-image', function(){
	return gulp.src([ './src/scss/transparent/images/**' ])
		.pipe(gulp.dest(distPath + '/css/transparent/images'));
});


// 26. transparent-watch
gulp.task('transparent-watch', function () {
	livereload.listen();
  gulp.watch('./src/scss/**/**.scss', gulp.series(gulp.parallel(['transparent-css'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js-app', 'js-demo'])));
});


// 27. transparent
gulp.task('transparent', gulp.series(gulp.parallel([
	'font-fontawesome',
	'font-bootstrap',
	'js-demo', 
	'js-vendor', 
	'js-app', 
	'css-vendor', 
	'transparent-css',
	'transparent-css-rtl',
	'transparent-css-image'
])));




// 28. facebook-css
gulp.task('facebook-css', function(){
  return gulp.src([
		'./src/scss/facebook/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/facebook/'))
	.pipe(livereload());
});


// 29. facebook-css-rtl
gulp.task('facebook-css-rtl', function(){
	return gulp.src([
		'./src/scss/facebook/styles.scss'
	])
	.pipe(header('$enable-rtl: true;'))
	.pipe(sass())
	.pipe(concat('app-rtl.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/facebook/'));
});


// 30. facebook-css-image
gulp.task('facebook-css-image', function(){
	return gulp.src([ './src/scss/facebook/images/**' ])
		.pipe(gulp.dest(distPath + '/css/facebook/images'));
});


// 31. facebook-watch
gulp.task('facebook-watch', function () {
	livereload.listen();
  gulp.watch('./src/scss/**/**.scss', gulp.series(gulp.parallel(['facebook-css'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js-app', 'js-demo'])));
});


// 32. facebook
gulp.task('facebook', gulp.series(gulp.parallel([
	'font-fontawesome',
	'font-bootstrap',
	'js-demo', 
	'js-vendor', 
	'js-app', 
	'css-vendor', 
	'facebook-css',
	'facebook-css-rtl',
	'facebook-css-image'
])));




// 33. google-css
gulp.task('google-css', function(){
  return gulp.src([
		'./src/scss/google/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/google/'))
	.pipe(livereload());
});


// 34. google-css-rtl
gulp.task('google-css-rtl', function(){
	return gulp.src([
		'./src/scss/google/styles.scss'
	])
	.pipe(header('$enable-rtl: true;'))
	.pipe(sass())
	.pipe(concat('app-rtl.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/css/google/'));
});


// 35. google-css-image
gulp.task('google-css-image', function(){
	return gulp.src([ './src/scss/google/images/**' ])
		.pipe(gulp.dest(distPath + '/css/google/images'));
});


// 36. google-watch
gulp.task('google-watch', function () {
	livereload.listen();
  gulp.watch('./src/scss/**/**.scss', gulp.series(gulp.parallel(['google-css'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js-app', 'js-demo'])));
});


// 37. google
gulp.task('google', gulp.series(gulp.parallel([
	'font-fontawesome',
	'font-bootstrap',
	'js-demo', 
	'js-vendor', 
	'js-app', 
	'css-vendor', 
	'google-css',
	'google-css-rtl',
	'google-css-image'
])));


// 38. all-css
gulp.task('all-css', gulp.series(gulp.parallel([
	'default-css',
	'default-css-rtl',
	'default-css-image',
	'apple-css',
	'apple-css-rtl',
	'apple-css-image',
	'material-css',
	'material-css-rtl',
	'material-css-image',
	'facebook-css',
	'facebook-css-rtl',
	'facebook-css-image',
	'transparent-css',
	'transparent-css-rtl',
	'transparent-css-image',
	'google-css',
	'google-css-rtl',
	'google-css-image'
])));