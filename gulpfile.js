var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var pug = require('gulp-pug');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var sourcemaps = require('gulp-sourcemaps');

var src = './src';
var dist = './dist';

gulp.task('default', ['serve']);

gulp.task('pug', function() {
    return gulp.src([src + '/*.pug']).pipe(pug()).pipe(gulp.dest(dist)).pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp.src([src + '/*.html']).pipe(gulp.dest(dist)).pipe(browserSync.stream());
});

gulp.task('assets', function() {
    return gulp.src([src + '/assets/*.*']).pipe(gulp.dest(dist)).pipe(browserSync.stream());
});

gulp.task('less', function() {
    return gulp.src(src + '/styles/*.less').pipe(less()).pipe(gulp.dest(dist)).pipe(browserSync.stream());
});

gulp.task('client', function() {

  var bundler=browserify({
          entries: src + '/main.js',
          debug: true
      });

  bundler.transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest(dist))
  .pipe(browserSync.stream());
});


gulp.task('build-client', [
    'less',
    'html',
    'assets',
    'pug',
    'client'
]);

gulp.task('build', ['build-client']);

// Watch
gulp.task('watch', ['build'], function() {
    gulp.watch(src + "/styles/*.less", ['less']);
    gulp.watch(src + "/*.html", ['html']);
    gulp.watch(src + "/assets/*.*", ['assets']);
    gulp.watch(src + "/*.pug", ['pug']);
    gulp.watch([src + "/*.js", src + "/views/*.jsx"], ['client']);
    gulp.watch(["./src/server/*.js", "src/server/lib/*.js"], ['build-server']);

});




// Static Server
gulp.task('serve', ['build-client'], function() {

    browserSync.init({
        server: dist
    });

    gulp.watch(src + "/styles/*.less", ['less_draft']);
    gulp.watch(src + "/*.html", ['html_draft']);
    gulp.watch(src + "/assets/*.*", ['assets_draft']);
    gulp.watch(src + "/*.pug", ['do_draft']);
    gulp.watch([
        src + "/*.js", src + "/views/*.jsx"
    ], ['client']);

});
