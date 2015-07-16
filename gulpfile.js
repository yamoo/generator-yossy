var gulp = require('gulp'),
    runSequence = require('gulp-run-sequence'),
    requireDir = require('require-dir'),
    dir = requireDir('./gulp'),
    config = require('./config.js');

gulp.task('serve', function(cb) {
    runSequence(
        ['clean_serve', 'wiredep'],
        'sprite',
        ['ect', 'imagemin', 'jshint'],
        'stylus',
        'csslint',
        'autoprefixer',
        ['browser-sync', 'watch']
    );
});

gulp.task('preview', function(cb) {
    runSequence(
        ['clean_preview', 'wiredep'],
        'sprite',
        ['ect', 'imagemin', 'jshint'],
        'stylus',
        'csslint',
        'autoprefixer',
        ['copy_preview']
    );
});

gulp.task('build', function(cb) {
    runSequence(
        ['clean_dist', 'wiredep'],
        'sprite',
        ['ect', 'imagemin', 'jshint'],
        'stylus',
        'csslint',
        'autoprefixer',
        ['copy_dist'],
        'useref'
    );
});
