var gulp = require('gulp');
var rimraf = require('rimraf');

var config = require('../config.js');

gulp.task('clean_serve', function(cb) {
    console.log('clean');

    return rimraf(config.path.tmp, cb);
});

gulp.task('clean_preview', function(cb) {
    console.log('clean');

    return rimraf(config.path.preview, cb);
});

gulp.task('clean_dist', function(cb) {
    console.log('clean');

    return rimraf(config.path.dist, cb);
});