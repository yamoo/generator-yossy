var gulp = require('gulp'),
    runSequence = require('gulp-run-sequence'),
    watch = require('gulp-watch');

var config = require('../config.js');

gulp.task('watch', function() {
    console.log('watch');

    watch('bower.json', function() {
        gulp.start('wiredep');
    });

    watch(config.path.markups + '**/*.ect', function() {
        runSequence(
            'ect',
            'htmlhint'
        );
    });

    watch(config.path.styles + '**/*.styl', function() {
        runSequence(
            'stylus',
            'csslint',
            'autoprefixer'
        );
    });

    watch(config.path.scripts + '**/*.js', function() {
        gulp.start('jshint');
    });

    watch(config.path.img + '**/*.{gif,png,jpg}', function() {
        gulp.start('imagemin');
    });

    watch(config.path.sprite + '**/*.png', function() {
        gulp.start('sprite');
    });

    watch(config.path.svgs + '**/*.svg', function() {
        gulp.start('ifonFont');
    });

});