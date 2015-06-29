var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

var config = require('../config.js');

gulp.task('usemin', function () {
  return gulp.src(config.usemin.src)
      .pipe(usemin({
        css: [minifyCss(), 'concat'],
        html: [minifyHtml({empty: true})],
        js: [uglify(), rev()],
        inlinejs: [uglify({preserveComments:'some'})],
        inlinecss: [minifyCss(), 'concat']
      }))
      .pipe(gulp.dest(config.usemin.dest));
});