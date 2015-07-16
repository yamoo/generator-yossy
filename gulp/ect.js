var gulp = require('gulp');
var ect = require('gulp-ect');
var htmlhint = require('gulp-htmlhint');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var data = require('../app/_data/variables.json');
// var data2 = require('../app/_data/data.json');

var _ = require('underscore');
var config = require('../config.js');

// console.log(_.extend(data, data2));

gulp.task('ect', function() {
    console.log('ect');

    return gulp.src(config.path.markups + '**/[^_]*.ect')
        .pipe(plumber())
        .pipe(ect({
            data: data
        }))
        .pipe(gulp.dest(config.path.tmp))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(reload({stream:true}));
});