var gulp = require('gulp');
var browserSync = require('browser-sync');

var config = require('../config.js');

gulp.task('browser-sync', function() {
    console.log('brower-sync');

    return browserSync({
        notify: false,
        logLevel: 'silence',
        port: 9000,
        ui: {
            port: 9010
        },
        server: {
            baseDir: [config.path.tmp, config.path.markups],
            routes: {'/bower_components': 'bower_components'}
        }
    });
});

gulp.task('browser-reload', function() {
    console.log('brower-reload');

    browserSync.reload();
});