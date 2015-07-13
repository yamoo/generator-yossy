var gulp = require('gulp');
var replace = require('gulp-replace');

var config = require('../config.js');

gulp.task('copy_preview', function(cb) {
    console.log('copy');

    gulp.src([config.path.tmp + '**'])
        .pipe(copy(config.path.preview));

    gulp.src([config.path.scripts + '*'])
        .pipe(copy(config.path.preview + 'js'));

    gulp.src([config.path.img + '*', '!' + config.path.img + '_*'])
        .pipe(copy(config.path.preview + 'img'));

    cb();
});

gulp.task('copy_dist', function(cb) {
    console.log('copy dist');

    return gulp.src([
        config.path.markups + '**',
        '!' + config.path.markups + '*.ect',
        '!' + config.path.markups + 'js',
        '!' + config.path.markups + 'js/**',
        '!' + config.path.markups + 'css',
        '!' + config.path.markups + 'css/**',
        '!' + config.path.markups + '*.ect',
        '!' + config.path.markups + '**/_*',
        '!' + config.path.markups + '**/_*/**'
        ])
        .pipe(gulp.dest(config.path.dist));
});