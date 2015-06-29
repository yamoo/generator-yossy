var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var nib = require('nib');
var config = require('../config.js');

gulp.task('stylus', function() {
    console.log('stylus');

    return gulp.src(config.stylus.compiled)
        .pipe(plumber())
        .pipe(stylus({
            use: [nib()]
        }))
        .pipe(gulp.dest(config.path.tmpStyles))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(reload({stream:true}));
});