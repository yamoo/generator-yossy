var gulp = require('gulp');
var merge = require('merge-stream');
var sprite = require('gulp.spritesmith');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('../config.js');
var spriteData, imgStream, styleStream;

gulp.task('sprite', function() {
    console.log('sprite');

    spriteData = gulp.src(config.sprite.watched)
        .pipe(plumber())
        .pipe(sprite({
            imgName: config.sprite.destImg,
            cssName: config.sprite.destCSS,
            imgPath: config.sprite.imgPath,
            cssFormat: config.sprite.cssFormat
        }));
        // .pipe(reload({stream:true}));

    imgStream = spriteData.img
                .pipe(gulp.dest(config.path.img));

    styleStream = spriteData.css
                .pipe(gulp.dest(config.path.styles));

    return merge(imgStream, styleStream);
});