// Include Our Plugins
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	ngConstant = require('gulp-ng-constant'),
	templateCache = require('gulp-angular-templatecache'),
	mainBowerFiles = require('main-bower-files'),
	ngAnnotate = require('gulp-ng-annotate'),
	minifyCSS = require('gulp-minify-css'),
	plumber = require('gulp-plumber');


// Multiple Environments
// NODE_ENV=qa gulp
// NODE_ENV=production gulp
var env = process.env.NODE_ENV || 'local';

// Base Angular Module + Dependencies
var baseConfig = require('./src/base_config.json');
var envConfig = require('./src/env_config.json');

// Paths
var paths = {
	js: [
		'./src/**/module.js',
		'./src/**/*.js'
	],
	sass: ['./src/**/*.scss'],
	html: ['./dist/index.html'],
	partials: ['./src/**/*.html']
};

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
});

// Angular Environment Config
gulp.task('base', function () {
	return ngConstant({
		name: baseConfig['module'],
		constants: envConfig[env],
		deps: baseConfig['deps'],
		stream: true
	}).pipe(rename(baseConfig['module']+'.base.js'))
		.pipe(gulp.dest('./dist/js'));
});

// Compile Our Sass
gulp.task('sass', function() {
	return gulp.src(paths.sass)
		.pipe(sourcemaps.init())
		.pipe(plumber({
			errorHandler: function (err) {
				browserSync.notify(err.message);
				this.emit('end');
			}
		}))
		.pipe(sass().on('error', sass.logError))
		.pipe(concat(baseConfig['module']+'.all.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(rename(baseConfig['module']+'.all.min.css'))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

// Concatenate & Minify JS
gulp.task('javascript', function() {
	return gulp.src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(ngAnnotate())
		.pipe(concat(baseConfig['module']+'.all.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(rename(baseConfig['module']+'.all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());
});

// Compile Angular Templates
gulp.task('ng-templates', function () {
	return gulp.src(paths.partials)
		.pipe(templateCache({"filename":baseConfig['module']+".partials.js","module": baseConfig['module']}))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());
});

// Grab bower main files
gulp.task('bower-files', function () {
	return gulp.src(mainBowerFiles())
		.pipe(gulp.dest('./dist/lib'));
});

// All tasks but browser-sync
gulp.task('build', ['sass', 'javascript', 'base', 'bower-files', 'ng-templates']);

// Default Task + Watches
gulp.task('default', ['browser-sync', 'sass', 'javascript', 'base', 'bower-files', 'ng-templates'], function () {
	gulp.watch(paths.js, ['javascript']);
	gulp.watch(paths.sass, ['sass']);
	gulp.watch([paths.html, paths.partials], ['ng-templates']);
});
