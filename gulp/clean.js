var gulp = require('gulp');
var rimraf = require('rimraf');

var config = require('../config.js');

gulp.task('clean', function(cb) {
    console.log('clean');

    return rimraf(config.path.tmp, cb);
});