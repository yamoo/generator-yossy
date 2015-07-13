var gulp = require('gulp');
var assetpaths = require('gulp-assetpaths');

var config = require('../config.js');

gulp.task('assetpaths', function(cb) {
    console.log('assetpaths');

    gulp.src([config.path.preview + '*'])
        .pipe(assetpaths({
            oldDomain: '/',
            newDomain: '.',
            docRoot : config.path.preview,
            filetypes : ['jpg','png','ico','gif','js','css'],
            templates: true
         }))
        .pipe(gulp.dest(config.path.preview));

    gulp.src([config.path.preview + 'css/*'])
        .pipe(assetpaths({
            oldDomain: '/',
            newDomain: '..',
            docRoot : config.path.preview,
            filetypes : ['jpg','png'],
            templates: true
         }))
        .pipe(gulp.dest(config.path.preview));

    return;
});