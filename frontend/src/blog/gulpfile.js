var gulp         = require('gulp');
var sass         = require('gulp-sass')(require('sass'));
var minifyCSS    = require('gulp-clean-css');
var concat       = require('gulp-concat');
var sourcemaps   = require('gulp-sourcemaps');
var livereload   = require('gulp-livereload');
var connect      = require('gulp-connect');
var header       = require('gulp-header');
var uglify       = require('gulp-uglify-es').default;
var merge        = require('merge-stream');
var fileinclude  = require('gulp-file-include');
var autoprefixer = require('gulp-autoprefixer');
var distPath     = '../../template';
var theme        = 'blog';
var file         = 'blog';

gulp.task('font-fontawesome', function() {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
  	.pipe(gulp.dest(distPath + '/assets/css/webfonts/'));
});

gulp.task('font-bootstrap', function() {
	return gulp.src(['node_modules/bootstrap-icons/font/fonts/*'])
  	.pipe(gulp.dest(distPath + '/assets/css/'+ theme +'/fonts/'));
});

gulp.task('html', function(){
  return gulp.src(distPath + '/**/*.html')
  	.pipe(livereload());
});

gulp.task('css-vendor', function(){
  return gulp.src([
		'node_modules/animate.css/animate.min.css',
		'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
		'node_modules/jquery-ui-dist/jquery-ui.min.css',
		'node_modules/pace-js/themes/black/pace-theme-flash.css',
		'node_modules/bootstrap-icons/font/bootstrap-icons.css'
	])
	.pipe(sass())
	.pipe(concat('vendor.min.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/assets/css/'+ theme +'/'))
	.pipe(livereload());
});

gulp.task('css-app', function(){
  return gulp.src([
		'scss/styles.scss'
	])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(gulp.dest(distPath + '/assets/css/'+ theme +'/'))
	.pipe(livereload());
});

gulp.task('js-vendor', function(){
  return gulp.src([
  	'node_modules/pace-js/pace.min.js',
  	'node_modules/jquery/dist/jquery.min.js',
  	'node_modules/jquery-ui-dist/jquery-ui.min.js',
  	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  	'node_modules/js-cookie/dist/js.cookie.js'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('vendor.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(distPath + '/assets/js/'+ theme +'/'))
	.pipe(livereload());
});

gulp.task('js-app', function(){
  return gulp.src([
  	'js/app.js',
	])
	.pipe(sourcemaps.init())
	.pipe(concat('app.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(distPath + '/assets/js/'+ theme +'/'))
	.pipe(livereload());
});

gulp.task('plugins', function() {
	var pluginFiles = [
		'node_modules/animate.css/**',
		'node_modules/@fortawesome/**',
		'node_modules/jquery-ui-dist/**',
		'node_modules/pace-js/**',
		'node_modules/bootstrap-icons/**',
  	'node_modules/jquery/**',
  	'node_modules/bootstrap/dist/**',
  	'node_modules/js-cookie/**',
	];
	return gulp.src(pluginFiles, { base: './node_modules/' })
		.pipe(gulp.dest(distPath + '/assets/plugins'));
});

gulp.task('watch', function () {
	livereload.listen();
  gulp.watch(['html/**/**.html', 'html/*.html'], gulp.series(gulp.parallel(['fileinclude'])));
  gulp.watch('js/**/*.js', gulp.series(gulp.parallel(['js-app'])));
  gulp.watch(['scss/**/**.scss', 'scss/*.scss'], gulp.series(gulp.parallel(['css-app'])));
});

gulp.task('fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'default'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_'+ file +''))
    .pipe(livereload());
});

gulp.task('webserver', function() {
  connect.server({
		name: 'Color Admin - Blog',
		root: [distPath, distPath + '/template_'+ file +'/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

gulp.task('default', gulp.series(gulp.parallel([
	'font-fontawesome', 
	'font-bootstrap', 
	'css-vendor', 
	'css-app', 
	'js-vendor', 
	'js-app', 
	'webserver', 
	'watch', 
	'fileinclude'
])));