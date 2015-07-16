var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    rename = require('gulp-rename'),
    config = require('../config.js');

gulp.task('iconFont', function() {
    console.log('iconFont');

    var fontName = 'icon';

    return gulp.src(config.path.svgs + '**/*.svg')
        .pipe(iconfont({ fontName: fontName, normalize: true }))
            .on('glyphs', function(glyphs, options) {
                console.log(glyphs, options);
                var options = {
                    className: fontName,
                    fontName: fontName,
                    fontPath: config.path.tmp + 'fonts/',
                    glyphs: glyphs
                };

                gulp.src('_iconTemplate.styl')
                    .pipe(consolidate('lodash', options))
                    .pipe(rename({ basename: '_' + fontName }))
                    .pipe(gulp.dest(config.path.styles));

                gulp.src('_iconTemplate.html')
                    .pipe(consolidate('lodash', options))
                    .pipe(rename({ basename: fontName }))
                    .pipe(gulp.dest(config.path.svgs));
            })
        .pipe(gulp.dest(config.path.tmp + 'fonts'));
});