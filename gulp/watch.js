var gulp = require('gulp'),
    runSequence = require('gulp-run-sequence'),
    watch = require('gulp-watch');

var config = require('../config.js');

gulp.task('watch', function() {
    console.log('watch');

    watch('bower.json', function() {
        runSequence(
            'wiredep',
            'browser-reload'
        );
    });

    watch(config.path.markups + '**/*.ect', function() {
        runSequence(
            'ect',
            'htmlhint',
            'browser-reload'
        );
    });

    watch(config.path.styles + '**/*.styl', function() {
        runSequence(
            'stylus',
            'csslint',
            'autoprefixer',
            'browser-reload'
        );
    });

    watch(config.path.scripts + '**/*.js', function() {
        runSequence(
            'jshint',
            'browser-reload'
        );
    });

    watch(config.path.img + '**/*.{gif,png,jpg}', function() {
        runSequence(
            'imagemin',
            'browser-reload'
        );
    });

    watch(config.path.sprite + '**/*.png', function() {
        runSequence(
            'sprite',
            'browser-reload'
        );
    });

    watch(config.path.svgs + '**/*.svg', function() {
        runSequence(
            'iconFont',
            'browser-reload'
        );
    });

});