// Include Plugins
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
	plumber = require('gulp-plumber'),
	template = require('gulp-template'),
	proxyMiddleware = require('http-proxy-middleware');


// Multiple Environments
// NODE_ENV=qa gulp
// NODE_ENV=production gulp
var env = process.env.NODE_ENV || 'local';

// Configuration
var baseConfig = require('./src/base_config.json');
var gulpConfig = require('./src/gulp_config.json');

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: gulpConfig.public,
			//https: true,
			middleware: [
				proxyMiddleware(gulpConfig.api_proxy, {
					target: baseConfig['constant'][env]['EnvironmentConfig']['api'],
					changeOrigin: true
				})
			]
		}
	});
});

// Angular Environment Config
gulp.task('base', function () {
	return ngConstant({
		name: baseConfig['module'],
		constants: baseConfig['constant'][env],
		deps: baseConfig['deps'],
		stream: true
	}).pipe(rename(baseConfig['module']+'.base.js'))
		.pipe(gulp.dest(gulpConfig.public + '/js'));
});

// Compile Our Sass
gulp.task('sass', function() {
	return gulp.src(gulpConfig.sass)
		.pipe(sourcemaps.init())
		.pipe(plumber({
			errorHandler: function (err) {
				browserSync.notify(err.message);
				console.log(err.message);
				this.emit('end');
			}
		}))
		.pipe(sass().on('error', sass.logError))
		.pipe(concat(baseConfig['module'] + '.all.css'))
		.pipe(gulp.dest(gulpConfig.public + '/css'))
		.pipe(rename(baseConfig['module'] + '.all.min.css'))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(gulpConfig.public + '/css'))
		.pipe(browserSync.stream());
});

// Concatenate & Minify JS
gulp.task('javascript', function() {
	return gulp.src(gulpConfig.js)
		.pipe(sourcemaps.init())
		.pipe(plumber({
			errorHandler: function (err) {
				browserSync.notify(err.message);
				console.log(err.message);
				this.emit('end');
			}
		}))
		.pipe(ngAnnotate())
		.pipe(concat(baseConfig['module']+'.all.js'))
		.pipe(gulp.dest(gulpConfig.public+'/js'))
		.pipe(rename(baseConfig['module']+'.all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest(gulpConfig.public + '/js'))
		.pipe(browserSync.stream());
});

// Compile Angular Templates
gulp.task('ng-templates', function () {
	return gulp.src(gulpConfig.partials)
		.pipe(templateCache({"filename":baseConfig['module']+".partials.js","module": baseConfig['module']}))
		.pipe(gulp.dest(gulpConfig.public + '/js'))
		.pipe(browserSync.stream());
});

// Grab bower main files
gulp.task('bower-files', function () {
	return gulp.src(mainBowerFiles())
		.pipe(gulp.dest(gulpConfig.public + '/lib'));
});

// Assets for public
gulp.task('assets', function () {
	return gulp.src(gulpConfig.assets)
		.pipe(gulp.dest(gulpConfig.public))
});

// Partial for CMS
gulp.task('component-partial', function () {
	return gulp.src('./src/module.html')
		.pipe(template({module: baseConfig['module']}))
		.pipe(rename(baseConfig['module'] + '.html'))
		.pipe(gulp.dest(gulpConfig.public));
});

// Dev index for component development
gulp.task('dev-index', function () {
	return gulp.src('./src/index.html')
		.pipe(template({module: baseConfig['module']}))
		.pipe(gulp.dest(gulpConfig.public));
});

// Build deploy code
gulp.task('build', ['base', 'sass', 'javascript', 'ng-templates', 'component-partial', 'assets']);

// Default Task + Watches
gulp.task('default', ['browser-sync', 'base', 'sass', 'javascript', 'ng-templates', 'bower-files', 'assets', 'component-partial', 'dev-index'], function () {
	gulp.watch(gulpConfig.js, ['javascript']);
	gulp.watch(gulpConfig.sass, ['sass']);
	gulp.watch([gulpConfig.html, gulpConfig.partials], ['ng-templates', 'dev-index']);
	gulp.watch(gulpConfig.assets, ['assets']);
});
