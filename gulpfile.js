var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
// var cache = require('gulp-cached');
var requireDir = require('require-dir');
var dir = requireDir('./gulp');

var config = require('./config.js');
// var tasks = Object.keys(gulp.tasks).sort();
// var len = tasks.length;

// cache('serve');

gulp.task('serve', function(cb) {
    // for (var i = 0; i < len; i ++) {
    //     cache(tasks[i]);
    // }
    runSequence(
        ['clean', 'wiredep'],
        'sprite',
        ['ect', 'stylus'],
        ['browser-sync', 'watch']
    );
});
