var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
var requireDir = require('require-dir');
var dir = requireDir('./gulp');

var config = require('./config.js');

// gulp.task('compile', function(cb) {
//     runSequence(
//         ['clean', 'wiredep'],
//         'sprite',
//         ['ect', 'stylus', 'imagemin']
//     );
// });

gulp.task('serve', function(cb) {
    runSequence(
        ['clean_serve', 'wiredep'],
        'sprite',
        ['ect', 'stylus', 'imagemin'],
        ['browser-sync', 'watch']
    );
});

gulp.task('preview', function(cb) {
    runSequence(
        ['clean_preview', 'wiredep'],
        'sprite',
        ['ect', 'stylus', 'imagemin'],
        ['copy_preview']
    );
});

gulp.task('build', function(cb) {
    runSequence(
        ['clean_dist', 'wiredep'],
        'sprite',
        ['ect', 'stylus', 'imagemin'],
        ['copy_dist'],
        'usemin'
    );
});
