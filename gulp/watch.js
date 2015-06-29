var gulp = require('gulp');
var watch = require('gulp-watch');

var config = require('../config.js');

gulp.task('watch', function() {
    console.log('watch');

    watch(config.ect.watched, function() {
        gulp.start(['ect']);
    });

    watch(config.stylus.watched, function() {
        gulp.start(['stylus']);
    });

    watch(config.sprite.watched, function() {
        gulp.start(['sprite']);
    });

});