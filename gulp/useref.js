var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html');

var config = require('../config.js');

gulp.task('useref', function () {
    console.log('useref');

    var assets = useref.assets({searchPath: [config.path.tmp, config.path.markups, config.path.scripts, config.path.tmpStyles]});

    return gulp.src(config.useref.src)
        .pipe(assets)
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulpIf('*.html', minifyHtml()))
        .pipe(gulp.dest(config.useref.dest));
});